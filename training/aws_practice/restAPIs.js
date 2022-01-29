import express from 'express';
import cors from 'cors';

import { mongoRepository } from './repository.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getallbooks', async (req, res) => {
    const books = await mongoRepository.getAllBooks();

    books.forEach(book => {
        console.log(book.title);
    });
    res.send(books);
})



app.listen(3333, () => {
    console.log("server is listing at 3333 port");
});
