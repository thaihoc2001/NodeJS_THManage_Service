require('dotenv').config();
const cors = require('cors')
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 5000;

app.use(cors)
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to THService');
})

const LoginRouter = require('./server/router/login.router');
const RegisterRouter = require('./server/router/register.router');

app.use('/api/auth/login', LoginRouter);
app.use('/api/auth/register', RegisterRouter)

//ket noi mongodb
mongoose.connect(process.env.MONGO_URL_LOCAL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('Mongodb connected'))
    .catch(err => console.log(err));


app.listen(port, () => {
    console.log(`server run to port ${port}`)
})
