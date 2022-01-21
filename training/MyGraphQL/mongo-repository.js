import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

const databaseName = "School-Managment"
const classesCollectionName = "classes"
const studentsCollectionName = "students"

export const mongoRepository = {
    addClass: async function (className,classTeacherName) {
        try {
            await client.connect();
            const database = await client.db(databaseName);
            const collection = await database.collection(classesCollectionName);
            const result = await collection.insertOne({ className, classTeacherName, studentsList: [] })
            return result;
        }
        catch (err) { console.log(err); }
        finally { client.close(); }
    },
    
}

