require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors');
const app = express()


app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to THService');
})

const LoginRouter = require('./server/router/login.router');
const RegisterRouter = require('./server/router/register.router');
const UserRouter = require('./server/router/user.router');
const StaffRouter = require('./server/router/staff.router');

app.use('/api/auth/login', LoginRouter);
app.use('/api/auth/register', RegisterRouter);
app.use('/user', UserRouter);
app.use('/staff', StaffRouter);


// ket noi mongodb
mongoose.connect(process.env.MONGO_URL_LOCAL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('Mongodb connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 8000;

const self = app.listen(port, () => {
    console.log(`server run to port ${port}`)
})

if (self.maxConnections && self._connections >= self.maxConnections) {
    clientHandle.close(); // causes ECONNRESET on the other end
    return;
}