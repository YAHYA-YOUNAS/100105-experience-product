import React, { useState } from "react";
import SamanthaEvaluator from "./SamanthaEvaluator";
import { Link } from "react-router-dom";

const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="overflow-hidden">
<div className="flex bg-gray-200 justify-between ">
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    className="items-center p-2 mt-2 ms-3 text-md text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    onClick={handleToggleSidebar}
  >
    <span className="sr-only">Open sidebar</span>
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  {/* <div className="flex justify-center overflow-hidden h-[10rem] bg-[#131A26] py-3">
    <img
      className="bg-[#131A26]"
      src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
      alt=""
    />
  </div> */}

 
</div>

      {sidebarVisible && (
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-[25rem] h-screen transition-transform ${
            sidebarVisible
              ? "translate-x-0"
              : "-translate-x-full sm:translate-x-0"
          }`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-4 font-medium">
              <li className="flex justify-between">
                <a className="flex items-center ps-2.5 mb-5">
                  <img
                    src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
                    className="h-6 me-2 sm:h-12 rounded-3xl border border-gray-400"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Dowell
                  </span>
                </a>

                <button
                  className="mt-1 mr-8 sm:mr-0 sm:mt-2 h-8 w-8 rounded-full bg-red-500 flex items-center justify-center"
                  onClick={handleToggleSidebar}
                >
                  <span className="text-white">X</span>
                </button>
              </li>

              {sidebarVisible && (
                <div className="ml-4 space-y-8 text-xl font-medium">
                  <li className="">
                    <Link
                      to="/samantha"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="ms-3">SAMANTA CONTENT EVALUATOR</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/world-price"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        WORLD PRICE INDICATOR
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/legalzard"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        LEGALZARD
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/location-search"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        LOCATION SPECIFIC SEARCH
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/website-crawler"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        WEBSITE CRAWL
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/search-livinglab"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        SEARCH IN LIVINGLAB
                      </span>
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </aside>
      )}

      <div className={`   sm:ml-[25rem] "}`}>
        <di className="">
          <SamanthaEvaluator />
        </di>
      </div>
    </div>
  );
};

export default Home;
