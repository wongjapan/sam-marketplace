import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AsideMarketplace() {
  const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);
  const toggle = () => {
    setFlag(!flag);
    setIsOpen(!isOpen);
  };
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [darkMode, setDarkMode] = useState(false);
  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
    }
  };
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [flag, setFlag] = useState(false);
  const active2 = {
    color: "red !important",
  };
  const tagg1 = {
    display: "block",
    height: "auto",
  };

  // let user = [(newlink = "/launchpad")];
  return (
    <div>
      <div className={flag ? "main" : null}>
        <nav
          className="slider"
          style={{
            width: isOpen ? "270px" : "80px",
          }}
        >
          <header>
            <Link to="/">
              <div className="group_all">
                <div className="image-text">
                  <span className="image">
                    <img src="/img/headerlogo.png" alt="" />
                  </span>
                  {/* <p>Marketplace</p> */}

                  <div
                    className="text header-text"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    {/* <img src="/images/newlogo_2.png" className="name" alt="" /> */}
                    {/* --> */}
                  </div>
                </div>
              </div>
            </Link>

            <span
              onClick={toggle}
              className="arrow_close"
              style={{ marginLeft: isOpen ? "25%" : "0%" }}
            >
              {/* className="toggle" */}
              <img src="/images/newarrow-left.png" alt="" srcset="" />
            </span>
            <span
              onClick={toggle}
              className="arrow_close1"
              style={{ display: isOpen ? "none" : "0%" }}
            >
              {/* className="toggle" */}
              <img src="/images/arrow-left.png" alt="" srcset="" />
            </span>
          </header>

          <div className="menu-bar">
            <div>
              {/* <div className={open ? "sidebar-item open" : "sidebar-item"}> */}
              <div className="menu">
                <ul className="menu-links">
                  <div>
                    <li className="nav-link launcpad_newelement">
                      <a href="#">
                        {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                        {/* <!-- <i className='bx bxs-grid-alt bx-rotate-180 icon' style='color:#a69f9f' ></i> --> */}
                        <img src="/img/newelement-3.png" alt="" />
                        {/* <img src="/img/AirdropRIP.png" alt="" /> */}
                        <span
                          className="text nav-test"
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          Dashboard
                        </span>
                      </a>
                    </li>
                  </div>
                  <div
                    className={open1 ? "sidebar-item open1" : "sidebar-item"}
                    id="tag1"
                    style={tagg1}
                  >
                    <li className="nav-link">
                      <a href="#">
                        {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                        <img src="/img/newIcon.png" className="icon" alt="" />

                        <span
                          className="text nav-test"
                          onClick={() => setOpen1(!open1)}
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          {/* <Link to="LaunchpadPool" className="">
                            Launchpad
                          </Link> */}
                          Marketplace
                        </span>
                        <i
                          class="bi bi-chevron-down"
                          onClick={() => setOpen1(!open1)}
                          style={{ display: isOpen ? "block" : "none" }}
                        ></i>
                      </a>
                    </li>
                    <div
                      class="sidebar_contain_aside"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      <Link to="/Discover" className="active1">
                        Discover
                      </Link>

                      <Link to="/Createsale" style={active2}>
                        Rankings
                      </Link>
                      <Link to="/Createsale" style={active2}>
                        Create
                      </Link>
                    </div>
                  </div>
                  <div
                    className={open2 ? "sidebar-item open2" : "sidebar-item"}
                    id="tag2"
                  >
                    <li className="nav-link">
                      <a href="#">
                        <img
                          src="/img/newshield-security.png"
                          className="icon"
                          alt=""
                        />

                        <span
                          className="text nav-test"
                          onClick={() => setOpen2(!open2)}
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          User Profile
                        </span>
                        <i
                          class="bi bi-chevron-down toggle_btn_aside"
                          onClick={() => setOpen2(!open2)}
                          style={{ display: isOpen ? "block" : "none" }}
                        ></i>
                      </a>
                    </li>
                    <div class="sidebar_contain_aside">
                      <Link to="/Lockertab">Locked Assets</Link>

                      <Link to="/TokenLocker">Token Locker</Link>

                      <Link to="/LPLocker">LP Locker</Link>
                    </div>
                  </div>
                  <div
                    className={open3 ? "sidebar-item open3" : "sidebar-item"}
                    id="tag3"
                  >
                    <li className="nav-link">
                      <a href="#">
                        {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                        <img
                          src="/img/newairplane.png"
                          className="icon"
                          alt=""
                        />

                        <span
                          className="text nav-test"
                          onClick={() => setOpen3(!open3)}
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          More Products
                        </span>
                        <i
                          class="bi bi-chevron-down toggle_btn_aside"
                          onClick={() => setOpen3(!open3)}
                          style={{ display: isOpen ? "block" : "none" }}
                        ></i>
                      </a>
                    </li>
                    <div class="sidebar_contain_aside">
                      <Link to="/live">Airdrops</Link>

                      <Link to="/CreateAirdrop">Create Airdrop</Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="bottom-content">
              <li className=""></li>
              <li class="mode">
                <div class="moon-sun">
                  {/* <!-- <i class='bx bx-moon icon moon' ></i>
                        <i class='bx bx-sun icon sun' ></i> --> */}
                  <img src="/img/Sun.png" alt="" srcset="" />
                </div>
                {/* <!-- <span class="mode-text text">Dark Mode</span> --> */}

                <div class="toggle-switch" onClick={toggleStyle}>
                  <span class="switch"></span>
                </div>
                {/* <div className={darkMode ? "dark-mode" : "light-mode"}>
                  <div className="container">
                    <span style={{ color: darkMode ? "grey" : "yellow" }}>
                      ☀︎
                    </span>
                    <div className="switch-checkbox">
                      <label className="switch">
                        <input
                          type="checkbox"
                          onChange={() => setDarkMode(!darkMode)}
                        />
                        <span className="slider round"> </span>
                      </label>
                    </div>
                    <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>
                      ☽
                    </span>
                  </div>
                </div> */}
              </li>
              <ul
                className="menu-links"
                style={{ display: isOpen ? "block" : "none" }}
                id="social-icons"
              >
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-telegram social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-twitter social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-instagram social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-dribbble social_media"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="clear"></div>
              <p
                class="copy-right"
                style={{ display: isOpen ? "block" : "none" }}
              >
                @2022 Arborswap. All right Reserved.{" "}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
