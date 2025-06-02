import express from 'express';
import config from './config/config.js';
import datasource from './config/datasource.js';
import booksRouter from './routes/books.js';
const app = express();
app.config = config;

const db = await datasource(app);
app.datasource = db;
const Books = app.datasource.models.Books;
booksRouter(app,Books);
app.set('port', 3000);
app.get('/', async (req, res) => {
    res.status(200).send("Jesus é o Senhor!");
});

export default app;
