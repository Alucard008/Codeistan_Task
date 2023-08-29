import React from "react";
import "../style/style.css"; // Import the CSS

function BelowTheHeroSection() {
  return (
    <section className="below_hero_section">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "20%" }}>
          <img
            className="hero_logo"
            src="/logo1.png"
            alt="hello"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginRight: "20%",
            marginTop: "20px",
          }}
        >
          <div style={{ marginRight: "15px" }}>
            <p>
              <a
                href="#history"
                style={{ color: "black", fontStyle: "italic" }}
              >
                <span className="marginEnd text-white text-decoration-underline">
                  01. HISTORY
                </span>
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="#team" style={{ color: "black", fontStyle: "italic" }}>
                <span className="text-white text-decoration-underline">
                  02. TEAM
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BelowTheHeroSection;
