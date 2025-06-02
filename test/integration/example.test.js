import './helpers.js';

function mockBook(id, name){
  return {id: id, name: name}
}
const Books = app.datasource.models.Books;

beforeEach(async () => {
  await Books.destroy({ where: {} });
  try{
    await Books.create({ name: 'livro' });
  }catch(err){
    console.error('Erro ao criar livro:', err.errors || err);
  }
});

describe('Routes books', () => {
  it('deve responder 200 na raiz', async () => {
    const res = await global.request.get('/');
    global.expect(res.status).to.equal(200);
  });

  it('deve retornar o livro inserido', async () => {
    const res = await global.request.get('/books');
    global.expect(res.body.length).to.equal(1);
    global.expect(res.body[0]).to.include(mockBook(2,'livro'));
  });

  it('deve retornar um livro específico', async () => {
    const res = await global.request.get('/books/3');
    global.expect(res.body).to.deep.equal(mockBook(3,'livro'));
  });

  it('deve criar um novo livro', async () => {
    const res = await global.request.post('/books?name=outro livro');
    global.expect(res.status).to.equal(201);
    global.expect(res.body).to.deep.equal(mockBook(5,'outro livro'))
  });

  it('deve atualizar um livro', async () => {
    const res = await global.request.put('/books/6?name=livro atualizado');
    global.expect(res.status).to.equal(200);
    global.expect(res.body).to.deep.equal(mockBook(6,'livro atualizado'))
  });

  it('deve deletar um livro', async () => {
    const res = await global.request.delete('/books/7');
    global.expect(res.status).to.equal(204);
  });

  //it('BookService get by name')
});