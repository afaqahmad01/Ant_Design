import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const MenuList = ({ darkTheme }) => {
  return (
    <>
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menu-bar h-[84.8vh] mt-[2rem] flex flex-col gap-[15px] text-[1rem] relative"
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="activity" icon={<AppstoreAddOutlined />}>
          Activity
        </Menu.Item>
        <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Tasks">
          <Menu.Item key="task-1">Task 1</Menu.Item>
          <Menu.Item key="task-2">Task 2</Menu.Item>

          <Menu.SubMenu key="subtasks" title="Subtasks">
            <Menu.Item key="subtasks-1">Sub Task 1</Menu.Item>
            <Menu.Item key="subtasks-2">Sub Task 2</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key="progress" icon={<AreaChartOutlined />}>
          Progress
        </Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined />}>
          Payment
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />}>
          Setting
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MenuList;
