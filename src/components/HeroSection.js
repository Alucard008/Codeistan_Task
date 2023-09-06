import React from "react";
import "../style/style.css"; // Import the CSS

function HeroSection() {
  return (
    <section
      className="hero_section"
      style={{
        background: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="hero_section_image">
        <div style={{ padding: "15px", marginLeft: "20%" }}>
          <img
            className="hero_logo"
            src="/logo.png"
            alt="hello"
            //style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div
          style={{
            display: "flex",

            padding: "15px",
            marginRight: "20%",
          }}
        >
          <div style={{ marginRight: "15px" }}>
            <p>
              <a
                href="#history"
                style={{ color: "white", fontStyle: "italic" }}
              >
                <span className="marginEnd text-white text-decoration-underline">
                  01. HISTORY
                </span>
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="#team" style={{ color: "white", fontStyle: "italic" }}>
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

export default HeroSection;
