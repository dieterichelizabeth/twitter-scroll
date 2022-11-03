import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Navbar() {
  const svg__logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-twitter"
      viewBox="0 0 16 16"
    >
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
    </svg>
  );

  const svg__home = [
    <svg
      key={"home"}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-house-heart-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
      <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
    </svg>,
  ];

  const svg__explore = [
    <svg
      key={"explore"}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-hash"
      viewBox="0 0 16 16"
    >
      <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
    </svg>,
  ];

  const svg__notify = (
    <svg
      key={"notify"}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-bell"
      viewBox="0 0 16 16"
    >
      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
    </svg>
  );

  const svg__message = (
    <svg
      key={"message"}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-envelope"
      viewBox="0 0 16 16"
    >
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
    </svg>
  );

  const svg__bookmark = (
    <svg
      key={"bookmark"}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-bookmark"
      viewBox="0 0 16 16"
    >
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
    </svg>
  );

  const svg__list = (
    <svg
      key={"list"}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-card-list"
      viewBox="0 0 16 16"
    >
      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
    </svg>
  );

  const svg__profile = (
    <svg
      key={"profile"}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-person-circle"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  );

  const svg__more = (
    <svg
      key={"more"}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      className="bi bi-three-dots"
      viewBox="0 0 16 16"
    >
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <div className="pl-4 pr-4">
        <Nav.Link
          href="/"
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__logo}</span>
        </Nav.Link>
        <Nav.Link
          href="/"
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__home}</span> Home
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__explore}</span> Explore
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__notify}</span> Notifications
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__message}</span> Messages
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__bookmark}</span> Bookmarks
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__list}</span> Lists
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__profile}</span> Profile
        </Nav.Link>
        <Nav.Link
          eventKey="disabled"
          disabled
          className="font-weight-bold d-flex align-items-center"
        >
          <span className="pt-1 pr-2">{svg__more}</span> More
        </Nav.Link>
      </div>
      <Button variant="primary" className="m-3 button__50">
        Tweet
      </Button>
    </Nav>
  );
}

export default Navbar;
