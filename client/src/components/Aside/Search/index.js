import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search() {
  const svg__search = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
  return (
    <>
      <Form>
        <Form.Label htmlFor="inlineFormInputGroup" hidden>
          Search
        </Form.Label>
        <InputGroup className="mb-2">
          <InputGroup.Text className="border--left__50">
            {svg__search}
          </InputGroup.Text>
          <Form.Control
            id="inlineFormInputGroup"
            placeholder="Seach Twitter"
            aria-label="Disabled input example"
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
