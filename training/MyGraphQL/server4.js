import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import { mongoRepository } from './mongo-repository.js';

import graphql from 'graphql';
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLID } = graphql



const server = express();
server.use(cors());

const studentType = new GraphQLObjectType({
    name: "Student",
    fields: {
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        className: { type: GraphQLString },
        classId: { type: GraphQLID },
    }
})

const classType = new GraphQLObjectType({
    name: "Class",
    fields: {
        _id: { type: GraphQLID },
        className: { type: GraphQLString },
        classTeacherName: { type: GraphQLString },
        studentsList: { type: new GraphQLList(studentType) }
    }
});


const rootQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
        classes: {
            type: new GraphQLList(classType),
            args: {},
            resolve: async (parent, args) => {
                const result = await mongoRepository.getAllClasses();
                return result;
            }
        },

    }
})

const mutation = new GraphQLObjectType({
    name: "Mutationn",
    fields: {
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
                    return error;
                }
            }
        }
    }
});
const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: mutation,
});

server.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

server.listen(3333, () => {
    console.log("server is listing at 3333 port");
})
