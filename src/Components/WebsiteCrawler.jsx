import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "react-feather";
import { Link } from "react-router-dom";

import FetchWebsiteCrawler from "./Fetching/FetchWebsiteCrawler";

const WebsiteCrawler = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState("");
  const [report, setReport] = useState("website-crawler");
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);
  return (
    <div className="overflow-hidden md:flex sm:flex md:flex-row  sm:flex-col  w-full  md:gap-40">
      <aside
        id="default-sidebar"
        aria-label="Sidebar"
        className="md:flex-2 md:w-1/3"
      >
        <div className="h-full  px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800  ">
          <ul className="space-y-4 font-medium md:shadow-lg sm:shadow-sm">
            <li className="flex justify-center border border-solid border-green-600 py-3">
              Report
            </li>
            <li className="md:flex  md:justify-between md:h-full sm:w-1/16">
              <a className="flex items-center ps-2.5 md:mb-5 sm:mb-2">
                <img
                  src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
                  className="md:h-full md:w-[50%] mx-auto sm:w-[10%] rounded-md border border-gray-400"
                  alt="Flowbite Logo"
                />
              </a>

              {/* <button
                  className="mt-1 mr-8 sm:mr-0 sm:mt-2 h-8 w-8   rounded-full bg-red-500 flex items-center justify-center"
                  onClick={handleToggleSidebar}
                >
                  <span className="text-white">X</span>
                </button> */}
            </li>

            <div className="md:ml-4 space-y-6 text-xl font-medium pb-6 md:block sm:hidden">
              <li className="">
                <Link
                  to="/samantha"
                  className="flex items-center p-2 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white mr-3"
                >
                  <span className="ms-3 text-sm">
                    SAMANTA CONTENT EVALUATOR
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/world-price"
                  className="flex items-center p-2 rounded-lg dark:text-white dark:hover:bg-gray-700 group border border-solid border-green-200  hover:bg-green-600 hover:text-white mr-3"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap text-sm">
                    WORLD PRICE INDICATOR
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/legalzard"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white mr-3"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap text-sm">
                    LEGALZARD
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/location-search"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group  border border-solid border-green-200 hover:bg-green-600 hover:text-white mr-3"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap text-sm">
                    LOCATION SPECIFIC SEARCH
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/website-crawler"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white mr-3"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap text-sm">
                    WEBSITE CRAWLER
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/search-livinglab"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white mr-3 mb-4"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap text-sm">
                    SEARCH IN LIVINGLAB
                  </span>
                </Link>
              </li>
            </div>
            {/* mobile -- version */}

            <div
              className="absolute inline-block w-[96%] md:hidden mx-auto sm:block"
              ref={dropdownRef}
            >
              <button
                onClick={toggleDropdown}
                className="flex  hover:border-green-900 px-4 py-2 text-md focus:outline-none items-center justify-between p-2 w-full mx-auto mb-5 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white mr-3"
              >
                {report === "SamanthaEvaluator" && (
                  <span> SAMANTA CONTENT EVALUATOR</span>
                )}
                {report === "Legalzard" && <span>LEGALZARD</span>}
                {report === "SearchLivingLab" && <span>Search Living Lab</span>}
                {report === "LocationSearch" && (
                  <span>LOCATION SPECIFIC SEARCH</span>
                )}
                {report === "WorldPrice" && <span> WORLD PRICE INDICATOR</span>}
                {report === "website-crawler" && <span> WEBSITE CRAWLER</span>}
                {report === "search-livinglab" && (
                  <span> SEARCH IN LIVINGLAB</span>
                )}

                <span className="ml-1">
                  <ChevronDown />
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute w-full bg-white text-gray-800 border rounded-md shadow-lg p-1 z-50">
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/samantha"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white my-2"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            setReport("SamanthaEvaluator");
                            setIsDropdownOpen(false);
                          }}
                        >
                          SAMANTA CONTENT EVALUATOR
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/world-price"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            setReport("WorldPrice");
                            setIsDropdownOpen(false);
                          }}
                        >
                          WORLD PRICE INDICATOR
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/legalzard"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white my-3"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            setReport("Legalzard");
                            setIsDropdownOpen(false);
                          }}
                        >
                          LEGALZARD
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/location-search"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white my-3"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            setReport("LocationSearch");
                            setIsDropdownOpen(false);
                          }}
                        >
                          LOCATION SPECIFIC SEARCH
                        </button>
                      </Link>

                      <Link
                        to="/website-crawler"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white my-3"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            setReport("website-crawler");
                            setIsDropdownOpen(false);
                          }}
                        >
                          WEBSITE CRAWLER
                        </button>
                      </Link>
                      <Link
                        to="/search-livinglab"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group border border-solid border-green-200 hover:bg-green-600 hover:text-white my-3"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();

                            setReport("search-livinglab");
                            setIsDropdownOpen(false);
                          }}
                        >
                          SEARCH IN LIVINGLAB
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </aside>

      <div className={`flex-2 w-full mt-16`}>
        <FetchWebsiteCrawler />
      </div>
    </div>
  );
};

export default WebsiteCrawler;
