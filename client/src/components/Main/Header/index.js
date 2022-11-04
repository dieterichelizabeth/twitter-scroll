import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  svg__stars,
  svg__picture,
  svg__gif,
  svg__chart,
  svg__smile,
} from "../../../assets/svg";
import { profile } from "../../../data/profile";

function Header() {
  return (
    <Card as="header" className="border--bottom">
      <Card.Body>
        <Card.Title className="row d-flex justify-content-between px-3 ">
          <b>Home</b>
          <span>{svg__stars}</span>
        </Card.Title>

        <hr className="py-0 mt-0"></hr>

        <div className="d-flex flex-row">
          <Card.Img
            variant="top"
            src={profile.photo}
            className="card--img image__profile mr-1"
          />
          <Form className="tweet--form">
            <Form.Label htmlFor="tweet" hidden>
              Tweet
            </Form.Label>
            <Form.Control
              type="text"
              id="tweet"
              placeholder="What's happening?"
              className="border-0 mt-1 mb-1"
            />

            <div className="row d-flex justify-content-between ml-3">
              <div className="text-primary">
                {svg__picture} {svg__gif} {svg__chart} {svg__smile}
              </div>
              <Button className="border__50 mr-3 btn--blue" type="submit">
                Tweet
              </Button>
            </div>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Header;
