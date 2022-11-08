import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'
import clientRouter from './routes/client.Routes.js'
import db from './config/db.js'
import Container from './models/clientModel.js'

const app = express()
const __dirname = path.resolve()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use('/css', express.static(__dirname + '/css'))
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(clientRouter)

db.sync().then(()=> app.listen(3000)).catch((err)=> console.log(err))