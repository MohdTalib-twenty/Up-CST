const mongoose = require("mongoose");



const EmployeeSchema= mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    Email:{
        type :String,
        required : true
    },
    PhoneNumber:{
        type : String,
        required: true
    },
    AdharNumber:{
        type : String,
        required : true
    },
    Role:{
        type : String,
        required : true
    },
    Status:{
        type : String,
        required: true
    },
    Completed:[],
    Notification:{
        type : String,
        required : true
    },
    Process:{
        type : String,
        required : true
    }

},[]);


module.exports= mongoose.model("Employee",EmployeeSchema);