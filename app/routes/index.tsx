import { ActionFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import Home from "~/themes/theme-1/Home";
import get_configs from "~/utils/db/general/get_configs";
import Get_HomeProducts from "~/utils/db/get_homeProducts";
import itemCSS from "../themes/theme-1/item.css";

type Props = {};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: itemCSS,
      as: "style",
    },
  ];
};
export const loader: LoaderFunction = async () => {
  const get_products = await Get_HomeProducts();
  const getConfigs = await get_configs();
  // console.log(get_products);
  // return get_products.data;
  return { products: get_products.data, configs: getConfigs.data[0] };
};

export const action: ActionFunction = async ({ request, ...o }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const get_products = await Get_HomeProducts(parseInt(data.loadMore));
  // console.log(get_products);
  // return "";
  return { products: get_products.data };
};

export default function Index({}: Props) {
  const loader_data = useLoaderData();
  const action_data = useActionData();
  return <Home data={action_data || loader_data} />;
}
