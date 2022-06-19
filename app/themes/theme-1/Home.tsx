import { Form, useTransition } from "@remix-run/react";
import React, { useContext } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import TopMessage from "~/components/TopMessage";
import { Context } from "~/root";
import Header from "./Header";
import Item from "./Item";

type Props = {
  data: any;
};

export default function Home({ data }: Props) {
  const transition = useTransition();
  const [loadMoreCount, setLoadMoreCount] = React.useState(4);

  return (
    <>
      {/* <TopMessage /> */}
      {/* <Header data={data?.configs} /> */}
      <Container fluid>
        {/* <div style={{ maxHeight: 500, width: "100%" }}>
          <Image
            fluid
            style={{ maxHeight: 500, width: "100%", marginBottom: 20 }}
            src={data?.configs?.siteCover} //"https://cdn.ycan.shop/stores/albaqal/others/cUrtBruF2l3xzgsqf55BMmhsc5iLLohmbbAb2IEm.png"
          />
        </div> */}
        <Row
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <h2>All Products</h2>
          {data &&
            data?.products.map((item: any, index: number) => (
              <Col
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  // width: "20%",
                  marginTop: 20,
                }}
                md={3}
                lg={3}
                sm={12}
                xs={12}
              >
                <Item data={item} />
              </Col>
            ))}
          <Col
            style={{
              marginTop: 30,
            }}
            className="bla"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            <Form method="post">
              <input
                hidden
                type="text"
                name="loadMore"
                defaultValue={loadMoreCount}
              />
              <Button
                type="submit"
                onClick={() => {
                  setLoadMoreCount(loadMoreCount + 4);
                }}
                style={{ width: 200 }}
                variant="outline-dark"
              >
                {transition.submission ? "Loading..." : "Show more"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
