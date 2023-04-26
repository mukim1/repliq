import StyledLInk, { StyledLInk2 } from "./StyledLink";
import React from "react";
import { linkItem } from "../../../data/sidebar_item";
import { FaAngleDoubleLeft, FaArrowsAlt } from "react-icons/fa";

type Props = {
  isExpand: boolean;
  setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isExpand, setIsExpand }: Props) => {
  return (
    <div className="w-full h-screen shadow-md bg-white dark:bg-gray-700 absolute rounded-lg">
      <ul className="relative p-2 h-[90%] overflow-y-auto">
        {isExpand
          ? linkItem.map((item) => <StyledLInk key={item.id} item={item} />)
          : linkItem.map((item) => <StyledLInk2 key={item.id} item={item} />)}
      </ul>
      <div className="text-center bottom-10 absolute w-full dark:bg-gray-700">
        <hr className=" mx-5" />
        <p className="py-2 text-sm">
          {isExpand ? "version : 1.0.0" : <small>V : 1.0.0</small>}
        </p>

        <button onClick={() => setIsExpand((prev) => !prev)}>
          {isExpand ? <FaAngleDoubleLeft /> : <FaArrowsAlt />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
