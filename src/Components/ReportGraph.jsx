/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import GraphChart from "./GraphChart";
import { LuChevronDown, LuExternalLink } from "react-icons/lu";
import { format } from "date-fns";
import useReportCount from "./Hooks/useReportCount";
import Spinner from "./Spinner";

//eslint-disable-next-line
const ReportGraph = ({
  productName,
  productNumber,
  productUrl,
}) => {
  const [data, setData] = useState(null); // Initialize data as null
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading as true
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [day, setDay] = useState("one_month");

  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [countOneDay] = useReportCount(date, "one_day", productNumber);
  const [countSevenDay] = useReportCount(date, "seven_days", productNumber);
  const [countThirtyDay] = useReportCount(date, "one_month", productNumber);

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
      const formattedDate = format(date, "dd-MM-yyyy"); // Format the date as dd-mm-yyyy

      const payload = {
        time_period: day,
        date: formattedDate,
      };

      try {
        const response = await axios.post(
          "https://100105.pythonanywhere.com/api/v3/experience_report_services/?type=user_experiences_count",
          { ...payload, product_number: productNumber }
        );

        const responseData = await response.data.response;

        console.log("Response", responseData);

        const graphData = {
          productName: productName,
          labels: [0, ...responseData.map((data) => data.date)],
          datasets: [
            {
              label: productName,
              data: [0, ...responseData.map((data) => data.count)],
              fill: false,
              backgroundColor: "rgba(0, 0, 255, 0.5)",
              borderColor: "rgba(39, 135, 95, 0.5)",
              pointBackgroundColor: "rgba(39, 135, 95, 0.5)",
            },
          ],
        };

        //console.log("SAMANTA CONTENT EVALUATOR", graphData);

        setData(graphData); // Update the state with the fetched data
      } catch (error) {
        setError({ isError: true, message: error?.data?.message });

        console.error("Error occurred while fetching data:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false whether fetching succeeds or fails
      }
    };

    fetchData();
  }, [day, date, productName, productNumber]);

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
  console.log("product name=", productName);
  console.log("product number=", productNumber);
  return (
    <div>
      {/* {!error &&  */}
      <div>
        <Card productName={productName} />
        {/* flex items-center justify-left rounded */}

        <input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          type="date"
          className="text-white mr-1 bg-[#005734] hover:bg-[#005734]-800 focus:outline-none font-sm rounded-lg text-sm px-5 py-1 text-center inline-flex items-center"
        />
        <div
          className="relative inline-block h-11 md:ml-0 sm:self-start mr-1"
          ref={dropdownRef}
        >
          <button
            onClick={toggleDropdown}
            className="text-white bg-[#005734] hover:bg-[#005734]-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center"
          >
            {day === "one_day" && <span>1 day</span>}
            {day === "seven_days" && <span>7 days</span>}
            {day === "one_month" && <span>30 days</span>}
            <span className="ml-1">
              <LuChevronDown />
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white text-gray-800 border rounded-md shadow-lg">
              <ul className="py-2">
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
                      setDay("one_month");
                      setIsDropdownOpen(false);
                    }}
                  >
                    30 days
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <a
          href={productUrl}
          className="cursor-pointer text-white bg-[#005734] hover:bg-[#005734]-800 focus:outline-none font-sm rounded-lg text-sm px-5 py-1 text-center inline-flex items-center"
        >
          Visit
          <span className="ml-1">
            <LuExternalLink />
          </span>
        </a>
      </div>

      <div className="my-3 w-full md:flex md:flex-row md:gap-5 sm:items-center sm:flex sm:flex-col-reverse">
        {isLoading ? (
          <Spinner />
        ) : (
          <ul className="w-full">
            <li
              style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderRadius: "10px",
              }}
              className="my-2 py-5"
            >
              <GraphChart data={data} options={options} />
            </li>
            <li>
              <p className="border-b-2 border-b-green-100 text-[#005734] text-lg text-center rounded-md p-1">
                Report with data from past month
              </p>
            </li>

            <li className="flex md:flex-row justify-evenly gap-5 sm:gap-2 font-thin font-serif items-center w-full mx-auto bg-white text-green-700 text-xl rounded-md border border-solid border-1 border-green-100 mt-3 h-18 py-3">
              <div className="mx-4 text-center w-auto p-2">
                <p className="font-semibold md:text-3xl sm:text-xl">
                  {countOneDay}{" "}
                  <span className="text-sm text-gray-500">Count</span>
                </p>
                <p className="font-thin text-gray-400 mt-2 text-sm">
                  last one day
                </p>
              </div>
              <div className="mx-4 text-center w-auto p-3 border-l-2 border-l-gray-100">
                <p className="font-semibold md:text-4xl sm:text-xl">
                  {countSevenDay}{" "}
                  <span className="text-sm text-gray-500">Count</span>
                </p>
                <p className="font-thin text-gray-400 mt-2 text-sm">
                  last seven days
                </p>
              </div>

              <div className="mx-4 text-center w-auto p-3 border-l-2 border-l-gray-100">
                <p className="font-semibold md:text-4xl sm:text-xl">
                  {countThirtyDay}{" "}
                  <span className="text-sm text-gray-500">Count</span>
                </p>
                <p className="font-thin text-gray-400 mt-2 text-sm">
                  last thirty days
                </p>
              </div>
            </li>
            
            <li className="flex justify-center my-3 gap-3 border-b-2 border-b-green-100 text-[#176546] text-lg text-center rounded-md p-1">
              <p>Do you have coupon?</p>
              <button className="bg-custom-color hover:bg-[#176546] text-white rounded-md w-16">
                Yes
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReportGraph;
