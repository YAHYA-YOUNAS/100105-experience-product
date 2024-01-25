import { useState, useRef, useEffect } from "react";
import axios from "axios";
//import Card from "./Card";
import Card from "../Card";
import GraphChart from "../GraphChart";
import { ChevronDown } from "react-feather";
const FetchWorldPriceIndicator = () => {
  const productData = {
    productName: "WORLD PRICE INDICATOR",
    productNumber: "UXLIVINGLAB002",
  };

  const [data, setData] = useState(null); // Initialize data as null
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading as true

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [day, setDay] = useState("seven_days");
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

  useEffect(() => {
    const fetchData = async () => {
      const payload = {
        date_type: day,
        date: "10-01-2024",
      };

      try {
        const response = await axios.post(
          "https://100105.pythonanywhere.com/api/v3/experience_report_services/?type=user_experiences_count",
          { ...payload, product_number: productData.productNumber }
        );

        const responseData = await response.data;

        const graphData = {
          productName: productData.productName,
          labels: [0, ...responseData.present_dates.map((data) => data.date)],
          datasets: [
            {
              label: productData.productName,
              data: [
                0,
                ...responseData.present_dates.map((data) => data.count),
              ],
              fill: false,
              backgroundColor: "rgba(0, 0, 255, 0.5)",
              borderColor: "rgba(39, 135, 95, 0.5)",
              pointBackgroundColor: "rgba(39, 135, 95, 0.5)",
            },
          ],
        };

        console.log("SAMANTA CONTENT EVALUATOR", graphData);

        setData(graphData); // Update the state with the fetched data
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false whether fetching succeeds or fails
      }
    };

    fetchData();
    return () => {
      fetchData();
    };
  }, [day, productData.productName, productData.productNumber]);

  useEffect(() => {
    console.log("data", data); // Log the data state when it changes
  }, [data]);

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Set this property to true to always start the y-axis from 0
        suggestedMax: 60,
        stepSize: 10,
      },
    },
  };

  return (
    <div className="bg-white h-full w-full">
      <div className=" w-[100%]  font-bold my-4 md:block sm:hidden">
        <div className="rounded-lg w-[100%] ">
          <Card
            productName={productData.productName}
            productNumber={productData.productNumber}
          />
        </div>
      </div>
      <div className=" my-3 bg-white md:flex md:flex-row md:gap-5 sm:items-center sm:flex sm:flex-col-reverse">
        {isLoading ? (
          "Loading ..."
        ) : (
          <ul className=" w-4/5   px-0 ">
            <li
              style={{
                boxShadow:
                  "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              }}
              className="my-2 py-1 "
            >
              <div className="mt-2">
                <GraphChart data={data} options={options} />
              </div>
            </li>
            <li className="flex justify-center font-thin font-serif items-center w-full mx-auto h-10 bg-white text-green-700 text-xl rounded-md border border-solid border-1 border-green-300 hover:border-green-400 mt-5">
              Count:
              {data?.datasets[0]?.data?.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0)}
            </li>
          </ul>
        )}
        <div
          className="relative inline-block h-11 md:ml-0 sm:self-start sm:ml-16"
          ref={dropdownRef}
        >
          <button
            onClick={toggleDropdown}
            className=" flex border border-solid border-green-500 text-green-600 hover:border-green-900 px-4 py-2 rounded-lg text-md focus:outline-none"
          >
            {day === "seven_days" && <span>7 days</span>}
            {day === "one_day" && <span>1 day</span>}
            {day === "thirty_day" && <span>30 days</span>}
            <span className="ml-1">
              <ChevronDown />
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white text-gray-800 border rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-green-50">
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      setDay("seven_days");
                      setIsDropdownOpen(false);
                    }}
                  >
                    7 days
                  </button>
                </li>
                <li className="px-4 py-2 hover:bg-green-50">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setDay("thirty_day");
                      setIsDropdownOpen(false);
                    }}
                  >
                    30 days
                  </button>
                </li>
                <li className="px-4 py-2 hover:bg-green-50">
                  <button
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setDay("one_day");
                      setIsDropdownOpen(false);
                    }}
                  >
                    1 day
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchWorldPriceIndicator;
