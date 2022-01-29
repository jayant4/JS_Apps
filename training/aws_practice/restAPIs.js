import express from 'express';
import cors from 'cors';
import { authenticateToken, generateAccessToken } from './jwt.js';
import { mongoRepository } from './repository.js';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/signup', (req, res) => {
    const x = req.body.userName
    const token = generateAccessToken(req.body.userName);
    res.json(token);
})

app.get('/getallbooks', authenticateToken, async (req, res) => {
    const books = await mongoRepository.getAllBooks();
    res.send(books);
})

app.listen(3333, () => {
    console.log("server is listing at 3333 port");
});
