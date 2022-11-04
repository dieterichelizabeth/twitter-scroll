import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {
  svg__bookmark,
  svg__explore,
  svg__home,
  svg__list,
  svg__logo,
  svg__message,
  svg__more,
  svg__notify,
} from "../../assets/svg";
import { profile } from "../../data/profile";

function Navbar() {
  return (
    <Nav as={"nav"} className="flex-column">
      <div className="pl-4 pr-4">
        <Nav.Link href="/">
          <span className="pt-1 pr-2">{svg__logo}</span>
        </Nav.Link>
        <Nav.Link href="/" className="d-flex align-items-center">
          <span className="pt-1 pr-2">{svg__home}</span> <b>Home</b>
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__explore}</span> <b>Explore</b>
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__notify}</span> <b>Notifications</b>
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__message}</span> <b>Messages</b>
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__bookmark}</span> <b>Bookmarks</b>
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__list}</span> <b>Lists</b>
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="d-flex align-items-center"
        >
          <span className="pt-1 ">
            <img
              src={profile.photo}
              className="nav--img image__profile mr-1"
              alt="a Smiling corgi"
            ></img>
          </span>{" "}
          <b>Profile</b>
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__more}</span> <b>More</b>
        </Nav.Link>
      </div>
      <Button className="m-3 border__50 btn--blue">
        <b>Tweet</b>
      </Button>
    </Nav>
  );
}

export default Navbar;
