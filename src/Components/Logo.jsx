import React from "react";
import { FireFilled } from "@ant-design/icons";

const Logo = () => {
  return (
    <div className="logo flex items-center justify-center text-white p-[10px] ">
      <div className="logo-icon w-[40px] h-[40px] flex items-center justify-center bg-gray-900 font-[500] text-[1.5rem] rounded-3xl">
        <FireFilled />
      </div>
    </div>
  );
};

export default Logo;
