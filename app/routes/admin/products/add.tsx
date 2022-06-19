import { Form, useActionData, useTransition } from "@remix-run/react";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form as FormB, Breadcrumb, Button } from "@themesberg/react-bootstrap";
import { ActionFunction } from "@remix-run/node";
import AddProduct from "~/utils/db/add_product";

type Props = {};

export const action: ActionFunction = async ({ request }) => {
  const formData: FormData = await request.formData();
  const data = Object.fromEntries(formData);
  const add_product = await AddProduct(data);
  console.log(add_product);
  return add_product;
};

export default function Add({}: Props) {
  const action_data = useActionData();
  const transition = useTransition();
  useEffect(() => {
    if (action_data) {
      alert("action_data.data");
    }
  }, [action_data]);

  return (
    <Container>
      <Row>
        <Col className="mt-5" md={12} lg={12}>
          <Breadcrumb
            listProps={{
              className: "breadcrumb-primary breadcrumb-transparent",
            }}
          >
            <Breadcrumb.Item href="/">Admin</Breadcrumb.Item>
            <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
            <Breadcrumb.Item active>Add Product</Breadcrumb.Item>
          </Breadcrumb>
          <h2>Add Product</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col style={{ paddingLeft: 30 }} md={12} lg={12}>
          <Form method="post">
            <FormB.Group className="mb-3">
              <FormB.Label>Product Title : </FormB.Label>
              <FormB.Control
                name="title"
                type="text"
                placeholder="Product title"
              />
            </FormB.Group>
            <FormB.Group className="mb-3">
              <FormB.Label>Description : </FormB.Label>
              <FormB.Control
                name="desc"
                as="textarea"
                placeholder="Description"
                rows={3}
              />
            </FormB.Group>
            <FormB.Group className="mb-3">
              <FormB.Label>Product Price : </FormB.Label>
              <FormB.Control name="price" type="number" placeholder="10" />
            </FormB.Group>

            <FormB.Group className="mb-3">
              {/* <FormB.Label>Example select</FormB.Label> */}
              <FormB.Select name="category">
                <option defaultValue>Category</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </FormB.Select>
            </FormB.Group>
            <Button
              disabled={transition.submission}
              type="submit"
              variant="primary"
            >
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
