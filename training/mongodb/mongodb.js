//const {MongoClient} = require('mongodb');




export async function connectToDatabase(client) {

    try {
        await client.connect();
        

    } catch (e) {
        console.error(e);
    } finally {
    }
}


export async function listDatabases(client) {
    let databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

export async function closeConnection(client){
    await client.close();
}