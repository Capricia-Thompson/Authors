const authorsController = require('../controllers/authors.controller');

const { findAllAuthors, findOneAuthor, updateAuthor, createAuthor, deleteAuthor } = authorsController;

module.exports = app => {
    app.get('/authors', findAllAuthors);
    app.get('/authors/:id', findOneAuthor);
    app.patch('/authors/:id', updateAuthor);
    app.post('/authors', createAuthor);
    app.delete('/authors/:id', deleteAuthor);
}