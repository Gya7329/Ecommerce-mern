import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler} style={{ display: "flex" }}>
        {/* <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="search"
        ></Form.Control> */}

        <input
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="search"
        ></input>

        <Button
          type="submit"
          variant="success"
          className="btn"
          sytle={{ display: "flex" }}
        >
          search
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
