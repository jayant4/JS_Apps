
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

export async function closeConnection(client) {
    await client.close();
}

export async function readAll(client, dbName, collectionName) {
    await client.db(dbName).collection(collectionName).find().toArray()
        .then(results => {
            console.log(results)
        })
        .catch(error => console.error(error))
}


export async function insertOne(client, dbName, collectionName, objectToInsert) {
    await client.db(dbName).collection(collectionName).insertOne(objectToInsert).then(results => {
        console.log(results)
    })
        .catch(error => console.error(error))
}

export async function updateOne(client, dbName, collectionName, objectToUpdate) {
    await client.db(dbName).collection(collectionName).updateOne(
        { Statement: "eee" },
        { $set: objectToUpdate }
    ).then(results => {
        console.log(results)
    })
        .catch(error => console.error(error))
}

export async function deleteOne(client, dbName, collectionName) {
    await client.db(dbName).collection(collectionName).deleteOne(
        { Statement: "eee" },
    ).then(results => {
        console.log(results)
    })
        .catch(error => console.error(error))
}