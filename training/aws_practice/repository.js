import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

const databaseName = "Books-Managment"
const booksCollectionName = "books"


// const books = [
//     { id: 1, title: 'Harry Potter and the Chamber of Secrets', author: "J. K. Rowling" },
//     { id: 2, title: 'Harry Potter and the Prisoner of Azkaban', author: "J RR Martin" },
//     { id: 3, title: 'Harry Potter and the Goblet of Fire', author: "Ruskin Bond" },
//     { id: 4, title: 'The Fellowship of the Ring', author: "J. K. Rowling" },
//     { id: 5, title: 'The Two Towers', author: "J. K. Rowling" },
//     { id: 6, title: 'The Return of the King', author: "J. K. Rowling" },
//     { id: 7, title: 'The Way of Shadows', author: "J RR Martin" },
//     { id: 8, title: 'Beyond the Shadows', author: "J RR Martin" }
// ]

export const mongoRepository = {
    addBook: async function (book) {
        try {
            await client.connect();
            const database = await client.db(databaseName);
            const collection = await database.collection(booksCollectionName);
            const result = await collection.insertOne(book);
            return result;
        }
        catch (err) { console.log(err); }
        finally { client.close(); }
    },
    getAllBooks: async function () {
        try {
            await client.connect();
            const database = await client.db(databaseName);
            const collection = await database.collection(booksCollectionName);
            const result = await collection.find({}).toArray();
            return result;
        }
        catch (err) { console.log(err); }
        finally { client.close(); }
    },
    // addStudent: async function (className, studentName) {
    //     // take class , find that from classes collection, add this student to student collection with class id, insert this student id in array of class

    //     try {
    //         await client.connect();
    //         const database = await client.db(databaseName);
    //         const classesCollection = await database.collection(booksCollectionName);
    //         const studentsCollection = await database.collection(studentsCollectionName);
    //         const result = await classesCollection.findOne({ className });
    //         let classId;

    //         if (result !== null) { // class exists and we can retrieve id

    //             classId = result._id.toString();
    //             const studentObject = {
    //                 name: studentName,
    //                 className,
    //                 classId
    //             }

    //             const insertStudent = await studentsCollection.insertOne(studentObject);

    //             const result1 = await classesCollection.updateMany({ _id: ObjectId(classId) }, { $push: { studentsList: studentObject } })

    //             return insertStudent;
    //         } else {
    //             throw "Given class does not exist..."
    //         }
    //     } //catch (err) { console.log(err); }
    //     finally { client.close(); }

    // },
    // getStudentByName: async function (name) {
    //     try {
    //         await client.connect();
    //         const database = await client.db(databaseName);
    //         const studentsCollection = await database.collection(studentsCollectionName);
    //         const result = await studentsCollection.findOne({ name });
    //         return result;
    //     } finally {
    //         client.close();
    //     }
    // },
    // deleteStudent: async function (name) {
    //     try {
    //         await client.connect();
    //         const database = await client.db(databaseName);
    //         const classesCollection = await database.collection(booksCollectionName);
    //         const studentsCollection = await database.collection(studentsCollectionName);
    //         const studentObject = await studentsCollection.findOne({ name });

    //         if (studentObject != null) { // item got deleted successfully;
    //             const res = await classesCollection.updateOne({ _id: ObjectId(studentObject.classId) }, { $pull: { studentsList: { _id: studentObject._id } } });
    //             const result = await studentsCollection.deleteOne({ name });
    //             return res;
    //         } else {
    //             throw `no student found ${name}`;
    //         }

    //     } finally {
    //         client.close();

    //     }
    // }
}

