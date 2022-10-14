import express from 'express';
import petsRoutes from './routes/pets.routes.js'

const app = express()

app.use(express.json())

//Manejo del erro cuando no se pone el Endpoint correcto, en este caso pets
app.use((req,res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})
app.use(petsRoutes)

export default app;