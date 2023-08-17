const express = require("express");
const connectDb = require("./db");
const cors = require("cors");
const Pickup = require("./Model/Pickup");
const User = require("./Model/User");
const Employee = require("./Model/Employee");
var id="AC70725e04596e0dc65cfbc35d881b8f48"
var token = "4603043ceb4108cd679d1a37a0203f45"


var twilio = require('twilio')(id,token);


const app = express();
app.use(express.json());
app.use(cors());
connectDb();

app.post("/schedule", async (req, res) => {
  const { name, email, phonenumber, date, time, address } = req.body;
  if (name && email && phonenumber && date && time && address) {
    let pos = email.search("@gmail.com");

    if (pos == -1) {
      res.send({ message: "Enter Valid Email" });
    } else if (phonenumber.length < 10) {
      res.send({ message: "Enter Valid Phone Number" });
    } else {
      const Schedule = new Pickup({
        Name: name,
        Email: email,
        PhoneNumber: phonenumber,
        Date: date,
        Time: time,
        Address: address,
        EmpName : "?" ,
        Pending : "Your Order is in waiting list wait for the confirmation",
        Confirmed : " "

      });
      const result = await Schedule.save();
      res.send({ message: "Done", result });
    }
  } else {
    res.send({ message: "Enter all the fields" });
  }
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    User.findOne({ Email: email }, async (err, user) => {
      if (user) {
        res.send({ message: "User already exists" });
      } else {
        const user = new User({
          Name: name,
          Email: email,
          Password: password,
        });
        const result = await user.save();
        res.send({ message: "Registration Successfull", result });
      }
    });
  } else {
    res.send({ message: "Enter all Fields" });
  }
});



app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    User.findOne({ Email: email }, (err, user) => {
      if (user) {
        if (user.Password === password) {
          res.send({ message: "You are LoggedIn", user });
        } else {
          res.send({ message: "Password didn't matched" });
        }
      } else {
        res.send("Not Exixits");
      }
    });
  } else {
    res.send({ message: "Enter all Fields" });
  }
});



app.post("/connect", (req, res) => {
  const { name, email, phonenumber, adharnumber, role } = req.body;
  if (email && name && phonenumber && adharnumber && role) {
    Employee.findOne({Email:email,Name : name},async(err,user)=>{
      if(user){
        res.send({message: "User Already Connected"});
      }else{
        const employee = new Employee({
          Name : name,
          Email : email,
          PhoneNumber : phonenumber,
          AdharNumber : adharnumber,
          Role : role,
          Status : "Active",
          Completed:[],
          Notification: " ",
          Process : " "
          
        });
        const result = await employee.save();
        res.send({message:"You are now connected",result});
      }
    })
  } else {
    res.send({ message: "Enter all Fields" });
  }
});

app.post('/findEmployee',(req,res)=>{
  const {email}=req.body;
  Employee.findOne({Email : email},(err,user)=>{
    if(user){
      res.send(user);
    }else{
      res.send("User Not exists");
    }
  })
})
app.post('/findUser',(req,res)=>{
  const {email}=req.body;
  User.findOne({Email : email},(err,user)=>{
    if(user){
      res.send(user);
    }else{
      res.send("User Not exists");
    }
  })
})


app.get('/allEmployees',(req,res)=>{
   Employee.find((err,user)=>{
    if(user){
      res.send(user);
    }else{
      res.send(err);
    }
   })
})

app.post('/updateEmployeeNotification',async(req,res)=>{
      const {empname,_id}=req.body;
      const result= await Employee.updateOne({Name:empname},{
        $set:{
          Notification : _id,
        }
      });
      res.send(result);
})
app.post('/deleteEmployeeNotification',async(req,res)=>{
  const {email}=req.body;
  const result= await Employee.updateOne({Email:email},{
    $set:{
      Notification : ""
    }
  });
  res.send(result);
})



app.post('/getNotificationInfo',(req,res)=>{
   const {_id}= req.body;
   Pickup.findOne({_id : _id},(err,user)=>{
    if(user){
      res.send(user);
    }else{
      res.send(err);
    }
   })
})

app.post('/updateEmployeeStatustoProcess',async(req,res)=>{
  const {name,_id}=req.body;

  const result = await Employee.updateMany({ Name : name},{
    $set:{
      Notification : "",
      Status : "Booked",
      Process : _id
    }
  })
  const upd= await Pickup.updateOne({_id : _id},{
    $set:{
      EmpName : name 
    }
  })
  const result2 = await Employee.updateMany({},{
    $set:{
      Notification:""
    }
  }) 
  res.send(result2);

  
})
app.post("/checkEmployee",(req,res)=>{
  const{email}=req.body;
  Employee.findOne({Email : email},(err,user)=>{
     if(user){
      res.send("Employee");
     }else{
      res.send("Not an Employee");
     }
  })
})
app.post('/updateEmployeeStatustoCompleted',async(req,res)=>{
  const {name,Info}=req.body;
  const result = await Employee.updateOne({Name : name},{
    $set:{
      Process:"",
      Status:"Active"
    }
  })
  const result2 = await Employee.updateOne({Name:name},{
  $push:{
    Completed : Info
  }
  })
  res.send(result2);

})
app.post('/getEmployeeCompletedWork',(req,res)=>{
  const {empname}=req.body
  Employee.find({Name : empname},(err,user)=>{
    if(user){
      res.send(user);
    }else{
      res.send(err);
    }
  })
})

app.post('/sendMessage',(req,res)=>{
  const {message,phone}=req.body;
  twilio.messages.create({
    from : "+16073897368",
    to : phone,
    body : message

})
.then((re)=>res.send("Messge send"))
.catch((err)=>res.send(err))
})

app.listen(5000, () => {
  console.log("Server Connected");
});
