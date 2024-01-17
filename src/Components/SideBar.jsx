import React from "react";

const Sidebar = ({ isVisible, onClose }) => {
  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
        isVisible ? "translate-x-0" : "-translate-x-full w-0 sm:translate-x-0"
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
              onClick={onClose}
            >
              <span className="text-white">X</span>
            </button>
          </li>

          <div className="ml-4 space-y-8 text-xl font-medium">
            <li className="">
              <a
                href="/samantha"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">SAMANTA CONTENT EVALUATOR</span>
              </a>
            </li>
            <li>
              <a
                href="/world-price"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  WORLD PRICE INDICATOR
                </span>
              </a>
            </li>
            <li>
              <a
                href="/legalzard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">LEGALZARD</span>
              </a>
            </li>
            <li>
              <a
                href="/location-search"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  LOCATION SPECIFIC SEARCH
                </span>
              </a>
            </li>
            <li>
              <a
                href="/website-crawler"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  WEBSITE CRAWLER
                </span>
              </a>
            </li>
            <li>
              <a
                href="/search-livinglab"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  SEARCH IN LIVINGLAB
                </span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;