import React, { useState } from "react";

function TabComponent() {
  const [activeTab, setActiveTab] = useState("tab1"); // Default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const toggleAccordion = (tabId) => {
    if (activeTab !== tabId) {
      setActiveTab(tabId);
    }
  };

  return (
    <div>
      <div className="tabs_upper_container tabs_upper_container_desktop">
        <div className="tabs_container tabs_container_desktop">
          <div>
            <p>
              <a
                onClick={() => handleTabClick("tab1")}
                style={{
                  color: "white",
                  fontStyle: "italic ",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "30px",
                  backgroundColor: activeTab === "tab1" ? "#afb3bc" : "#40506a",
                }}
              >
                <span style={{ marginRight: "15px" }}>MOUNTAIN 1</span>
              </a>
            </p>
          </div>
          <div>
            <p>
              <a
                onClick={() => handleTabClick("tab2")}
                style={{
                  color: "white",
                  fontStyle: "italic ",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "30px",
                  backgroundColor: activeTab === "tab2" ? "#afb3bc" : "#40506a",
                }}
              >
                <span>MOUNTAIN 2</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="accordion_main_container">
        <div className="accordion_item">
          <div
            className={`accordion_header ${
              activeTab === "tab1" ? "active" : ""
            }`}
            onClick={() => toggleAccordion("tab1")}
          >
            <span>MOUNTAIN 1</span>
          </div>
        </div>
        <div className="accordion_item">
          <div
            className={`accordion_header ${
              activeTab === "tab2" ? "active" : ""
            }`}
            onClick={() => toggleAccordion("tab2")}
          >
            <span>MOUNTAIN 2</span>
          </div>
        </div>
      </div>

      {activeTab == "tab1" ? (
        <div>
          <section
            className="schedule_section"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/photo-1443980995706-8d107e98e707.jpg)`,
              backgroundSize: "cover",

              height: "800px",
              width: "100vw",
              position: "relative",
            }}
          >
            <div className="schedule_overlay">
              <div className="schedule_cover" style={{ padding: "20px" }}>
                <div
                  id="history"
                  style={{
                    fontSize: "30px",
                    color: "#43516c",
                    fontWeight: "700",
                    marginRight: "130px",
                  }}
                >
                  SCHEDULE
                </div>
                <table
                  className="m-0 table table-borderless"
                  style={{ borderSpacing: "10px 20px" }}
                >
                  <tbody>
                    <tr>
                      <td>25 Nov 2016</td>
                      <td style={{ paddingLeft: "50px" }}>
                        Vestibulum viverra
                      </td>
                    </tr>
                    <tr>
                      <td>28 Nov 2016</td>
                      <td style={{ paddingLeft: "50px" }}>
                        Vestibulum viverra
                      </td>
                    </tr>

                    <tr>
                      <td>18 Dec 2016</td>
                      <td style={{ paddingLeft: "50px" }}>
                        Vestibulum viverra
                      </td>
                    </tr>

                    <tr>
                      <td>7 Jan 2016</td>
                      <td style={{ paddingLeft: "50px" }}>
                        Vestibulum viverra
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <section
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/peak.jpg)`,
              backgroundSize: "cover",
              height: "800px",
              width: "100vw",
              position: "relative",
            }}
          >
            <div className="schedule_overlay">
              <div className="schedule_cover" style={{ padding: "20px" }}>
                <div
                  id="history"
                  style={{
                    fontSize: "30px",
                    color: "#43516c",
                    fontWeight: "700",
                    marginRight: "130px",
                  }}
                >
                  SCHEDULE 2
                </div>
                <table
                  className="m-0 table table-borderless"
                  style={{ borderSpacing: "10px 20px" }}
                >
                  <tbody>
                    <tr>
                      <td>25 Nov 2016</td>
                      <td style={{ paddingLeft: "50px" }}>Blah blah</td>
                    </tr>
                    <tr>
                      <td>28 Nov 2016</td>
                      <td style={{ paddingLeft: "50px" }}>
                        Vestibulum viverra
                      </td>
                    </tr>

                    <tr>
                      <td>18 Dec 2016</td>
                      <td style={{ paddingLeft: "50px" }}>
                        Vestibulum viverra
                      </td>
                    </tr>

                    <tr>
                      <td>7 Jan 2016</td>
                      <td style={{ paddingLeft: "50px" }}>
                        Vestibulum viverra
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default TabComponent;
