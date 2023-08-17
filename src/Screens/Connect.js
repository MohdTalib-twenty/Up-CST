import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
export default function Connect() {
  const navigate=useNavigate();
  const [role, setrole] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [adharnumber, setadharnumber] = useState("");
  const handleSubmit = async () => {
    var res = await fetch("http://localhost:5000/connect", {
      method: "post",
      body: JSON.stringify({ name,email,phonenumber,adharnumber,role }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    res = await res.json();
    // console.log(res.result.Name)

    if (res.message == "You are now connected") {
      alert(res.message);
      navigate("/");
    } else {
      alert(res.message);
    }
    // console.log(role,email,name,phonenumber,adharnumber)
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
                  <NavLink to="/connect">
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
                    <h3 className="mt-3">Thank's for connecting with Us</h3>
                    <hr className="mx-auto  w-25"></hr>
                    <div className="form-outline mt-4 mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mt-4 mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                        value={phonenumber}
                        onChange={(e) => setphonenumber(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        placeholder="Adhar Number"
                        value={adharnumber}
                        onChange={(e) => setadharnumber(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="me-4 fw-bold">Role:-</label>
                      <select
                        value={role}
                        onChange={(e) => setrole(e.target.value)}
                        className="px-5 py-2"
                      >
                        <option>PickUp</option>
                        <option>Sender</option>
                      </select>
                    </div>
                    {/* Checkbox */}
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <p className="mt-4 fw-bold">
                      Already Connected? <a href="/login">Login</a>
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
