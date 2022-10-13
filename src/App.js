import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

export default function Profile() {

  const [inputfieldsToAdd, setInputfieldsToAdd] = React.useState(1);
  // const [committedFieldsToAdd, setCommittedFieldsToAdd] = React.useState(0);

  const Field = ({ id }: { id: number }) => (
    <Container>
      <h4>Traveler {id}</h4>
      <Row>
        <Col>
          <Form.Group className="mb-3" >
            <Form.Label >First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              // id={`field${id}`}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" >
            <Form.Label >Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              // id={`field${id}`}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" >
            <Form.Label >Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              // id={`field${id}`}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email address"
              // id={`field${id}`}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <hr />
    </Container>
  );

  const getInitialState = () => {
    const value = 1;
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10));
    console.log(value)
  }
  return (
    <div className="App">
      <label htmlFor="count">How many people are travelling?</label>
      <br />
      <input
        type="number"
        value={value}
        onChange={handleChange
        }
        min="1"
        // (e) =>
        //   setInputfieldsToAdd(parseInt(e.currentTarget.value, 10))
      />
      <hr />
      {/* <button
        className="btn btn-success"
        onClick={() => {
          setCommittedFieldsToAdd(inputfieldsToAdd);
        }}
      >
        Buy now
      </button> */}

      <h5 className="pt-4">Biling details</h5>

      {[...Array(value)].map(
        (value: undefined, index: number) => (
          <Field id={index + 1} key={index} />
        )
      )}
    </div>
  );
}





