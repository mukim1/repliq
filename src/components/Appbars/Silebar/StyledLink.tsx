import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import React from "react";

const commonLinkStyles =
  "flex items-center rounded cursor-pointer transition duration-300 ease-in-out text-gray-600 dark:text-white m-0 ";

const inActiveClass =
  commonLinkStyles +
  "py-4 px-6 h-12 tracking-wider transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-500 ";

const subLinkClass =
  commonLinkStyles +
  "py-4 pl-12 pr-6 h-6 text-xs tracking-widest hover:text-cyan-500 dark:hover:text-cyan-400 ";

const CommonTag = ({ item }: any) => (
  <>
    <span className="w-3 h-3 mr-3 text-cyan-500">{item.icon}</span>
    <span className=" -mb-1">{item.name}</span>
  </>
);

const StyledLInk = ({ item, id }: any) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <React.Fragment>
      {item.subLink ? (
        <a
          className={inActiveClass}
          onClick={() => setIsExpand((prev) => !prev)}
        >
          <CommonTag item={item} />
          <span className="w-3 h-3 ml-auto">
            <MdExpandMore />
          </span>
        </a>
      ) : (
        <NavLink
          key={id}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? `${inActiveClass} bg-gray-300 dark:bg-gray-600`
              : inActiveClass
          }
        >
          <CommonTag item={item} />
        </NavLink>
      )}

      {isExpand && (
        <div className="bg-gray-200 dark:bg-gray-800">
          {item.subLink.map((subItem: any, id: any) => (
            <NavLink
              key={id}
              to={subItem.path}
              className={({ isActive }) =>
                isActive
                  ? `${subLinkClass} text-cyan-500 dark:text-cyan-300`
                  : subLinkClass
              }
            >
              {subItem.name}
            </NavLink>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default StyledLInk;

export const StyledLInk2 = ({ item, id }: any) => (
  <NavLink
    key={id}
    to={item.path}
    className={({ isActive }) =>
      isActive
        ? `${inActiveClass} bg-gray-100 dark:bg-gray-600 text-cyan-500 dark:text-cyan-500`
        : inActiveClass
    }
  >
    <span>{item.icon}</span>
  </NavLink>
);
