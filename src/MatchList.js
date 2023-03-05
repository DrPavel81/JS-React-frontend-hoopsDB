import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MatchList = (props) => {
  return (
    <div>
      {props.matches.map(match => (
        <div key={match.id}>
          <Row>
            <Col xs={6} className="d-flex align-items-center justify-content-center">
              <img onClick={() => {
                props.selectTeam(match.homeTeam);
                props.showRoster();
              }} src={require(`./team-logos/${match.homeTeam}.png`)} alt={match.homeTeam} />
              <p className="text-center">{match.homeTeam}: {match.homeScore}</p>
            </Col>
            <Col xs={6} className="d-flex align-items-center justify-content-center">
              <img onClick={() => {
                props.selectTeam(match.awayTeam);
                props.showRoster();
              }} src={require(`./team-logos/${match.awayTeam}.png`)} alt={match.awayTeam} />
              <p className="text-center">{match.awayTeam}: {match.awayScore}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <iframe src={match.gameRecap.replace("watch?v=", "embed/")}></iframe>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
