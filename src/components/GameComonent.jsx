import useSWR from "swr";
import {
  fetchData,
  formatTimeInAMPM,
  todayDateInIso,
} from "../api/ClientFunction";
import { useEffect, useState } from "react";
const today = todayDateInIso();
export default function GameComponent() {
  const [games, setGames] = useState([]);
  const { data, error, isLoading } = useSWR(
    `/game/getallgames?date=${today}`,
    fetchData
  );
  useEffect(() => {
    if (data && data.data) {
      setGames(data.data);
    }
  }, [data]);
  return (
    <>
      {games?.map((item) => (
        <div className="col-lg-4" key={item?.uniqueId}>
          <div className="single_result">
            <h4>{item?.name}</h4>
            <ul>
              <li>
                <p> {item?.openResult == 5000 ? "***" : item?.openResult}</p>
              </li>
              <li>
                <p className="bold-sec">
                  {item?.openAnk !== 5000 ? `${item?.openAnk}` : "*"}
                  {item?.closeAnk !== 5000 ? `${item?.closeAnk}` : "*"}
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  {item?.closeResult != 5000 ? `${item?.closeResult}` : "*"}
                </p>
              </li>
            </ul>
            <div className="g_rtime">
              <p>
                {formatTimeInAMPM(item?.open)}
                <span>{formatTimeInAMPM(item?.close)}</span>
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      ))}
    </>
  );
}
