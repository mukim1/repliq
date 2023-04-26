import { Outlet } from "react-router-dom";
import Sidebar from "../Appbars/Silebar/Sidebar";
import Header from "../Appbars/Header";
import { useState } from "react";

const Layout = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <main className="bg-gray-100 dark:bg-gray-800  text-gray-700 dark:text-gray-300 h-screen overflow-hidden relative">
      <div className="flex">
        <div className={`hidden md:block my-4 ml-3 mr-4 relative ${isExpand?"w-60":"w-20"}`}>
          <Sidebar isExpand={isExpand} setIsExpand={setIsExpand} />
        </div>
        <div className="md:mt-4 md:pr-4 md:space-y-4 flex-1">
          <Header />
          <div className="overflow-auto h-screen pb-28 text-gray-700 dark:text-gray-50 ">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
