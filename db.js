const mongoose = require('mongoose');

const connectDb = async () =>{
    const conn = await mongoose.connect('mongodb+srv://kaleb:kaleb89442632@cluster0.luteflz.mongodb.net/task?retryWrites=true&w=majority')
    console.log(`Connected`)
}

module.exports = connectDb;