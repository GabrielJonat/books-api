import BooksController from "../../../controllers/books.js";
describe('Book Controller Unit Test', () =>{

    describe('Get All books: getAll()', () => {
        it('deve retornar uma lista de livros', () => {
            const Books = {findAll: td.function()};
            const expectedResponse = [{id: 1, name: 'Test Book'}];
            td.when(Books.findAll({})).thenResolve(expectedResponse);
            const booksController = new BooksController(Books);
            return booksController.getAll().then(response => expect(response.data).to.be.equal(expectedResponse))
        })
    });

    describe('Get books by id: getById()', () => {
        it('deve retornar um livro', () => {
            const Books = {findOne: td.function()};
            const expectedResponse = {id: 1, name: 'Test Book'};
            td.when(Books.findOne({where: {id: 1}})).thenResolve(expectedResponse);
            const booksController = new BooksController(Books);
            return booksController.getById({id: 1}).then(response => expect(response.data).to.be.equal(expectedResponse))
        })
    });
});