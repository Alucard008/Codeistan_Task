import React from "react";
import "../style/style.css"; // Import the CSS
import TabComponent from "./TabComponent";

function ClimbSection() {
  return (
    <section className="climb_section">
      <div
        className="container width75 d-flex flex-column"
        style={{ marginLeft: "20%" }}
      >
        <div className="d-flex" style={{ display: "flex" }}>
          <div>
            <p>
              <span
                style={{
                  fontSize: "150px",
                  color: "#b0b4be",
                  fontWeight: "700",
                }}
              >
                02
              </span>
            </p>
          </div>
          <div
            style={{
              fontSize: "60px",
            }}
          >
            <div>
              <div
                id="history"
                style={{
                  fontSize: "30px",
                  color: "#43516c",
                  fontWeight: "700",
                  marginTop: "95px",
                  marginLeft: "10px",
                }}
              >
                CLIMB
              </div>
              <div
                style={{ marginTop: "15px" }}
                className="square2 heading_pad_climb"
              ></div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "70%", marginLeft: "8%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
          cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
          blanditiis dolorem modi! Officiis accusamus ducimus in pariatur
          delectus error minima, saepe cumque. Rem at suscipit, rerum laborum
          eligendi omnis nam amet.
        </div>
      </div>
      <TabComponent></TabComponent>
    </section>
  );
}

export default ClimbSection;
