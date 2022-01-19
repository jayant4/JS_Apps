import  express  from 'express';
import  cors  from 'cors';
import { graphqlHTTP } from 'express-graphql';

import { MongoClient, ObjectId } from 'mongodb';

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);


const server = express();
server.use(cors());

const studentType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        class_id: { type: GraphQLID },
    })
})

const classType = new GraphQLObjectType({
    name: "Class",
    fields: () => ({
        _id: { type: GraphQLID },
        className: { type: GraphQLString },
        classTeacherName: { type: GraphQLString },
        studentsList: { type: new GraphQLList(studentType) }
    })
});

const databaseName = "School-Managment"
const classesCollectionName = "classes"
const studentsCollectionName = "students"

const mongoRepository = {
    addClass: async function () {
        try {
            await client.connect();
            const database = await client.db(databaseName);
            const collection = await database.collection(classesCollectionName);
            const result = await collection.insertOne({ className, classTeacherName, studentsList: [] })
            return result;
        } finally { client.close(); }
    }
}

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        classes: { type: GraphQLString },
        args: {},
        async resolve(parent, args) {
            return "Hello from class"
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addClass: {
            type: classType,
            args: {
                className: { type: GraphQLString },
                classTeacherName: { type: GraphQLString },
            },
            async resolve(parent, args) {

                try {
                    const result = await mongoRepository.addClass(args.className, args.classTeacherName);
                    return ({ _id: result.insertedId });
                } catch (error) {

                }
            }
        }
    })

});

const schema = new GraphQLObjectType({ query: RootQuery, mutation: Mutation });
server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

server.listen(3333, () => {
    console.log("server is listing at 3333 port");
})
