const Author = require('../models/authors.model')

module.exports = {
    findAllAuthors: (req, res) => {
        Author.find().sort('name')
            .then((authors) => res.json(authors))
            .catch((err) => console.log(err))
    },
    findOneAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then((author) => res.json(author))
            .catch((err) => console.log(err))
    },
    createAuthor: (req, res) => {
        const { name } = req.body;
        Author.create({ name })
            .then((author) => res.json(author))
            .catch((err) => res.status(400).json(err))
    },
    updateAuthor: (req, res) => {
        Author.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
            .then((author) => res.json(author))
            .catch((err) => res.status(400).json(err))
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((result) => res.json(result))
            .catch((err) => console.log(err))
    }
}