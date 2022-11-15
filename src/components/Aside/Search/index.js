import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { svg__search } from "../../../assets/svg";

function Search() {
  return (
    <>
      <Form>
        <Form.Label htmlFor="search" hidden>
          Search
        </Form.Label>
        <InputGroup className="mb-2">
          <InputGroup.Text className="border--left__50 text-muted">
            {svg__search}
          </InputGroup.Text>
          <Form.Control
            id="search"
            placeholder="Seach Twitter"
            aria-label="Search Bar Disabled"
            className="border--right__50"
            disabled
            readOnly
          />
        </InputGroup>
      </Form>
    </>
  );
}

export default Search;
