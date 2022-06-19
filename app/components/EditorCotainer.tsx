import React, { ReactNode } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

type Props = {
  children?: ReactNode;
  title: string;
  desc: string;
};

export default function EditorCotainer({ title, desc, children }: Props) {
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
          <h2>{title}</h2>
          <p>{desc}</p>
        </Col>
        <Col style={{ paddingLeft: 30 }} md={12} lg={12}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
