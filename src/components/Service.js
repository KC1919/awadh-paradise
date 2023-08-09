import React from "react";
// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faBroom, faBolt, faUtensils, faUserShield, faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons'

import "../css/service.css";
function Service() {
  return (
    <>
      <div className="service-header-div">
        <h2>Services</h2>
      </div>
      <div className="service-body-div row">
        <div className="service-card-div col-md-3">
          <div className="card" style={{"width": "18rem",}}>
            {/* <img src={require("../img/wifi.png")} className="card-img-top" alt="..." /> */}
            <div className="card-image">
              {/* <i class="fa-solid fa-wifi" style={{"color": "#ffffff"}}></i> */}
              <FontAwesomeIcon className="fontawe" icon={faWifi} size="2xl" style={{}}/>
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="service-card-div col-md-3">
          <div className="card" style={{"width": "18rem",}}>
            {/* <img src={require("../img/wifi.png")} className="card-img-top" alt="..." /> */}
            <div className="card-image">
              {/* <i class="fa-solid fa-wifi" style={{"color": "#ffffff"}}></i> */}
              <FontAwesomeIcon className="fontawe" icon={faBroom} size="2xl" style={{}} />
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="service-card-div col-md-3">
          <div className="card" style={{"width": "18rem",}}>
            {/* <img src={require("../img/wifi.png")} className="card-img-top" alt="..." /> */}
            <div className="card-image">
              {/* <i class="fa-solid fa-wifi" style={{"color": "#ffffff"}}></i> */}
              <FontAwesomeIcon className="fontawe" icon={faBolt} size="2xl" style={{}} />
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="service-card-div col-md-3">
          <div className="card" style={{"width": "18rem",}}>
            {/* <img src={require("../img/wifi.png")} className="card-img-top" alt="..." /> */}
            <div className="card-image">
              {/* <i class="fa-solid fa-wifi" style={{"color": "#ffffff"}}></i> */}
              <FontAwesomeIcon className="fontawe" icon={faUtensils} size="2xl" style={{}} />
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="service-card-div col-md-3">
          <div className="card" style={{"width": "18rem",}}>
            {/* <img src={require("../img/wifi.png")} className="card-img-top" alt="..." /> */}
            <div className="card-image">
              {/* <i class="fa-solid fa-wifi" style={{"color": "#ffffff"}}></i> */}
              <FontAwesomeIcon className="fontawe" icon={faUserShield} size="2xl" style={{}} />
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="service-card-div col-md-3">
          <div className="card" style={{"width": "18rem",}}>
            {/* <img src={require("../img/wifi.png")} className="card-img-top" alt="..." /> */}
            <div className="card-image">
              {/* <i class="fa-solid fa-wifi" style={{"color": "#ffffff"}}></i> */}
              <FontAwesomeIcon className="fontawe" icon={faTemperatureThreeQuarters} size="2xl" style={{}} />
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
