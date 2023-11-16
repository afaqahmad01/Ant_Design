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

const { SubMenu } = Menu;

const MenuList = ({ darkTheme }) => {
  const items = [
    {
      label: "Home",
      icon: <HomeOutlined />,
      key: "Home",
    },
    {
      label: "Activity",
      icon: <AppstoreAddOutlined />,
      key: "Activity",
      subItems: [
        {
          key: "task1",
          label: "Task 1",
        },
        {
          key: "task2",
          label: "Task 2",
        },
        {
          key: "subtasks",
          label: "Sub Tasks",
          subItems: [
            {
              key: "subtask-1",
              label: "Sub Task 1",
            },
            {
              key: "subtask-2",
              label: "Sub Task 2",
            },
          ],
        },
      ],
    },
    {
      label: "Progress",
      icon: <AreaChartOutlined />,
      key: "Progress",
    },
    {
      label: "Payment",
      icon: <PayCircleOutlined />,
      key: "Payment",
    },
    {
      label: "Setting",
      icon: <SettingOutlined />,
      key: "Setting",
    },
  ];
  const renderMenuItems = (menuItems) =>
    menuItems.map((item) => {
      if (item.subItems) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.subItems)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key} icon={item.icon} item={items.label}>
            {item.label}
          </Menu.Item>
        );
      }
    });

  return (
    <>
      <Menu
        theme={darkTheme ? "dark" : "light"}
        mode="inline"
        className="menu-bar h-[89.8vh] mt-[2rem] flex flex-col gap-[15px] text-[1rem] relative"
      >
        {renderMenuItems(items)}
      </Menu>
    </>
  );
};

export default MenuList;
