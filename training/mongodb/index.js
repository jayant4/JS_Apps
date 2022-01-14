import { MongoClient } from 'mongodb';
import * as mongoHelper from "./mongodb.js";


const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function  execute() {

    await mongoHelper.connectToDatabase(client).catch(console.error);
    
    await mongoHelper.listDatabases(client);
    
    await mongoHelper.closeConnection(client);

}
execute();