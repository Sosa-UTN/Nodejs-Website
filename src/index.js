import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))   //obtengo la ruta obsoluta de view

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')   //setea el modulo ejs

app.use(indexRoutes)    //uso los routes

app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log('server is listening', 3000)

