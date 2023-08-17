const mongoose=require("mongoose")



const PickupSchema= new mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    Email :{
        type : String,
        required : true
    },
    PhoneNumber:{
        type : String,
        required : true
    },
    Date:{
       type : String,
       required : true
    },
    Time:{
        type : String,
        required : true,
    },
    Address:{
        type : String,
        required : true
    },
    EmpName:{
        type : String,
        required : true
    },
    Pending:{
        type : String,
        required : true
    },
    Confirmed:{
        type : String,
        required:true
    }
},[]);

module.exports = new mongoose.model("Pickup",PickupSchema);