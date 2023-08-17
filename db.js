const mongoose = require("mongoose")


const connectDb=async()=>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect("mongodb+srv://abdulanas0000:pKOoy1c3Dkr3keBw@cluster0.skwmr4t.mongodb.net/test",{
            useNewUrlParser : true
         }).then(()=>{
            console.log("Db connected")
         })
    }catch(err){
        console.log(err);
    }
}
connectDb();
module.exports=connectDb;