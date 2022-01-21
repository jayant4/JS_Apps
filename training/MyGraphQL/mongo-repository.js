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
            const result = await (await classesCollection.findOne({ className }));
            let classId;

            if (result !== null) { // class exists and we can retrieve id
            
                classId = result._id.toString();
                const studentObject = {
                    name: studentName,
                    className,
                    classId
                }

            const insertStudentId = await (await studentsCollection.insertOne(studentObject)).insertedId;
            
            const result1 = await classesCollection.updateMany({ _id: ObjectId(classId) }, { $push: { studentsList: studentObject } })
            return result1;




            } else {
                throw "Given class does not exist..."
            }


            
        } catch (err) { console.log(err); }
        finally { client.close(); }

    }
}

// mongoRepository.getAllClasses();
mongoRepository.addStudent("8", "Topon Sarkar").then(c => { console.log(c); });