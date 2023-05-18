const express = require('express');
const connectDb = require('./db')
const cors = require('cors');
const {getTask, setTask} = require('./controller')

connectDb()
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())


app.get('/api/task', getTask)
app.post('/api/task', setTask)



app.listen('5000', ()=>{
    console.log('listening on port 5000');
})