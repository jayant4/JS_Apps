import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

const databaseName = "School-Managment"
const classesCollectionName = "classes"
const studentsCollectionName = "students"

export const mongoRepository = {
    addClass: async function (className, classTeacherName) {
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
    getAllClasses: async function () {
        try {
            await client.connect();
            const database = await client.db(databaseName);
            const collection = await database.collection(classesCollectionName);
            const result = await collection.find({}).toArray();
            return result;
        }
        catch (err) { console.log(err); }
        finally { client.close(); }
    },
    addStudent: async function (className, studentName) {
        // take class , find that from classes collection, add this student to student collection with class id, insert this student id in array of class

        try {
            await client.connect();
            const database = await client.db(databaseName);
            const classesCollection = await database.collection(classesCollectionName);
            const studentsCollection = await database.collection(studentsCollectionName);
            const result = await classesCollection.findOne({ className });
            let classId;

            if (result !== null) { // class exists and we can retrieve id

                classId = result._id.toString();
                const studentObject = {
                    name: studentName,
                    className,
                    classId
                }

                const insertStudent = await studentsCollection.insertOne(studentObject);

                const result1 = await classesCollection.updateMany({ _id: ObjectId(classId) }, { $push: { studentsList: studentObject } })

                return insertStudent;
            } else {
                throw "Given class does not exist..."
            }
        } //catch (err) { console.log(err); }
        finally { client.close(); }

    },
    getStudentByName: async function (name) {
        try {
            await client.connect();
            const database = await client.db(databaseName);
            const studentsCollection = await database.collection(studentsCollectionName);
            const result = await studentsCollection.findOne({ name });
            return result;
        } finally {
            client.close();
        }
    },
    deleteStudent: async function (name) {
        try {
            await client.connect();
            const database = await client.db(databaseName);
            const classesCollection = await database.collection(classesCollectionName);
            const studentsCollection = await database.collection(studentsCollectionName);
            const studentObject = await studentsCollection.findOne({ name });

            if (studentObject != null) { // item got deleted successfully;
                const res = await classesCollection.updateOne({ _id: ObjectId(studentObject.classId) }, { $pull: { studentsList: { _id: studentObject._id } } });
                const result = await studentsCollection.deleteOne({ name });
                return res;
            }else{
                throw `no student found ${name}`;
            }

        } finally {
            client.close();

        }
    }
}

 //mongoRepository.addClass("8","Nikhil").then(c => { console.log(c.insertedId); });
// mongoRepository.getAllClasses().then(c => { console.log(c); });
//mongoRepository.addStudent("8", "Jayant").then(c => { console.log(c); });
//mongoRepository.addStudent("10", "Protik Sarkar").then(c => { console.log(c); });
// mongoRepository.getStudentByName("Jayant").then(c => { console.log(c); });
//mongoRepository.deleteStudent("Protik Sarkar").then(c => { console.log(c); });