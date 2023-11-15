import { Button } from "antd";
import React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <>
      <div className="toggle-theme-btn">
        <Button
          onClick={toggleTheme}
          className="bg-white w-[45px] h-[45px] dark:bg-gray-900 text-white rounded-[50%]"
        >
          {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
      </div>
    </>
  );
};

export default ToggleThemeButton;
