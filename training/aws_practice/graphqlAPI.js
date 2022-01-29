import express from 'express';
import cors from 'cors';
import { mongoRepository } from './repository.js';
import { graphqlHTTP } from 'express-graphql';
import graphql from 'graphql';
import { authenticateToken, generateAccessToken } from './jwt.js';

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
        signup: {
            type: GraphQLString,
            args: { userName: { type: GraphQLString } },
            resolve: async (parent, args) => {
                return generateAccessToken(args.userName);
            }
        },
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

app.use('/graphql', authenticateToken, graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3333, () => {
    console.log("server is listing at 3333 port");
})
