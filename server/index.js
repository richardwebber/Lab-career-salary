// Import all packages
import express from "express"
import morgan from 'morgan'
import ViteExpress from 'vite-express'

// Setup express instance
const app = express()

// Set up middleware
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

// ROUTES GO HERE
import handlerFunctions from './controller.js'
const {getInvoices, addInvoice, deleteInvoice, editInvoice} = handlerFunctions

app.get('/invoices', getInvoices)
app.post('/invoice', addInvoice)
app.delete('/invoice/:id', deleteInvoice)
app.put('/invoice/:id', editInvoice)

// Open door to server
ViteExpress.listen(app, 7777, () => console.log(`Server is listening on http://localhost:7777`))