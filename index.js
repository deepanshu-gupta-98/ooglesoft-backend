const express  = require('express')
const cors = require('cors') 
const app = express()
const UserRouter = require('./routes/UserRouter')
const ContactUsRouter = require('./routes/ContactUsRouter')
var bodyParser = require('body-parser')


const PORT = 4035 || process.env.PORT
let corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Routers  start  
app.use('/api',UserRouter)
app.use('/api',ContactUsRouter)




// Routers  end

app.listen(PORT ,(req ,res)=>{
console.log(`server is runing port ${PORT}`)
})