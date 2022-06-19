import {
  Button,
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Nav,
  Row,
  Tab,
  Tabs,
  Carousel,
} from "react-bootstrap";
import TopMessage from "~/components/TopMessage";
import Header from "./Header";
import OneClick from "./OneClick";
// import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

type Props = {
  data: any;
};

export default function Single({ data }: Props) {
  const [IsClient, setIsClient] = useState(false);
  useEffect(() => {
    if (window !== undefined) setIsClient(true);
  }, []);
  console.log("data", data);
  return (
    <>
      {/* <TopMessage /> */}
      <Container fluid>
        {/* <Header /> */}
        <Row>
          <Col style={{ textAlign: "right" }} lg={6} md={6} sm={12} xs={12}>
            <h1 style={{ color: "black", fontWeight: "bold" }}>
              {data.product && data.product.title}
            </h1>
            <h3 style={{ color: "#803160", fontWeight: "bold" }}>
              {data.product && data.product.price}$
            </h3>

            {data.configs.singleProduct.chekcoutMode === "OneClick" ? (
              <OneClick />
            ) : (
              <h1>hhh</h1>
            )}
          </Col>

          <Col lg={5} md={5} sm={12} xs={12}>
            <div
              style={{
                padding: 5,
                // paddingBottom: 100,
                border: "2px solid #F0F0F0",
                borderRadius: 5,
              }}
            >
              {/* <Image
                fluid
                src="https://cdn.youcan.shop/stores/albaqal/products/9ZqHwAPczEhgm5OZFRofOEY2RFUAECiE2X39aIOH_lg.jpeg" //"https://cdn.ycan.shop/stores/albaqal/others/cUrtBruF2l3xzgsqf55BMmhsc5iLLohmbbAb2IEm.png"
              /> */}

              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.product && data.product.img} //"https://cdn.youcan.shop/stores/albaqal/products/9ZqHwAPczEhgm5OZFRofOEY2RFUAECiE2X39aIOH_lg.jpeg"
                    alt="First slide"
                  />
                  {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.youcan.shop/stores/albaqal/products/m9RudYr7JiZuNJaIZ8ykbIk5uRY9LOdIrtBubW3q_lg.jpeg"
                    alt="First slide"
                  />
                  {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col lg={1} md={1}>
            <div
              style={{
                fontSize: 50,
                position: "fixed",
                right: "3%",
                display: "grid",
              }}
            >
              <i className="bi bi-facebook"></i>
              <i className="bi bi-whatsapp"></i>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 20,
            justifyContent: "center",
          }}
        >
          <Col lg={10} md={10} sm={12} xs={12}>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Description">
                {data.product && data.product.desc}
              </Tab>
              <Tab eventKey="profile" title="Reviews"></Tab>
              <Tab eventKey="contact" title="Contact" disabled></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
}
