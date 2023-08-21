import React, { useState } from "react";
import "../../App.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Home", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),

  getItem("Store", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),
  getItem("Live TV", "13"),

  // { type: "divider" },

  getItem("Categories", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),

  getItem("Option 14", "14"),
];

const Nav = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="bg-black Nav flex">
      <div>
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
          alt="logo"
          width="105px"
        />
      </div>
      <div>
        <Menu
          style={{ width: "40vw", color: "white", backgroundColor: "black" }}
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Nav;
