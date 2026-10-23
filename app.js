const express = require('express')
const app = express()
const moviesRouter = require('./movies')
const PORT = 3000

app.use(express.json())

app.use('/movies', moviesRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the Movie API')
})


app.listen(PORT, (error) => {
    if (error) {
        console.log('Something went wront...')
        console.log(error)
    } else {
        console.log(`port ${PORT} is running`)
        console.log(`The server is running on http://localhost:${PORT}`)
    }
})
