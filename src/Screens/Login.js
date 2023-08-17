import React, { useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./home.css";
export default function Login() {
  const navigate=useNavigate();
  const [password,setpassword]=useState("");
  const [email,setemail]=useState("")
  const [url,seturl]=useState('U');
  const handleSubmit = async () => {
    var res = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res = await res.json();
    // console.log(res.result.Name)

    if (res.message == "You are LoggedIn") {
      alert(res.message);   
      localStorage.setItem("user", JSON.stringify({email}));
      navigate("/");
    } else {
      alert(res.message);
    }
  };
  return (
    <>
      <div className="login" style={{ backgroundColor: "#55b994" }}>
        <Navbar />
        <section className="login">
          <div className="container  mt-5">
            <div
              className="row d-flex justify-content-center align-items-center "
              style={{ marginTop: "120px" }}
            >
              <div className="col-md-6 ">
                <h2 className="fw-bold ">Know the worth of your waste</h2>
                <h5 className="fw-bold mt-4">
                  The true cost of waste can be 5 to 20 times worth the actual
                  <br /> money spent on waste disposal. Why not recylce it?
                </h5>
                <div className="d-flex flex-row mt-4">
                  <NavLink to='/connect'>
                    <button className="btn px-3  py-2 border bg-success text-white fw-bold">
                      Connect With Us
                    </button>
                  </NavLink>
                  <button className="btn px-3 mx-4 py-2 border bg-dark text-white fw-bold">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="col-6 ">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <h3 className="mt-3">LOG IN</h3>
                    <hr className="mx-auto  w-25"></hr>
                    <div className="form-outline mt-4 mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                      />
                    </div>
                    {/* Checkbox */}
                    <button
                      className="btn bg-success text-white btn-lg btn-block"
                      type="submit"
                     onClick={handleSubmit}
                    >
                      Login
                    </button>
                    <p className="mt-4 fw-bold">
                      Don't have an Account? <a href="/connect">SignUp</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contact_section_3 mt-2">
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
          </div>
        </div>
        <div className="copyright_main ">
          <div className="container mt-4">
            <p className="copy_text text-center fw-bold text-white">
              © 2023 UP CST.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
