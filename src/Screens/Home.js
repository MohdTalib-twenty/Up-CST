import React, { useEffect, useState } from "react";
import {json, useNavigate} from "react-router-dom"
import Navbar from "../Components/Navbar";
import "./home.css";
export default function Home() {
  const navigate= useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [date, setdate] = useState("");
  const [address, setaddress] = useState("");
  const [time,settime]=useState("");
  const [img,setimg]=useState("");
  const [path,setpath]=useState("")


  const ShowImg=async()=>{
    const formData = new FormData()
    formData.append("image",img)
    var path='C:\\\\Users\\\\lenovo\\\\Desktop\\\\UP CST Project\\\\client\\\\src\\\\images'
    var Names = img.name
    var recognizer=`${path}\\\\${Names}`
    //console.log(recognizer)
    var res = await fetch('http://127.0.0.1:7000/predict',{
      method :'post',
      body : JSON.stringify({recognizer}),
      headers:{
        'Content-Type' : "application/json"
      }

    })
    res = await res.json()
    alert(res.price)
    
  }
  const Send=async()=>{
    var employees=[{}];
    var allEmployees= await fetch("http://localhost:5000/allEmployees",{
      method : 'get'
    }) 
    allEmployees = await allEmployees.json();
    for(var i=0;i<allEmployees.length;i++){
      if(allEmployees[i].Status === "Active" && allEmployees[i].Role === "PickUp"){
        //console.log(allEmployees[i])
        employees.push(allEmployees[i]);
      }
    }
    // console.log(employees.length);
    // for(var j=1;j<employees.length;j++){
    //   console.log(employees[j].Name);
    // }

   if(employees.length > 1){
    //console.log(employees.length)
         var schedule = await fetch("http://localhost:5000/schedule",{
          method : 'post',
          body : JSON.stringify({name,email,phonenumber,date,time,address}),
          headers:{
            'Content-Type' : 'application/json'
          }
         })
         schedule = await schedule.json();
        var _id = schedule.result._id;
         if(schedule.message === "Done"){
                for(var j=1;j<employees.length;j++){
                  var empname = employees[j].Name;
                  // console.log(empname,name,email,phonenumber,address)
                 var results = await fetch("http://localhost:5000/updateEmployeeNotification",{
                  method : 'post',
                  body : JSON.stringify({empname,_id}),
                  headers:{
                    'Content-Type' : 'application/json'
                  }
                 
                 })
                 results = await results.json();
                 console.log(results)
                }
                alert(schedule.message);
                navigate("/login");
         }else{
            alert(schedule.message);
         }
   }else{
    alert("All employees are busy please try after some times")
   }
  }

  return (
    <>
      <div className="upper_section">
        <Navbar />
        <div id="home">
          <div className="container mt-3 ">
            <div className="row">
              <div className="col-md-6">
                <h3 className="fw-bold" style={{ marginTop: "200px" }}>
                  Know the worth of your waste
                </h3>
                <h6 className="fw-bold mt-4">
                  The true cost of waste can be 5 to 20 times worth the actual
                  <br /> money spent on waste disposal. Why not recylce it?
                </h6>
                <div className="d-flex flex-row mt-4">
                  <button className="btn px-3  py-2 border bg-success text-white fw-bold">
                    Get Started
                  </button>
                  <button className="btn px-3 mx-4 py-2 border bg-dark text-white fw-bold" href="#contact">
                    Contact Us
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <img
                  src={require("../images/remvt.png")}
                  style={{ height: "500px", width: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container mt-4">
          <div className="row">
            <h2 className="fw-bold text-center mt-4">
              Why you should <span className="text-success"> choose us</span>{" "}
            </h2>
            <p className="mt-4 text-center">
              We are another definition of innovation since we know how to
              create useful things out of waste.
            </p>
          </div>
          <div className="row mt-5 ">
            <div className=" col-sm-4">
              <div className="power" style={{ backgroundColor: " #2aaf80" }}>
                <div className="icon">
                  <a href="#">
                    <img className="" src={require("../images/cash.png")} />
                  </a>
                </div>
                <h2 className="totaly_text text-white">Best rates</h2>
                <p className="making text-white">
                  We provide the best value for your scrap from our wide network
                  of recyclers.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="power">
                <div className="icon">
                  <a href="#">
                    <img src={require("../images/optimised-icon.png")} />
                  </a>
                </div>
                <h2 className="totaly_text">Convenience</h2>
                <p className="making">
                  Doorstep pickup according to users convenient date and time.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="power">
                <div className="icon">
                  <a href="#">
                    <img src={require("../images/headfone-icon.png")} />
                  </a>
                </div>
                <h2 className="totaly_text">Eco-friendly</h2>
                <p className="making">
                  We ensure responsible recycling of your scrap items.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="upload" className="about_main mt-5">
        <div className="container">
          <div className="row mt-5">
            <div className="offset-2 col-md-3">
              <div className="images mt-5">
                <img
                  src={require("../images/dry.png")}
                  style={{ maxWidth: "450px", height: "400px" }}
                />
              </div>
            </div>
            <div className="offset-2 col-md-5">
              <div className="right_section_main">
                <h4 className="dolar_tetx ">
                  <strong style={{ color: "#2ba879" }}>Upload an image</strong>
                </h4>
                <input
                  className="mt-3"
                  type="file"
                  id="image_input"
                  accept="image/*"
                  onChange={(e)=>setimg(e.target.files[0])}
                 
                />
                <br />
                <br />
                {
                  img ? (
                    <>
                      <img  className="my-3" src={URL.createObjectURL(img)}  style={{width : "300px" , height : "200px"}}/>
                    </>
                  ):(
                    <div id="display_image" ></div>
                  )
                }
                
                <br />
                <button className="btn px-5 btn-success" onClick={ShowImg}>Show Price</button>
                <p className="mt-3">
                  Note:The prices may vary with fluctuation in the scrap market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services mt-5" id="services">
        <div className="container">
          <div className="row">
            <h2 className="fw-bold text-center mt-4">
              Our <span className="text-success"> Services </span>
            </h2>
            <p className="mt-4 text-center">
              We at Junkies help you sell your scrap just as easy as snapping
              your fingertips.
            </p>
          </div>
          <div className="row mt-5 ">
            <div className=" col-sm-4">
              <div className="power">
                <div className="icon">
                  <a href="#">
                    <img className="" src={require("../images/icon-1.png")} />
                  </a>
                </div>
                <h4 className="totaly_text ">Upload an image</h4>
                <p className="making ">
                  Click a picture of your waste product and our AI system will
                  predict the estiamted price for it.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="power" style={{ backgroundColor: " #2aaf80" }}>
                <div className="icon">
                  <a href="#">
                    <img src={require("../images/icon-2.png")} />
                  </a>
                </div>
                <h4 className="totaly_text text-white">
                  On demand pickup of scrap
                </h4>
                <p className="making text-white">
                  Let us know when and where, and we'll be there with a variety
                  of services. Instill in us your trust and we promise that
                  we’ll offer the best.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="power">
                <div className="icon">
                  <a href="#">
                    <img src={require("../images/icon-3.png")} />
                  </a>
                </div>
                <h4 className="totaly_text">Find nearest recycling centres</h4>
                <p className="making">
                  We have customized panel for corporates to systematically get
                  rid of the scrap to your nearest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
          <h2 className="fw-bold text-center mt-5 ">Schedule your Pickup</h2>
        </div>
      </div>
      <div className="pickups mt-5" id="contact">
        <div className="container">
          <div className="row  mt-5 pt-3 pb-3">
            <div className=" offset-1 col-md-5">
              <div className="input_main">
                <div className="container">
                  <form >
                    <div className="form-group">
                    <p className="text-center mt-2 mb-2 fw-bold">Please Collect Min 2kg scrap Otherwise Charges may apply</p>
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Name"
                        value={name}
                        onChange={(e)=>setname(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                    
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="email-bt"
                        placeholder="Phone"
                        value={phonenumber}
                        onChange={(e)=>setphonenumber(e.target.value)}
            
                      />
                      <br /> <br />
                      <input
                        type="date"
                        className="email-bt"
                        id="pickup"
                        value={date}
                        onChange={(e)=>setdate(e.target.value)}
                    
                      />
                      <input
                        type="time"
                        className="email-bt"
                        id="time"
                      
                        placeholder="Time"
                        value={time}
                        onChange={(e)=>settime(e.target.value)}
           
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="massage-bt"
                        placeholder="Address"
                        rows={5}
                        id="comment"
                        
                        value={address}
                        onChange={(e)=>setaddress(e.target.value)}
                     
                      />
                    </div>
                  </form>
                </div>
                <div className="send_btn mt-4">
                  <button className="main_bt" onClick={Send}>
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section_right">
                <img
                  src={require("../images/pick.png")}
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="contact_section_3 mt-5">
            <div className="container">
              <div className="contact_taital">
                <div className="row web">
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="map_main">
                      <img src={require("../images/map-icon.png")} />
                      <span className="londan_text">New Delhi India</span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4">
                    <div className="map_main">
                      <img src={require("../images/phone-icon.png")} />
                      <span className="londan_text">+919886656566</span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4">
                    <div className="map_main">
                      <img src={require("../images/email-icon.png")} />
                      <span className="londan_text">junkies@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_product">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-2">
                    {/* <div class="footer-logo"><img src="images/footer-logo.png" style="max-width: 100%;"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_main mt-5">
            <div className="container mt-5">
              <p className="copy_text text-center fw-bold text-white">
                © 2023 UP CST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
