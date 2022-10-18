const express = require('express')
const morgan = require('morgan')
const dotenv = require(`dotenv`)
const mongoose = require(`mongoose`)
require(`dotenv`).config()
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(morgan(`dev`))
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//session info
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
    resave: false,
    saveUninitialized: true
  }))

// App settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(`/blogs`, require(`./controllers/BlogRouter`))
app.use(`/users`, require(`./controllers/UserRouter`))


app.get('/', (req,res)=>{
    res.render('pages/HomePage')
})


app.listen(PORT, ()=>{
    console.log(`Server running on port:${PORT}`)

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
    });
})