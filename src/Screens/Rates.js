import React from "react";
import Navbar from "../Components/Navbar";
export default function Rates() {
  return (
    <>
      <div className="login" style={{ backgroundColor: "#55b994" }}>
        <Navbar />
        <section className="login">
          <div className="container  mt-5">
            <div className="row my-3">
              <div className="col-md-3 mx-3">
                <img
                  className="mx-2"
                  style={{ width: "300px", height: "200px" }}
                  src={require("../images/paper.webp")}
                />
                <h3 className="mt-3 mb-2 fw-bold text-white">Paper</h3>

                <p className="mt-2 fw-bold text-white">
                  Paper is manufactured in thin sheets from the pulp of wood or
                  other fibrous substances. Paper scrap includes newspaper,
                  books cartons, magazines, Beverage carton etc.
                </p>
              </div>
              <div className="col-md-8 mx-4">
                <div className="row">
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Newspaper</h4>
                    <p className="mt-4">Rs 15/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Books</h4>
                    <p className="mt-4">Rs 12/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Carton</h4>
                    <p className="mt-4">Rs 9.5/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Magzines</h4>
                    <p className="mt-4">Rs 7/kg</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>White Papers</h4>
                    <p className="mt-4">Rs 2/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Grey Board</h4>
                    <p className="mt-4">Rs 7.5/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>PlainPapers</h4>
                    <p className="mt-4">Rs 8/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Copy</h4>
                    <p className="mt-4">Rs 7/kg</p>
                  </div>
                </div>
              </div>
              <h6 className="text-center fw-bold text-white my-4">Note: For Bulk scrap (Commercial) prices may vary.</h6>
            </div>

            <div className="row my-3">
              <div className="col-md-3 mx-3">
                <img
                  className="mx-2"
                  style={{ width: "300px", height: "200px" }}
                  src={require("../images/Plastic.jpg")}
                />
                <h3 className="mt-3 mb-2 fw-bold text-white">Plastic</h3>

                <p className="mt-2 fw-bold text-white">
                  Plastics are a wide range of synthetic or semi-synthetic
                  materials that use polymers as a main ingredient. HDPE, LDPE,
                  MLP, PVC, PP, PET etc. are types of plastics used for
                  different purposes
                </p>
              </div>
              <div className="col-md-8 mx-4">
                <div className="row">
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Soft Plastic</h4>
                    <p className="mt-4">Rs 6/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Hard Plastic</h4>
                    <p className="mt-4">Rs 1/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Mix Plastic</h4>
                    <p className="mt-4">Rs 4/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Milk Covers</h4>
                    <p className="mt-4">Rs 2/kg</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Plastic Jar</h4>
                    <p className="mt-4">Rs 10/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Fibre</h4>
                    <p className="mt-4">Rs 4.5/kg</p>
                  </div>
                </div>
              </div>
              <h6 className="text-center fw-bold text-white my-4">Note: For Bulk scrap (Commercial) prices may vary.</h6>
            </div>

            <div className="row my-3">
              <div className="col-md-3 mx-3">
                <img
                  className="mx-2"
                  style={{ width: "300px", height: "200px" }}
                  src={require("../images/Metal.jpg")}
                />
                <h3 className="mt-3 mb-2 fw-bold text-white">Metal</h3>

                <p className="mt-2 fw-bold text-white">
                  Scrap metal are an important source of industrial metals and
                  alloys, particularly in the production of steel, copper, lead,
                  aluminum, and zinc. Smaller amounts of tin, nickel, magnesium,
                  and precious metals are also recovered from scrap.
                </p>
              </div>
              <div className="col-md-8 mx-4">
                <div className="row">
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Iron</h4>
                    <p className="mt-4">Rs 25/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Tin</h4>
                    <p className="mt-4">Rs 12/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Steel</h4>
                    <p className="mt-4">Rs 22/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Bras</h4>
                    <p className="mt-4">Rs 250/kg</p>
                  </div>

                  
                </div>
                <div className="row mt-3">
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Copper</h4>
                    <p className="mt-4">Rs 240/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Aluminuin</h4>
                    <p className="mt-4">Rs 70/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Beverage Cans (Aluminum)</h4>
                    <p className="mt-4">Rs 80/kg</p>
                  </div>
                </div>
                
              </div>
              <h6 className="text-center fw-bold text-white my-4">Note: For Bulk scrap (Commercial) prices may vary.</h6>
            </div>
            <div className="row my-3">
              <div className="col-md-3 mx-3">
                <img
                  className="mx-2"
                  style={{ width: "300px", height: "200px" }}
                  src={require("../images/e.jpg")}
                />
                <h3 className="mt-3 mb-2 fw-bold text-white">E-Waste</h3>

                <p className="mt-2 fw-bold text-white">
                  E-waste is electronic products that are unwanted, not working,
                  and nearing or at the end of their “useful life.” It includes
                  TV, refrigerator, mobile phones, printers etc.
                </p>
              </div>
              <div className="col-md-8 mx-4">
                <div className="row">
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>E-Waste</h4>
                    <p className="mt-4">Rs 8.5/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Fridge</h4>
                    <p className="mt-4">Rs 300/piece</p>
                  </div>
                </div>
              </div>
              <h6 className="text-center fw-bold text-white my-4">Note: For Bulk scrap (Commercial) prices may vary.</h6>
            </div>

            <div className="row my-3">
              <div className="col-md-3 mx-3">
                <img
                  className="mx-2"
                  style={{ width: "300px", height: "200px" }}
                  src={require("../images/beer.webp")}
                />
                <h3 className="mt-3 mb-2 fw-bold text-white">Others</h3>

                <p className="mt-2 fw-bold text-white">
                It Includes, beer bottles, women’s hair, mix-waste, tyre, mattresses etc.
                </p>
              </div>
              <div className="col-md-8 mx-4">
                <div className="row">
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Beer Bottle</h4>
                    <p className="mt-4">Rs 0.5/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Battery</h4>
                    <p className="mt-4">Rs 70/kg</p>
                  </div>
                  <div className="col-md-2 fw-bold text-dark mx-1 bg-light rounded ">
                    <h4>Tyres</h4>
                    <p className="mt-4">Rs 3/kg</p>
                  </div>
                </div>
              </div>
              <h6 className="text-center fw-bold text-white my-4">Note: For Bulk scrap (Commercial) prices may vary.</h6>
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
