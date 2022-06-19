import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { Col, Container, Row, SSRProvider } from "react-bootstrap";
import globalCSS from "./assets/css/global.css";
import TopMessage from "./components/TopMessage";
import Header from "./themes/theme-1/Header";
import get_configs from "./utils/db/general/get_configs";
export const Context = createContext<any>({
  quantity: 0,
  total: 0,
  products: [],
});

export default function App() {
  const [cart, setCart] = useState({ quantity: 0, total: 0, products: [] });
  useEffect(() => {
    console.log("useEffect",cart);
  }, [cart])
  
  return (
    // <NextUIProvid>er>
    <Context.Provider value={{ cart, setCart }}>
      <SSRProvider>
        <App1 />
      </SSRProvider>
    </Context.Provider>
    // </NextUIProvider>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: bootstrap,
      as: "style",
    },
    {
      rel: "stylesheet",
      href: globalCSS,
      as: "style",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css",
      as: "style",
    },
  ];
};
export const loader: LoaderFunction = async () => {
  const getConfigs = await get_configs();
  // console.log(get_products);
  return getConfigs.data[0];
};
function App1() {
  const location = useLocation();
  const data = useLoaderData();
  if (location.pathname.includes("/admin"))
    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          {/* <Header /> */}
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <TopMessage data={data?.topMessage} />
        <Header data={data} />
        {location.pathname === "/" && (
          <Container
            fluid
            style={{
              background: `url("${data?.siteCover}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              maxHeight: 500,
              height: 500,
            }}
          ></Container>
        )}
        <Outlet />
        <Container
          fluid
          style={{
            marginTop: 100,
            textAlign: "center",
            borderTop: "1px solid #ccc",
            padding: 20,
          }}
        >
          <Row>
            <Col> YAZCOD</Col>
          </Row>
        </Container>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
