import React from "react";
import { FireFilled } from "@ant-design/icons";

const Logo = () => {
  return (
    <div className="flex items-center justify-center text-white p-[10px] ">
      <div className=" w-[40px] h-[40px] flex items-center justify-center bg-gray-900 font-[500] text-[1.5rem] rounded-3xl">
        <FireFilled />
      </div>

      <div></div>
    </div>
  );
};

export default Logo;
