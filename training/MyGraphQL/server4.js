import express, { json } from "express";
import cors from 'cors';
import { graphql } from "graphql";
import { graphqlHTTP } from "express-graphql";
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLID } = graphql
import { MongoClient, ObjectId } from 'mongodb';

const url = 'mongodb://localhost:27017/';

const client = new MongoClient(url);

const server = express();
server.use(json());
server.use(cors());

const studentType = new GraphQLObjectType({
    name:"Student",
    fields: () => ({
        _id : {type: GraphQLID},
        name:{type:GraphQLString},
        class_id: {type: GraphQLID},
    })
})

