//Configuracion de los elementos para conectarse a la base de datos
import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 3000

export const DB_USER = process.env.PORT || 'root'

export const DB_PASSWORD = process.env.PORT || 'root'

export const DB_HOST = process.env.PORT || 'localhost'

export const DB_DATABASE = process.env.PORT || 'petsb'

export const DB_PORT = process.env.PORT || '3306'