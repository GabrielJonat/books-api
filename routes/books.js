import BooksController from '../controllers/books.js';
export default (app, Books) => {
app.get('/books', async (req, res) => {
  try {
    const result = await Books.findAll();
    res.json(result);
  } catch (err) {
    res.status(502).send("erro de banco de dados: " + err.message);
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Books.findOne({where: {id: id}});
    res.json(result);
  } catch (err) {
    res.status(502).send("erro de banco de dados: "+err.message);
  }
});

app.post('/books', async (req, res) => {
  try {
    const name = req.query.name;
    const result = await Books.create({name: name});
    res.status(201).json(result);
  } catch (err) {
    res.status(502).send(err.message);
  }
});

app.put('/books/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.query.name;
    await Books.update({name: name},{where: {id: id }});
    const result = await Books.findOne({where: {id: id}})
    res.status(200).json(result);
  } catch (err) {
    res.status(502).send(err.message);
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Books.destroy({where: {id: id }});
    res.status(204).json();
  } catch (err) {
    res.status(502).send(err.message);
  }
});

app.get('/books/:name', async (req, res) => {
  try{
    const name = req.params.name;
    const books = await Books.findOne({where: {name: name}})
    res.status(200).json(books);
  }catch(err){
    res.status(502).send(err.message);
  }
})
}