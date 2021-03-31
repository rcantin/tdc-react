import React from "react";
import { Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <h1 className="tdc-font text-center">Contact Us</h1>

      <Form>
        <Form.Group controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" />
        </Form.Group>
        <Form.Group controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
