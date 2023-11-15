import React, { useState } from "react";
import { Layout } from "antd";
import Logo from "./Logo";
import MenuList from "./MenuList";
import ToggleThemeButton from "./ToggleThemeButton";

const { Header, Sider } = Layout;
const SideBar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Layout>
      <Sider theme={darkTheme ? "dark" : "light"} className="text-white">
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
    </Layout>
  );
};

export default SideBar;
