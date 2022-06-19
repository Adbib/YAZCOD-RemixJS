import { Link } from "@remix-run/react";
import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Context } from "~/root";
type Props = {
  data: any;
};
type Cart = { products: Object[]; quantity: Number | any; total: Number | any };
export const updateCart = async (cart: Cart, item: any, changer: any) => {
  // console.log("cart : " + cart, "item : " + item, "changer : " + changer)
  console.log("cart", cart);
  console.log("item", item);
  console.log("changer", changer);
  // const findItem = cart.products.find((i: any) => i.id === item.id);
  // if (findItem) {
  //   const index = cart.products.indexOf(findItem);
  //   cart.quantity += 1;
  //   cart.products[index] = { ...item, quantity: +1 };
  //   cart.total += cart.products[index].quantity * cart.products[index].price;
  //   // console.log(cart);
  //   changer.setCart(cart);
  // } else {
  //   cart.quantity += 1;
  //   cart.total += item.price;
  //   cart.products = [...cart.products, { ...item, quantity: +1 }];
  //   // console.log(cart);'
  //   changer.setCart(cart);
  // }
};
export default function Item({ data }: Props) {
  const cart = useContext(Context);
  // console.log("cart", cart);
  //
  return (
    <Card style={{ width: "18rem" }}>
      <Link
        style={
          {
            // padding: "30% 0 30%",
            // display: "block",
            // position: "relative",
            // height: 0,
            // overflow: "hidden",
            // borderBottom: "1px solid rgba(0,0,0,.125)",
          }
        }
        className="img-thum"
        to={"product/" + data.title}
      >
        <Card.Img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: 300,
          }}
          variant="top"
          src={data && data.img} //"https://cdn.youcan.shop/stores/albaqal/products/m9RudYr7JiZuNJaIZ8ykbIk5uRY9LOdIrtBubW3q_md.jpeg"
          // height="180"
        />
      </Link>
      <Card.Body style={{ paddingTop: 30 }}>
        <a style={{ textDecoration: "none" }}>
          {/* href={"product/" + data.title} */}
          <Card.Title
            style={{ color: "black", fontSize: 14, fontWeight: "bold" }}
          >
            {data && data.title}
          </Card.Title>
          <Card.Text
            style={{ color: "#803160", fontSize: 16, fontWeight: "bold" }}
          >
            {data && data.price} $
          </Card.Text>
          <Button
            style={{ width: "80%", fontWeight: "bold" }}
            variant="outline-primary"
            onClick={() => {
              const cart1 = { ...cart.cart };
              delete cart1.setCart;
              // console.log("gla", cart.cart);
              const findItem = cart.cart?.products.find(
                (i: any) => i.id === data.id
              );
              if (findItem) {
                const index = cart1.products.indexOf(findItem);
                cart1.quantity += 1;
                cart1.products[index] = {
                  ...data,
                  quantity: cart1.products[index].quantity + 1,
                };
                cart1.total +=
                  cart1.products[index].quantity * cart1.products[index].price;
                // console.log(cart);
                cart.setCart(cart1);
              } else {
                cart1.quantity += 1;
                cart1.total += data.price;
                cart1.products = [...cart1.products, { ...data, quantity: 1 }];
                // console.log(cart);'
                cart.setCart(cart1);
              }
            }}
          >
            Buy
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}
