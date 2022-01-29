import express from 'express';
import cors from 'cors';
import { mongoRepository } from './repository.js';
import { graphqlHTTP } from 'express-graphql';
import graphql from 'graphql';

const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLID } = graphql

const app = express();


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: {
        _id: { type: GraphQLID },
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
    }
})


const rootQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
        books: {
            type: new GraphQLList(BookType),
            args: {},
            resolve: async (parent, args) => {
                const result = await mongoRepository.getAllBooks();
                return result;
            }
        }
    }
})


const schema = new GraphQLSchema({
    query: rootQuery
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3333, () => {
    console.log("server is listing at 3333 port");
})
