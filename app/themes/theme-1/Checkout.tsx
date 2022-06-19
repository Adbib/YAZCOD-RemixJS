import { Form } from "@remix-run/react";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TopMessage from "~/components/TopMessage";
import Header from "./Header";
import { Form as FormB } from "react-bootstrap";
type Props = {};

export default function Checkout({}: Props) {
  return (
    <>
      <TopMessage />
      {/* <Header /> */}
      <Container>
        <Row>
          <h1>Checkout</h1>
          <p>Please fill all the form</p>
          <Form className="row">
            <Col className="mb-3" md={8} lg={8} sm={12} xs={12}>
              <div
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: 5,
                }}
              >
                <div
                  style={{
                    borderRadius: "5px 5px 0 0",
                    borderBottom: "1px solid #e5e5e5",
                    backgroundColor: "#fcfcfc",
                  }}
                >
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 0,
                    }}
                  >
                    <span
                      className="step-number"
                      style={{
                        borderRadius: "5px 0 0 0",
                        // margin: "0 15px 0 0px",
                        borderRight: "1px solid #e5e5e5",
                        textAlign: "center",
                        background: "#F1F1F1",
                        width: 50,
                        height: 50,
                        lineHeight: "50px",
                        fontSize: 18,
                        color: "#c6c6c6",
                      }}
                    >
                      1
                    </span>
                    <span
                      className="step-title"
                      style={{
                        fontWeight: "300",
                        marginRight: 15,
                        marginLeft: 15,
                        fontSize: 18,
                      }}
                    >
                      Adress info
                    </span>
                  </h5>
                </div>
                <div className="checkout_form" style={{ padding: 15 }}>
                  <div className="customer_info">
                    <h6
                      style={{
                        margin: "15px 0 15px",
                        padding: "0 7.5px",
                      }}
                    >
                      Customer info
                    </h6>
                    <Row>
                      <Col md={6} lg={6} sm={12} xs={12}>
                        <FormB.Group className="mb-3">
                          <FormB.Control type="text" placeholder="Full Name" />
                        </FormB.Group>
                      </Col>
                      <Col md={6} lg={6} sm={12} xs={12}>
                        <FormB.Group className="mb-3">
                          <FormB.Control type="text" placeholder="Phone" />
                        </FormB.Group>
                      </Col>
                      <Col md={6} lg={6} sm={12} xs={12}>
                        <FormB.Select className="mb-3">
                          <option>Country</option>
                          <option value="1">Morocco</option>
                          <option value="2">Italy</option>
                          <option value="3">France</option>
                        </FormB.Select>
                      </Col>
                      <Col md={6} lg={6} sm={12} xs={12}>
                        <FormB.Select className="mb-3">
                          <option>State</option>
                          <option value="1">Beni Melal-Khnifra</option>
                          <option value="2">Souse-Masa</option>
                          <option value="3">Casablanca</option>
                        </FormB.Select>
                      </Col>
                      <Col md={6} lg={6} sm={12} xs={12}>
                        <FormB.Group className="mb-3">
                          <FormB.Control type="text" placeholder="City" />
                        </FormB.Group>
                      </Col>
                      <Col md={6} lg={6} sm={12} xs={12}>
                        <FormB.Group className="mb-3">
                          <FormB.Control
                            type="text"
                            placeholder="Code Postal"
                          />
                        </FormB.Group>
                      </Col>
                    </Row>
                  </div>

                  <div className="shipping_info">
                    <h6
                      style={{
                        margin: "15px 0 15px",
                        padding: "0 7.5px",
                      }}
                    >
                      Shipping info
                    </h6>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormB.Group className="mb-3">
                        <FormB.Control
                          placeholder="address"
                          as="textarea"
                          rows={3}
                        />
                      </FormB.Group>
                    </Col>
                  </div>
                </div>
              </div>

              {/* part two */}
              <div
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: 5,
                  marginTop: 15,
                }}
              >
                <div
                  style={{
                    borderRadius: "5px 5px 0 0",
                    borderBottom: "1px solid #e5e5e5",
                    backgroundColor: "#fcfcfc",
                  }}
                >
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 0,
                    }}
                  >
                    <span
                      className="step-number"
                      style={{
                        borderRadius: "5px 0 0 0",
                        // margin: "0 15px 0 0px",
                        borderRight: "1px solid #e5e5e5",
                        textAlign: "center",
                        background: "#F1F1F1",
                        width: 50,
                        height: 50,
                        lineHeight: "50px",
                        fontSize: 18,
                        color: "#c6c6c6",
                      }}
                    >
                      2
                    </span>
                    <span
                      className="step-title"
                      style={{
                        fontWeight: "300",
                        marginRight: 15,
                        marginLeft: 15,
                        fontSize: 18,
                      }}
                    >
                      Payments
                    </span>
                  </h5>
                </div>
                <div className="checkout_form" style={{ padding: 15 }}>
                  <div className="customer_info">
                    <h6
                      style={{
                        margin: "15px 0 15px",
                        padding: "0 7.5px",
                      }}
                    >
                      Avilable payment methods :
                    </h6>
                    <Row>
                      <Col md={12} lg={12} sm={12} xs={12}>
                        <FormB.Check
                          className=" mb-3"
                          type="radio"
                          label="Cash on delivery"
                          id={`payment-cod`}
                        />
                      </Col>
                      <Col md={12} lg={12} sm={12} xs={12}>
                        <FormB.Check
                          className=" mb-3"
                          type="radio"
                          label="Credit card"
                          id={`payment-card`}
                        />
                      </Col>
                      <Col md={12} lg={12} sm={12} xs={12}>
                        <FormB.Check
                          className=" mb-3"
                          type="radio"
                          label="Paypal"
                          id={`payment-paypal`}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className="shipping_info">
                    <h6
                      style={{
                        margin: "15px 0 15px",
                        padding: "0 7.5px",
                      }}
                    >
                      Shipping info
                    </h6>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormB.Group className="mb-3">
                        <FormB.Control
                          placeholder="address"
                          as="textarea"
                          rows={3}
                        />
                      </FormB.Group>
                    </Col>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={12} xs={12}>
              <div
                // className="mt-3"
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: 5,
                }}
              >
                <div
                  style={{
                    borderRadius: "5px 5px 0 0",
                    borderBottom: "1px solid #e5e5e5",
                    backgroundColor: "#fcfcfc",
                  }}
                >
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 0,
                    }}
                  >
                    <span
                      className="step-number"
                      style={{
                        borderRadius: "5px 0 0 0",
                        // margin: "0 15px 0 0px",
                        borderRight: "1px solid #e5e5e5",
                        textAlign: "center",
                        background: "#F1F1F1",
                        width: 50,
                        height: 50,
                        lineHeight: "50px",
                        fontSize: 18,
                        color: "#c6c6c6",
                      }}
                    >
                      1
                    </span>
                    <span
                      className="step-title"
                      style={{
                        fontWeight: "300",
                        marginRight: 15,
                        marginLeft: 15,
                        fontSize: 18,
                      }}
                    >
                      Cart info
                    </span>
                  </h5>
                </div>
                <div className="cart_form" style={{ padding: 15 }}>
                  <div className="products_infos" style={{ display: "flex" }}>
                    <div>
                      <Image
                        style={{ width: 70, height: 70 }}
                        thumbnail
                        rounded
                        src="https://cdn.youcan.shop/stores/albaqal/products/9ZqHwAPczEhgm5OZFRofOEY2RFUAECiE2X39aIOH_md.jpeg"
                      />
                      <span
                        style={{
                          right: -15,
                          position: "relative",
                          top: -32,
                          left: -11,
                          background: "black",
                          height: 24,
                          fontSize: 16,
                          fontWeight: "500",
                          // lineHeight: 24,
                          color: "#fff",
                          display: "inline-block",
                          width: 24,
                          borderRadius: "50%",
                          textAlign: "center",
                        }}
                      >
                        1
                      </span>
                    </div>
                    <div
                      style={{
                        // display: "flex",
                        // justifyContent: "space-between",
                        display: "grid",
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span>title</span>
                      <span>0$</span>
                    </div>
                  </div>
                  <hr style={{ color: "#e5e5e5" }} />
                  <div
                    className="total_cart"
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      padding: 7,
                    }}
                  >
                    <h6>Total</h6>
                    <h6>$0</h6>
                  </div>
                  <hr style={{ color: "#e5e5e5" }} />
                </div>
              </div>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
}
