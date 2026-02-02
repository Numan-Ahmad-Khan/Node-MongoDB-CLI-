const mongoose = require("mongoose")

//mongoose setup
const mongooseURL = 'mongodb+srv://Numan:numan.mongo@cluster0.ntvqvow.mongodb.net/newDB'
const connectDB = async()=>{
  try{
    await mongoose.connect(mongooseURL);
    console.log("Mongo DB Connection Successful.....!!!")
}
  catch (error){
    console.error(`Mongo DB Connection Failed: ${error.message}`)
    process.exit(1);
  }
    console.log(`Currently in DB`,mongoose.connection.name)
}

module.exports = connectDB;


