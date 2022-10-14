import { Router } from "express";
import { getPets, getPet, createPets } from "../controller/pets.controller.js";

const router = Router()

router.get('/pets', getPets) //Solicitud del metodo get u obtener

router.get('/pets/:id', getPet)//Solicitud del metodo get id u obtener metodo por id

router.post('/pets', createPets )//Solicitud del metodo create o crear nuevo ped

export default router