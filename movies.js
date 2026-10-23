const express = require('express')
const router = express.Router()

const movies = [
    {
        id: 1,
        title: 'Spider-Man: Brand New Day'
    },
    {
        id: 2,
        title: 'Avengers: Doomsday'
    },
    {
        id: 3,
        title: 'Purple Hearts'
    }
]

router.get('/', (req, res) => {
    res.json(movies)
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const findMovie = movies.find((movie) => movie.id === id)
    res.json(findMovie)
})

router.post('/', (req, res) => {
    const movie = {
        id: movies.length + 1, 
        title : req.body.title
    }
    movies.push(movie)
    res.send(movie)
})


router.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const findMovie = movies.find((movie) => movie.id === id)

    findMovie.title = req.body.title
    res.send(findMovie)
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const findMovie = movies.find((movie) => movie.id === id)

    const index = movies.indexOf(findMovie)
    movies.splice(index, 1)

    res.send(findMovie)
})
module.exports = router
