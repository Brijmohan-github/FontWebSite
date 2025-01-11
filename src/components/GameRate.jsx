import useSWR from "swr";
import { fetchData } from "../api/ClientFunction";
import { useEffect, useState } from "react";
export default function GameRate() {
  const [rate, setRate] = useState([]);
  const { data, error, isLoading } = useSWR(`/game/alldistribution`, fetchData);
  useEffect(() => {
    if (data && data.data) {
      setRate(data.data);
    }
  }, [data]);
  return (
    <section
      id="rate-charts"
      className="pt50 pb50 white_txt bg-parallax"
      style={{ backgroundImage: "url(_userassests/img/bg1.html)" }}
    >
      <div className="color-overlay opacity-8" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center md-m-30px-b">
            <img
              className="img-fluid"
              src="userassests/img/gambling.png"
              alt=""
            />
          </div>
          <div className="col-lg-6 aboutIntroText">
            <h2 className="m-30px-b">Online TicToc Game Play Rates</h2>
            <ul className="rate_list_ul">
              <li>
                <i className="fa fa-check" />
                SINGLE DIGIT <span>10 ka {rate?.sd * 10}</span>
              </li>
              <li>
                <i className="fa fa-check" />
                JODI DIGIT <span>10 ka {rate?.jd * 10}</span>
              </li>
              <li>
                <i className="fa fa-check" />
                SINGLE PANA <span>10 ka {rate?.sp * 10}</span>
              </li>
              <li>
                <i className="fa fa-check" />
                DOUBLE PANA <span>10 ka {rate?.dp * 10}</span>
              </li>
              <li>
                <i className="fa fa-check" />
                TRIPLE PANA <span>10 ka {rate?.tp * 10}</span>
              </li>
              <li>
                <i className="fa fa-check" />
                HALF SANGAM <span>10 ka {rate?.hs * 10}</span>
              </li>
              <li>
                <i className="fa fa-check" />
                FULL SANGAM <span>10 ka {rate?.fs * 10}</span>
              </li>
              <li>
                <i className="fa fa-check" />
                LEFT-RIGHT (DELHI GAMES) <span>10 ka {rate?.dsd * 10}</span>
              </li>
              <li>
                <i className="fa fa-check" />
                JODI (DELHI GAMES) <span>10 ka {rate?.djd * 10}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
