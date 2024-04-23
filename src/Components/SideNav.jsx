import { useLocation } from "react-router-dom";
import React from "react";
import { LuAlignLeft, LuHome, LuX } from "react-icons/lu";
import NavItem from "./NavItem";

const basePath = "/100105-experience-product/";

const links = [
  {
    name: "SAMANTA CONTENT EVALUATOR",
    icon: <LuHome />,
    path: "report",
  },
  {
    name: "WORLD PRICE INDICATOR",
    icon: <LuHome />,
    path: "report/world-price",
  },
  {
    name: "LEGALZARD",
    icon: <LuHome />,
    path: "report/legalzard",
  },
  {
    name: "LOCATION SPECIFIC SEARCH",
    icon: <LuHome />,
    path: "report/location-search",
  },
  {
    name: "WEBSITE CRAWLER",
    icon: <LuHome />,
    path: "report/website-crawler",
  },
  {
    name: "SEARCH IN LIVINGLAB",
    icon: <LuHome />,
    path: "report/search-livinglab",
  },
];

const SideNav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const shouldDisplaySideNav = location.pathname !== `${basePath}` &&
    !location.pathname.includes(
      `${basePath}dowell-extractor`
    ) && !location.pathname.includes(`${basePath}website-crawler`)
    && !location.pathname.includes(`${basePath}samanta-content`)
    && !location.pathname.includes(`${basePath}open-source`);

  // { console.log(`yessssssss ${basePath}dowell-extractor ${location.pathname}`) }

  if (!shouldDisplaySideNav) {
    return null;
  }

  return (
    <>
      {
        shouldDisplaySideNav ?
          // true?
          <>
            <div className="flex justify-between">
              <button
                onClick={toggleSidebar}
                className="inline-flex z-40 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open sidebar</span>
                {isOpen ? <LuX size={24} /> : <LuAlignLeft size={24} />}
              </button>
            </div>

            <aside
              id="default-sidebar"
              className={`fixed top-0 left-0 z-20 w-64  h-screen transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}
            >
              {/* bg-gray-50 light:bg-gray-900 */}
              <div className={`h-full px-2 py-4 overflow-y-auto bg-gray-50 light:bg-gray-900`}>
                <div
                  href="#"
                  className="mb-7 flex justify-center items-center rounded-lg px-3 py-2 text-slate-900"
                >
                  <span className="text-base font-semibold">Report</span>
                </div>
                <a className="flex items-center ps-2.5 mb-10">
                  <img
                    src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
                    className="md:h-full w-20 mx-auto"
                    alt="Flowbite Logo"
                  />
                </a>

                <ul className="space-y-1 font-medium pl-0">
                  {links.map((link) => (
                    <li key={link?.path} className="">
                      <NavItem name={link?.name} path={link?.path} />
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </> : <></>
      }
    </>
  );
};

export default SideNav;
