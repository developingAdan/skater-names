const express = require('express')
const app = express()
const PORT = 8000

const skatersObject = {
    'mason silva': {
        'age': 28,
        'sponsors': ['Nike SB', 'Bones'],
        'birthLocation': 'Somewhere, SomePlace' 
    },

    'trevor colden': {
        'age': 24,
        'sponsors': ['Skate Mental', 'Other'],
        'birthLocation': 'Somewhere, SomePlaaace' 
    },

    'dan corrigan': {
        'age': 32,
        'sponsors': ['Powell-Peralta', 'Others'],
        'birthLocation': 'Somewhere, California' 
    },
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:skaterName', (request, response) => {
    const skatersName = request.params.skaterName.toLowerCase()
    if (skatersObject[skatersName]) {
        response.json(skatersObject[skatersName])
    } else {
        response.json(skatersObject['dan corrigan'])
    }
    // response.json(skatersObject)
})

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}! You better go catch it.`)
})