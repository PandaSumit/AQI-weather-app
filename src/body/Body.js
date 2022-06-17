import React from "react";

import "./Body.css";
import circularProgressBar1 from "../assets/images/Circular-Progress-Bar-1.png";
import circularProgressBar2 from "../assets/images/Circular-Progress-Bar-2.jpg";
import circularProgressBar3 from "../assets/images/Circular-Progress-Bar-3.webp";
import ProgressCircle from "../assets/images/ProgressCircle.png";
import pollution1 from "../assets/images/pollution1.jpg";

const Body = () => {
  return (
    <div className="body-container">
      <div className="card">
        <div className="card-heading">
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Today's Air Quality
          </div>
          <div style={{ paddingTop: "8px", marginLeft: "6px" }}>
            - Rajbansi Nagar, Bihar
          </div>
        </div>
        <div className="card-inner">
          <img
            src={ProgressCircle}
            alt="Progress Circle"
            width="120"
            height="120"
          />
          <div className="card-inner-text">
            <div className="card-inner-text-heading">Moderate</div>
            <div className="card-inner-text-description">
              May cause breathing discomfort for people with prolonged exposure,
              and discomfort to people with heart disease.
            </div>
          </div>
          <div className="card-inner-text-right">
            <div className="card-inner-text-right-heading">
              Primary Pollutant:
            </div>
            <div className="card-inner-text-right-description">
              PM2.5 (Particulate matter less than 2.5 microns)
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-heading">
          <div style={{ fontSize: "1.3rem", fontWeight: "500" }}>
            All Pollutants
          </div>
        </div>
        <div className="all-pollutant-container">
          <div className="all-pollutant-container-each">
            <div>
              <img
                src={circularProgressBar1}
                alt="Progress Circle"
                width="70"
                height="60"
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                O3 (Ozone)
              </div>
              <div className="all-pollutant-container-text-status">Poor</div>
              <div className="all-pollutant-container-text-footer">
                203.27 μg/m3
              </div>
            </div>
          </div>

          <div className="all-pollutant-container-each">
            <div>
              <img
                src={circularProgressBar1}
                alt="Progress Circle"
                width="70"
                height="60"
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                NO2 (Nitrogen Dioxide)
              </div>
              <div className="all-pollutant-container-text-status">Good</div>
              <div className="all-pollutant-container-text-footer">
                29.65 μg/m3
              </div>
            </div>
          </div>
        </div>

        <div className="all-pollutant-container">
          <div className="all-pollutant-container-each">
            <div>
              <img
                src={circularProgressBar1}
                alt="Progress Circle"
                width="70"
                height="60"
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                SO2 (Sulphur Dioxide)
              </div>
              <div className="all-pollutant-container-text-status">Good</div>
              <div className="all-pollutant-container-text-footer">
                19.19 μg/m3
              </div>
            </div>
          </div>

          <div className="all-pollutant-container-each">
            <div>
              <img
                src={circularProgressBar1}
                alt="Progress Circle"
                width="70"
                height="60"
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                PM2.5 (Particulate matter less than 2.5 microns)
              </div>
              <div className="all-pollutant-container-text-status">
                Moderate
              </div>
              <div className="all-pollutant-container-text-footer">
                90.85 μg/m3
              </div>
            </div>
          </div>
        </div>

        <div className="all-pollutant-container">
          <div className="all-pollutant-container-each">
            <div>
              <img
                src={circularProgressBar1}
                alt="Progress Circle"
                width="70"
                height="60"
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                PM10 (Particulate matter less than 10 microns)
              </div>
              <div className="all-pollutant-container-text-status">
                Moderate
              </div>
              <div className="all-pollutant-container-text-footer">
                133.41 μg/m3
              </div>
            </div>
          </div>

          <div className="all-pollutant-container-each">
            <div>
              <img
                src={circularProgressBar1}
                alt="Progress Circle"
                width="70"
                height="60"
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                CO (Carbon Monoxide)
              </div>
              <div className="all-pollutant-container-text-status">Good</div>
              <div className="all-pollutant-container-text-footer">
                706.03 μg/m3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-heading">
          <div
            style={{
              fontWeight: "500",
              fontSize: "1.25rem",
              lineHeight: "1.2",
            }}
          >
            Pollution
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <div className="pollution-img">
              <img
                src={pollution1}
                alt="Pollution"
                width="100%"
                height="100%"
              />
            </div>
            <div className="pollution-text">
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </a>
            </div>
          </div>

          <div>
            <div className="pollution-img">
              <img
                src={pollution1}
                alt="Pollution"
                width="100%"
                height="100%"
              />
            </div>
            <div className="pollution-text">
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </a>
            </div>
          </div>

          <div>
            <div className="pollution-img">
              <img
                src={pollution1}
                alt="Pollution"
                width="100%"
                height="100%"
              />
            </div>
            <div className="pollution-text">
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </a>
            </div>
          </div>

          <div>
            <div className="pollution-img">
              <img
                src={pollution1}
                alt="Pollution"
                width="100%"
                height="100%"
              />
            </div>
            <div className="pollution-text">
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
