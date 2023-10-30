import React from "react";
import { useState } from "react";
import userpoll from "../userpoll";
import { Container, Form,Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const preve = (e) => {
    e.preventDefault();
    userpoll.signUp(email, pass, [], null,(err,data)=>{
      if(err)
      {
        window.alert("User doesn't exist")
        console.error(err)
      }
      else
      {
        alert("Successfully Login User",data)
        console.log(data)
      }
    });
  
  };
  return (
    <>
    <Container className="text-center">

      <Form onSubmit={preve} className="d-grid col-lg-12 w-50">
        <h1 className="text-center">Login</h1>
           <Row>
          <Col lg={12}>
        <Form.Group >
          <Form.Label>Enter Your Email</Form.Label>

          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="xl"
            className=""
            
            ></Form.Control>
        </Form.Group>
            </Col>
            </Row>
        <Row>
          <Col lg={12}>
        <Form.Group>
          <Form.Label>Enter Your password</Form.Label>
          <Form.Control
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>
          </Col>
        </Row>
        <Button type="submit" variant="primary" className="gx-5">
          Submit
        </Button>
      </Form>
      </Container>
    </>
  );
};
export default Signup;
