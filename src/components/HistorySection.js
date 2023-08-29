import React from "react";
import "../style/style.css";

function HistorySection() {
  return (
    <section className="history_section d-flex flex-column justify-content-between">
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
                01
              </span>
            </p>
          </div>
          <div
            style={{
              fontSize: "60px",
            }}
          >
            <div>
              <div id="history" className="heading_pad">
                HISTORY
              </div>
              <div style={{ marginTop: "15px" }} className="square"></div>
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

      <div className="carosel-bg">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <img
              className="carosel_bg_image2"
              src="/photo-1443980995706-8d107e98e707.jpg"
              alt="img"
              style={{ width: "200px", height: "auto", margin: "0 10px" }}
            />
            <img
              className="carosel_bg_image"
              src="/photo-1458442310124-dde6edb43d10.jpg"
              alt="img"
              style={{ width: "200px", height: "auto", margin: "0 10px" }}
            />
            <img
              className="carosel_bg_image2"
              src="/photo-1417021423914-070979c8eb34.jpg"
              alt="img"
              style={{ width: "200px", height: "auto", margin: "0 10px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
