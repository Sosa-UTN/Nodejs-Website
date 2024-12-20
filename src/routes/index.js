import { Router } from "express"
import { title } from "process"
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'First Web with Node'})) 

router.get('/about', (req, res) => res.render('about', { title: 'About Me'})) 

router.get('/contact', (req, res) => res.render('contact', { title: 'Contact Page'}))

export default router