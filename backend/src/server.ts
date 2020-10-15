import express  from 'express'

import './database/connection'

const app = express()

app.use(express.json())

//Rota = conjuto
//Recurso = users
//Metodos HTTP GET, POST, PUT, DELETE
//Query Params: http://localhost:3333/users/?search
//Route Params: http://localhost:3333/users/1

app.get('/users', (request, response) => {
    return response.json( { message: 'hello World' } )
})

app.listen(3333)


