import React from "react";
import "../style/style.css"; // Import the CSS

function Footer() {
  return (
    <footer className="footer_section">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ padding: "15px" }}>
          <img src="/logo3.png" alt="logo3" />
        </div>
        <div
          style={{
            display: "flex",
            padding: "15px",
          }}
        >
          <div
            style={{ color: "#5e729a", marginRight: "15px" }}
            className="d-flex align-items-end"
          >
            <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
