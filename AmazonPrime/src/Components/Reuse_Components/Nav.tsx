import React, { useState } from "react";
import "../../App.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import Profile from './../Profile';

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
  getItem("Home", "Home", "", [
    getItem("All", "All"),
    getItem("Movies", "Movies"),
    getItem("TV Shows", "TV Shows"),
  ]),
  
  getItem("Store", "Store", "", [
    getItem("All", "All"),
    getItem("Rent", "Rent"),
    getItem("Channels", "Channels"),
  ]),
  getItem("Live TV", "Live TV"),

  // { type: "divider" },

  getItem("Categories", "Categories", "", [
    getItem('Genres', 'Genres', null, [getItem('Action and Adventure', 'Action and Adventure'), getItem('Anime', 'Anime'), 
    getItem('Comedy', 'Comedy'), getItem('Documentary', 'Documentary')], 'group'),
    getItem('Featured Collection', 'Featured Collection', null, [getItem('English', 'English'), getItem('Tamil', 'Tamil'),
    getItem('Hindi', 'Hindi'), getItem('Malayalam', 'Malayalam')], 'group'),
  ]),

];

//? second menu

type MenuItems = Required<MenuProps>["items"][number];

function getItems(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItems[],
  type?: "group"
): MenuItems {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItems;
}

const item: MenuProps["items"] = [
  getItems("Live TV", "Live TV", <SearchOutlined />),
  getItems("Try for free", "Try for free", ),

  getItems("EN", "Language","",[
    getItems("English", "English"),
    getItems("Polski", "Polski"),
    getItems("Suomi", "Suomi"),
    getItems('Tamil', 'Tamil'),
    getItems('Hindi', 'Hindi'), 
    getItems('Malayalam', 'Malayalam'),
  ]),
  
  getItems("", "Profile", <Profile/>, [
    getItems("Sign In", "Sign In"),
    getItems("Help", "Help"),
    getItems("Watch Anywhere", "Watch Anywhere"),
  ]),
  
];

const Nav = () => {
  const [current, setCurrent] = useState("mail");
  const [currents, setCurrents] = useState("mail");

  const onClick: MenuProps["onClick"] = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const onClicks: MenuProps["onClick"] = (e: any) => {
    console.log("click ", e);
    setCurrents(e.key);
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
          style={{ width: "25vw", color: "white", backgroundColor: "black" }}
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div> <Menu
          style={{ width: "20vw", color: "white", backgroundColor: "black" }}
          theme="dark"
          onClick={onClicks}
          selectedKeys={[currents]}
          mode="horizontal"
          items={item}
        /></div>
    </div>
  );
};

export default Nav;
