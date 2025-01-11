import { useState } from "react";
import { postData, todayDateInIso } from "../api/ClientFunction";
import About from "./About";
import GameComponent from "./GameComonent";
import GameRate from "./GameRate";
import DownloadApk from "./DownloadApk";
import GameTable from "./GameTable";
import { toast } from "react-toastify";

export default function Header() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await postData("user/postenquiry", formData);
    if (res.success || res.status) {
      toast.success("Enquiry received");
    }
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
    });
  };
  return (
    <>
      <div className="preloader" style={{ display: "none" }}>
        <div className="status" style={{ display: "none" }}>
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle
                className="path"
                cx={50}
                cy={50}
                r={20}
                fill="none"
                strokeWidth={3}
                strokeMiterlimit={10}
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <nav className=" navbar navbar-inverse navbar-expand-lg header-nav fixed-top header">
          <div className="container">
            <a className="navbar-brand logo" href="index.html">
              <img className="logo-dark" src="/logo.png" alt="Ratan Khichi" />
              <img
                className="logo-light"
                src="/logo.png"
                alt="Ratan Khichi"
              />
            </a>
            <button
              className="navbar-toggler pull-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCodeply"
            >
              <i className="icofont-navigation-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCodeply">
              <ul className="nav navbar-nav ml-auto">
                <li>
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about-us">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#rate-charts">
                    Rate Charts
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#results">
                    Results
                  </a>
                  {/* <ul
                    className="header nav-sticky"
                    style={{ backgroundColor: "#222e39", padding: 10 }}
                  >
                    <li>
                      <a href="satta-king.html">Satta king</a>
                    </li>
                    <li>
                      <a href="dp-boss.html">Dp boss</a>
                    </li>
                    <li>
                      <a href="gali-disawar.html">Gali disawar</a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a className="nav-link" href="#timetable">
                    TimeTable
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#how-to-play">
                    How To Play
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <section id="home" className="text-left hero-section-1">
          <div className="container">
            <div className="full-height align-items-center row">
              <div className="hero-content col-lg-6 p-100px-t p-50px-b md-p-10px-b">
                <h1 className="m-30px-b">Download Best Online TicToc App!</h1>
                <p className="m-30px-b md-m-30px-b">
                  Play Online TicToc with Ratan Khichi &amp; Win Money Daily!
                </p>
                <div />
                <div>
                  {/* <a
                    href="app/dreamstarline-v11.apk"
                    className="btn btn-store m-50px-b "
                    download
                  >
                    <span className="fa fa-android pull-left" />
                    <span className="btn-label">Download</span>
                    <span className="btn-caption">APK Now</span>
                  </a> */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.stargoldgamaTicToc&hl=en_US"
                    className="btn btn-store m-50px-b btn-store-c2"
                  >
                    <img
                      src="userassests/img/google-play.png"
                      className="pull-left"
                    />
                    <span className="btn-label">Download on the</span>
                    <span className="btn-caption">Google Play</span>
                  </a>
                </div>
                <div>
                  <a href="#" className="btn-whatsapp">
                    <img
                      src="userassests/img/whatsapp.png"
                      className="pull-left"
                    />
                    <span>+917297962288</span>
                  </a>
                </div>
              </div>
              <div className="hero-image col-lg-6 p-100px-t md-p-10px-t text-center">
                <img
                  className="img-fluid"
                  src="userassests/img/Screenshot.jpg"
                  alt="Ratan Khichi is best for"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="results" className="pt50 pb50 bg-main shaded-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 text-center md-m-30px-b">
                <h2 className="m-30px-b">TicToc Online Play Result</h2>
                <h4 className="m-30px-b">{todayDateInIso()}</h4>
              </div>
            </div>
            <div className="row align-items-center">
              <GameComponent />
            </div>
          </div>
        </section>
        <GameTable />
        <GameRate />
        <DownloadApk />
        <About />

        <section
          id="how-to-play"
          className="pt50 pb50 white_txt bg-parallax"
          style={{ backgroundImage: "url(_userassests/img/bg2.html)" }}
        >
          <div className="color-overlay opacity-8" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 text-center md-m-30px-b">
                <h2 className="m-30px-b">How To Play</h2>
              </div>
            </div>
            <div className="row">
              <div className="how-works-item text-center col-md-3">
                <div className="icon-outer">
                  <span>1</span>
                </div>
                <h4 className="title m-t-30">Download App</h4>
              </div>
              <div className="how-works-item text-center col-md-3">
                <div className="icon-outer">
                  <span>2</span>
                </div>
                <h4 className="title m-t-30">Click On Sign In</h4>
              </div>
              <div className="how-works-item text-center col-md-3">
                <div className="icon-outer">
                  <span>3</span>
                </div>
                <h4 className="title m-t-30">
                  Enter The User Id &amp; PassWord
                </h4>
              </div>
              <div className="how-works-item text-center col-md-3">
                <div className="icon-outer">
                  <span>4</span>
                </div>
                <h4 className="title m-t-30">
                  Select Game &amp; Play The Game
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="pt50 pb50 bg-parallax"
          style={{ backgroundImage: "url(_userassests/img/contact-bg.html)" }}
        >
          <div className="color-overlay opacity-8" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="contact-block text-center">
                  <div className="col-sm-12">
                    <h3>Need to talk anything about?</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          name="name"
                          className="contact-name form-control input-box"
                          type="text"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          name="phone"
                          className="contact-email form-control input-box"
                          type="tel"
                          required
                          placeholder="Your Mobile Number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-12">
                        <input
                          name="email"
                          className="contact-email form-control input-box"
                          type="email"
                          placeholder="Your Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-12">
                        <textarea
                          name="message"
                          className="contact-message form-control textarea-box"
                          placeholder="Your Message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-12">
                        <button type="submit" className="primary-btn submitBtn">
                          <i className="fa fa-paper-plane" aria-hidden="true" />{" "}
                          Send Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer id="footer-section" className="pt50 pb50 bg-black">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 color-white">
              © Copyright {new Date().getFullYear()} By
              <a href="#" className="copy">
                {" "}
                Ratan Khichi
              </a>
              . All Rights Reserved.
            </div>
            {/* <div className="col-sm-12 color-white">
              <p>
                <a href="privacy-policy.html" target="_blank">
                  Privacy Policy
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
