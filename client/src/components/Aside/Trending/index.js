import Card from "react-bootstrap/Card";
import TrendCards from "./TrendCards";
import { svg__settings } from "../../../assets/svg";

function Trends() {
  return (
    <Card className="trending--card">
      <Card.Body>
        <Card.Title className="row d-flex justify-content-between px-3">
          <b>Trends for you</b>
          <span>{svg__settings}</span>
        </Card.Title>

        <hr></hr>

        {/* Trending Cards */}
        <TrendCards />

        <a href="/" className="color--blue">
          Show More
        </a>
      </Card.Body>
    </Card>
  );
}

export default Trends;
