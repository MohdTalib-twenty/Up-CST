import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate= useNavigate();
  const [user, setuser] = useState({});
  const [email,setemail]=useState("");
  const [Eemail, setEemail] = useState("");
  const [Uemail, setUemail] = useState("");
  const [employee, setemployee] = useState({});
  const [User, setUser] = useState({});
  const [name,setname]=useState("");
  useEffect(() => {
    const fetchD = async () => {
      var res = await JSON.parse(localStorage.getItem("user"));
      setuser(res);
      setemail(res.email);
    };
    fetchD();
  });
  

  const Logout = () => {
    localStorage.removeItem("user");
    navigate('/login')
    
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={require("../images/junk.png")}
              style={{ width: "300px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link mx-4  fw-bold text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link mx-4  fw-bold text-white"
                 href=" http://localhost:3001"
                >
                  Scrapyard
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link mx-4  fw-bold text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link mx-4  fw-bold text-white"
                  href="#services"
                >
                  Service
                </a>
              </li>
             
              
              <li className="nav-item">
                <a
                  className="nav-link mx-4  fw-bold text-white"
                  href="https://saahaszerowaste.com/blogs/"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-4  fw-bold text-white"
                  href="/rates"
                >
                  Current Rates
                </a>
              </li>
              {user ? (
                <li className="nav-item">
                  <div class="dropdown ">
                    <button
                      class="btn nav-link mx-4  fw-bold text-white dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Welcome 
                    </button>
                    <ul
                      class="dropdown-menu "
                      aria-labelledby="dropdownMenuButton1"
                     >   
                          <li>
                            <a class="dropdown-item mt-2" href={`/dashboard/${email}`}>
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#" onClick={Logout}>
                              LogOut
                            </a>
                          </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link mx-4  fw-bold text-white"
                    href="/login"
                  >
                    LogIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
