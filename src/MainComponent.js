import React, { useState, useEffect } from 'react';
import MatchList from './MatchList';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainComponent = () => {
  const [date, setDate] = useState(moment.utc().subtract(1, 'days').startOf('day').valueOf());
  const [preYesterdayMatches, setPreYesterdayMatches] = useState([]);
  const [yesterdayMatches, setYesterdayMatches] = useState([]);
  const [matches, setMatches] = useState([]);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth >= 818);
  const [isShowRoster, setIsShowRoster] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("");

  const oneDay = 86400000;
  const twoDays = 172800000;
  const threeDays = 259200000;
  const fiveDays = 432000000;

  useEffect(() => {
    const fetchData = async () => {
      const preYesterdayResponse = await fetch(`http://localhost:8093/api/scores?date=${date - twoDays}`);
      const yesterdayResponse = await fetch(`http://localhost:8093/api/scores?date=${date - oneDay}`);
      const response = await fetch(`http://localhost:8093/api/scores?date=${date}`);
      const preYesterdayData = await preYesterdayResponse.json();
      const yesterdayData = await yesterdayResponse.json();
      const data = await response.json();
      setPreYesterdayMatches(preYesterdayData);
      setYesterdayMatches(yesterdayData);
      setMatches(data);
    };
    fetchData();
  }, [date]);

  function handleResize() {
    console.log(date)
    setIsScreenLarge(window.innerWidth > 818);
  }

  function selectTeam(team) {
    setSelectedTeam(team);
  }

  function showRoster() {
    setIsShowRoster(true);
  }


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePreviousClick = () => {
    setDate(date - threeDays);
  };

  const handlePreviousClickMobile = () => {
    setDate(date - oneDay);
  };

  const handleNextClick = () => {
    setDate(date + threeDays);
  };

  const handleNextClickMoblie = () => {
    setDate(date + oneDay);
  };

  return (
    <div>
      {isShowRoster ? (
        <div className="d-flex justify-content-center">
          <img style={{ maxHeight: "100vh", maxWidth: "100vW" }} src={require(`./team-logos/${selectedTeam}-Roster.png`)} />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          {isScreenLarge ? (
            <>
              <div className="col-4 d-flex flex-column align-items-center">
                <Button onClick={handlePreviousClick}>&larr; {moment.unix((date - fiveDays) / 1000).format("DD/MM/YYYY")} - {moment.unix((date - threeDays) / 1000).format("DD/MM/YYYY")}</Button>
                <h2>{moment.unix((date - twoDays) / 1000).format("DD/MM/YYYY")}</h2>
                <MatchList matches={preYesterdayMatches} selectTeam={selectTeam} showRoster={showRoster} />
              </div>
              <div className="col-4 d-flex flex-column align-items-center">
                <Button>{moment.unix((date - twoDays) / 1000).format("DD/MM/YYYY")} - {moment.unix(date / 1000).format("DD/MM/YYYY")}</Button>
                <h2>{moment.unix((date - oneDay) / 1000).format("DD/MM/YYYY")}</h2>
                <MatchList matches={yesterdayMatches} selectTeam={selectTeam} showRoster={showRoster} />
              </div>
              <div className="col-4 d-flex flex-column align-items-center">
                <Button onClick={handleNextClick}>{moment.unix((date + oneDay) / 1000).format("DD/MM/YYYY")} - {moment.unix((date + threeDays) / 1000).format("DD/MM/YYYY")} &rarr;</Button>
                <h2>{moment.unix(date / 1000).format("DD/MM/YYYY")}</h2>
                <MatchList matches={matches} selectTeam={selectTeam} showRoster={showRoster} />
              </div>
            </>
          ) : (
            <div className="col-12 d-flex flex-column align-items-center">
              <Button onClick={handlePreviousClickMobile}>&larr; {moment.unix((date - oneDay) / 1000).format("DD/MM/YYYY")}</Button>
              <h2>{moment.unix(date / 1000).format("DD/MM/YYYY")}</h2>
              <Button onClick={handleNextClickMoblie}>{moment.unix((date + oneDay) / 1000).format("DD/MM/YYYY")} &rarr;</Button>
              <MatchList matches={matches} selectTeam={selectTeam} showRoster={showRoster} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainComponent;
