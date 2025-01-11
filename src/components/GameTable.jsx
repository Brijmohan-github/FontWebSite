import useSWR from "swr";
import {
  fetchData,
  formatTimeInAMPM,
  todayDateInIso,
} from "../api/ClientFunction";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const today = todayDateInIso();
const GameTable = () => {
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
    <section id="timetable" className="pt50 pb50 bg-main shaded-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center md-m-30px-b">
            <h2 className="m-30px-b">Game Time Table</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center md-m-30px-b">
            <div className="time-table">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th>Market</th>
                    <th>open</th>
                    <th>close</th>
                    <th>Results</th>
                  </tr>
                  {games?.map((item) => (
                    <tr key={item?.uniqueId}>
                      <td>{item?.name}</td>
                      <td>{formatTimeInAMPM(item?.open)}</td>
                      <td>{formatTimeInAMPM(item?.close)}</td>
                      <td>
                        <Link to={`/gamechart/${item?.uniqueId}`} className="view_chart">
                          View Chart
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameTable;
