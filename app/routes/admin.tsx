import { Outlet } from "@remix-run/react";
import React from "react";
import SideBar from "~/components/admin/SideBar";
import adminCSS from "~/assets/css/adminGlobal.css";
import { LinksFunction } from "@remix-run/node";
type Props = {};

export const links: LinksFunction = () => {
  return [
    {
      as: "style",
      rel: "stylesheet",
      href: adminCSS,
    },
  ];
};
export default function admin({}: Props) {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <div className="col py-3" style={{ background: "#f5f8fb" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
