import { Form } from "@remix-run/react";
import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Form as FormB } from "react-bootstrap";
type Props = {};

export default function OneClick({}: Props) {
  return (
    <Row style={{ justifyContent: "end" }}>
      <Form style={{ justifyContent: "end" }} className="row" method="post">
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <FormB.Group className="mb-3">
              <FormB.Control name="items_number" placeholder="name" />
            </FormB.Group>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <FormB.Group className="mb-3">
              <FormB.Control name="items_number" placeholder="phone" />
            </FormB.Group>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <FormB.Group className="mb-3">
              <FormB.Control placeholder="address" as="textarea" rows={3} />
            </FormB.Group>
          </Col>
        </Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Button
            style={{ width: "70%", padding: 15 }}
            className="mb-3"
            variant="warning"
            type="submit"
          >
            Buy
          </Button>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12}>
          <FormB.Group className="mb-3">
            <FormB.Control name="items_number" type="number" placeholder="1" />
          </FormB.Group>
        </Col>
      </Form>
    </Row>
  );
}
