const express = require('express')
const router = express.Router()

const movies = [
    {
        id: 1,
        title: 'Spider-Man Brand New Day'
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

module.exports = router
