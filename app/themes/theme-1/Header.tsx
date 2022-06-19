import { Link, useLoaderData } from "@remix-run/react";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { Context } from "~/root";

type Props = {
  data?: {
    siteLogo?: String;
    siteTitle?: String;
    menus?: Object[] | any;
  };
};

export default function Header({ data }: Props) {
  const defaultColor = "#803160";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useContext(Context);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cart.cart.products.length >= 0) {
      setProducts(cart.cart.products);
    }
  }, [cart.cart?.products]);
  // console.log("cart", cart.cart?.products);

  return (
    <Navbar expand={"lg"} className="mb-3">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            {data?.siteLogo ? (
              <Image
                style={{ maxHeight: 70, maxWidth: 70 }}
                src={data.siteLogo}
              />
            ) : (
              "Store Logo"
            )}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              {data?.siteTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ alignItems: "center" }}>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              {data?.menus.map((item, i) => (
                <Nav.Link key={i} href={item?.link}>
                  {item?.name}
                </Nav.Link>
              ))}
              {/* <Nav.Link href="#action2">Link</Nav.Link> */}
              {/* <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <div
              style={{
                width: "5%",
                textAlign: "center",
                fontSize: 25,
                cursor: "pointer",
              }}
              onClick={handleShow}
            >
              <i className="bi bi-bag"></i>
              <span
                style={{
                  right: 0,
                  position: "relative",
                  top: -20,
                  left: 3,
                  background: "black",
                  height: 20,
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.2,
                  color: "#fff",
                  display: "inline-block",
                  width: 20,
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "initial",
                  cursor: "pointer",
                }}
              >
                {/* {cart?.cart && cart?.cart?.products
                  ? cart.cart?.products.length
                  : 0} */}
                {cart.cart?.quantity}
              </span>
            </div>

            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form> */}
          </Offcanvas.Body>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {products.map((item, i) => (
                <div
                  key={i}
                  className="products_infos"
                  style={{ display: "flex", marginBottom: 10 }}
                >
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
                      {item?.quantity}
                    </span>
                  </div>
                  <div
                    key={i}
                    style={{
                      // display: "flex",
                      // justifyContent: "space-between",
                      display: "grid",
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    <span>{item?.title}</span>
                    <span>{item?.price} $</span>
                  </div>
                </div>
              ))}
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
