const express = require('express')
const app = express()
const PORT = 8801

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Movie API')
})


app.listen(PORT, (error) => {
    if (error) {
        console.log('Something went wront...')
        console.log(error)
    } else {
        console.log(`The server is running on http://localhost:${PORT}`)
    }
})
