import { MongoClient } from 'mongodb';
import * as mongoHelper from "./mongodb.js";


const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

const dbName = "QuestionsDB";
const collectionName = "questionCollection";

async function execute() {


    let obj = {
        "Statement": "eee",
        "option1": "e1",
        "option2": "e2",
        "option3": "e3",
        "option4": "e4",
        "correctAnswer": 1,
        "marks": 8
    }

    let updateObj = {
        "Statement": "eee",
        "correctAnswer": 4,
        "marks": 80
    }

    try {

        await mongoHelper.connectToDatabase(client).catch(console.error);

        //await mongoHelper.listDatabases(client);

        //await mongoHelper.insertOne(client, dbName, collectionName, obj);

        await mongoHelper.updateOne(client, dbName, collectionName, updateObj);

        //await mongoHelper.deleteOne(client, dbName, collectionName);

        await mongoHelper.readAll(client, dbName, collectionName);


    } catch (error) {
        console.log(error);
    } finally {

        await mongoHelper.closeConnection(client);
    }


}
execute();