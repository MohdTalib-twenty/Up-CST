import React, { useEffect, useState } from "react";
import { resolvePath, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

import "./home.css";

export default function EDashboard() {
  const navigate = useNavigate();
  const { email } = useParams();
  const [user, setuser] = useState({});
  const [employee, setemployee] = useState({});
  const [scheduleInfo, setscheduleInfo] = useState({});
  const [processInfo, setprocessInfo] = useState({});
  const [completeInfo, setcompleteInfo] = useState([]);
  const [check, setcheck] = useState("");

  useEffect(() => {
    const fectDetails = async () => {
      var fetchEmp = await fetch("http://localhost:5000/findEmployee", {
        method: "post",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchEmp = await fetchEmp.json();
      if (fetchEmp != "User Not exists") {
        setemployee(fetchEmp);
      }

      var fetchUser = await fetch("http://localhost:5000/findUser", {
        method: "post",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchUser = await fetchUser.json();
      if (fetchUser != "User Not exists") {
        setuser(fetchUser);
      }
      var _id = employee.Notification;
      var fetchId = await fetch("http://localhost:5000/getNotificationInfo", {
        method: "post",
        body: JSON.stringify({ _id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchId = await fetchId.json();
      setscheduleInfo(fetchId);
      var _id = employee.Process;
      var fetchIdByProcess = await fetch(
        "http://localhost:5000/getNotificationInfo",
        {
          method: "post",
          body: JSON.stringify({ _id }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchIdByProcess = await fetchIdByProcess.json();
      setprocessInfo(fetchIdByProcess);

      var empname = processInfo.EmpName;
      var result3 = await fetch(
        "http://localhost:5000/getEmployeeCompletedWork",
        {
          method: "post",
          body: JSON.stringify({ empname }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      result3 = await result3.json();
      setcompleteInfo(result3.Completed);
    };

    fectDetails();
  });

  const Acceptnotification = async () => {
    // var message = "You have to contact with "+ {customerName}+"having Address"+{customerAddress}+"& PhoneNumber"+{customerPhone};
    scheduleInfo.Process = scheduleInfo.Notification;
    var _id = scheduleInfo._id;
    var name = employee.Name;
    //console.log(_id,name)
    var result = await fetch(
      "http://localhost:5000/updateEmployeeStatustoProcess",
      {
        method: "post",
        body: JSON.stringify({ name, _id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    result = await result.json();
    var phone = scheduleInfo.PhoneNumber;
    var message = `Your Order has been confirmed by ${name}`;
    var result2 = await fetch(
      "http://localhost:5000/sendMessage",
      {
        method: "post",
        body: JSON.stringify({ message,phone }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result2=await result2.json();
    alert("You have accepted");
    navigate("/");
  };

  const CompleteWork = async () => {
    console.log("clicled")
  };

  return (
    <>
      <div className="" style={{ backgroundColor: "#55b994" }}>
        <Navbar />
        <div className="container">
          <div className="row" style={{ backgroundColor: "white" }}>
            <div className=" col-md-4 mt-4">
              <img
                className="rounded-circle"
                src={require("../images/user4.png")}
                style={{ width: "300px" }}
              />
            </div>
            <div className="mt-4 col-md-5">
              <p className="fw-bold fs-3 mt-5">
                Name:&nbsp;{employee.Name}
                <br />
                Email:&nbsp;{employee.Email}
                <br />
                PhoneNumber:&nbsp;{employee.PhoneNumber}
                <br />
                Adhar No:-:&nbsp;{employee.AdharNumber}
                <br />
                Role:&nbsp;{employee.Role}
                <br />
              </p>
            </div>
            <div className="col-md-3 mt-5" style={{ backgroundColor: "white" }}>
              <h3 className="text-center">Status</h3>
              <hr className="mx-auto w-25" />
              <ul className="mt-2">
                <li>(Current) {employee.Status}</li>
                <li className="mt-3">
                  (Change)
                  <button className="btn btn-success mx-2">Active</button>
                  <button className="btn btn-success mx-2">InActive</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-3 ">
          <div className="row mt-5" style={{ marginLeft: "50px" }}>
            <div className=" col-md-12">
              <div className="row">
                <div
                  className="notification col-md-3 mx-1"
                  style={{ backgroundColor: "white" }}
                >
                  <h4 className="text-center">Notification</h4>
                  {employee.Notification ? (
                    <>
                      <div className="content- mt-5">
                        <h4 className="fw-bold">
                          You have a request from {scheduleInfo.Name}
                        </h4>

                        <button
                          className="me-auto mt-3 btn-success mb-3"
                          onClick={Acceptnotification}
                        >
                          Accept
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="fw-bold text-center">Empty</h4>
                    </>
                  )}
                </div>
                <div
                  className="notification col-md-4 mx-1"
                  style={{ backgroundColor: "white" }}
                >
                  <h4 className="text-center">Process</h4>
                  {employee.Process ? (
                    <>
                      <div className="content- mt-5">
                        <h4 className="fw-bold">
                          You are doing {processInfo.Name} work .
                        </h4>

                        <button  className="me-auto mt-3 btn-success mb-3" onClick={CompleteWork}>Completed</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="fw-bold text-center">Empty</h4>
                    </>
                  )}
                </div>
                <div
                  className="notification col-md-4 mx-1"
                  style={{ backgroundColor: "white" }}
                >
                  <h4 className="text-center">Completed</h4>
                  {employee.Completed ? (
                    <>
                      <div className="content- mt-5">
                        {employee.Completed.map((work) => (
                          <h4 className="fw-bold text-center">{work}</h4>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="fw-bold text-center">Empty</h4>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="contact_section_3 ">
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
        </div>
      </div>
    </>
  );
}
