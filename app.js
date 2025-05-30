import express from 'express'
import config from 'config'
import datasource from './config/datasource';
const app = express();
const Books = app.datasource.models.Books;
app.config = config
app.datasource = datasource(app)
app.set('port',3000)
app.get('/', async (req, res) => {
    const query = await Books.findAll({});
    res.status(200).json(result);
});

export default app; 