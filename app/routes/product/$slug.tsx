import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";

import Single from "~/themes/theme-1/Single";
import singleCss from "~/themes/theme-1/single.css";
import get_configs from "~/utils/db/general/get_configs";
import get_SingleProduct from "~/utils/db/get_singleProduct";
type Props = {};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: singleCss,
      as: "style",
    },
  ];
};
export const loader: LoaderFunction = async ({ params }) => {
  const productName: string | undefined | null = params.slug;
  const getProduct = await get_SingleProduct(productName);
  const getconfig = await get_configs();
  // console.log(getProduct);
  return { configs: getconfig.data[0], product: getProduct.data };
};

export default function Index({}: Props) {
  const data = useLoaderData();
  // console.log("single", data);
  return (
    <>
      <Single data={data} />
    </>
  );
}
