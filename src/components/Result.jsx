import { useParams } from "react-router-dom";
import useSWR from "swr";
import {
  fetchData,
  formatDate,
  formatDateWithDay,
} from "../api/ClientFunction";
import { useEffect, useState } from "react";

export default function Result() {
  const { id } = useParams();
  const [result, setResult] = useState();
  const { data, error, isLoading } = useSWR(
    `user/getsinglegamechart?uniqueid=${id}`,
    fetchData
  );
  console.log(result);
  useEffect(() => {
    if (data && data.data) {
      setResult(data.data);
    }
  }, [data]);
  return (
    <>
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
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/">
                    Rate Charts
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/">
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
                  <a className="nav-link" href="/">
                    TimeTable
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/">
                    How To Play
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section id="home" className="text-left hero-section-1">
        <div className="container">
          {result?.map((item) => (
            <div className="align-items-center row" key={item?._id}>
              <div className="hero-content col-lg-12 p-100px-t p-50px-b md-p-10px-b">
                <div className="aboutIntroText minh500p">
                  <h1 className="m-20px-b mt40 text-align">
                    Ratan Khichi {item?.name} Result Chart
                  </h1>
                  <div className="row">
                    <div className="col-md-2s col-2s">
                      <div className="dtm_box">
                        <p className="dtm_title">
                          {formatDateWithDay(item?.createdAt)}
                          <br />
                          {formatDate(item?.createdAt)}
                        </p>
                        <div className="row row_col">
                          <div className="col-md-4 col-4 pr-0">
                            <div className="dtm_box_inner d-table">
                              <div className="d-table-cell">
                                <font>
                                  {item?.openResult === 5000
                                    ? "***"
                                    : item?.openResult}
                                </font>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4 plr-0">
                            <div className="dtm_box_inner dtm_box_mid d-table">
                              <div className="d-table-cell">
                                <h4>
                                  {item?.openAnk !== 5000
                                    ? `${item?.openAnk}`
                                    : "*"}
                                  {item?.closeAnk !== 5000
                                    ? `${item?.closeAnk}`
                                    : "*"}
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-4 pl-0">
                            <div className="dtm_box_inner d-table">
                              <div className="d-table-cell">
                                <font>
                                  {item?.closeResult === 5000
                                    ? "***"
                                    : item?.closeResult}
                                </font>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
