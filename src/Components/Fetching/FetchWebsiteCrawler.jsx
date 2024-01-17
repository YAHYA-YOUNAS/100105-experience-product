import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import GraphChart from "../GraphChart";

const FetchWebsiteCrawler = () => {
  const productData = {
    productName: "WEBSITE CRAWLER",
    productNumber: "UXLIVINGLAB005",
  };

  const [data, setData] = useState(null); // Initialize data as null
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading as true

  useEffect(() => {
    const fetchData = async () => {
      const payload = {
        date_type: "seven_days",
        date: "11-01-2024",
      };

      try {
        const response = await axios.post(
          "https://100105.pythonanywhere.com/api/v3/experience_report_services/?type=user_experiences_count",
          { ...payload, product_number: productData.productNumber }
        );

        const responseData = response.data;

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
              borderColor: "rgba(0, 0, 255, 0.5)",
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
  }, []);

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
    <div className="bg-white h-full">
      <div className="flex justify-center overflow-hidden h-[10rem]  bg-[#131A26] py-3">
        <img
          className="bg-[#131A26]"
          src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
          alt=""
        />
      </div>  

      <div className="pl-4 md:ml-[30rem] w-[80%]  font-bold my-4">
        <div className="rounded-lg  ">
          <Card
            productName={productData.productName}
            productNumber={productData.productNumber}
          />
        </div>
      </div>
      <div className="container my-4 ml-20 md:ml-[30rem] bg-white">
        {isLoading ? (
          "Loading ..."
        ) : (
          <ul className=" w-4/5 container px-0 ">
            <li
              style={{
                boxShadow:
                  "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              }}
              className="my-2 py-1 "
            >
              <div className="mt-4">
                <GraphChart data={data} options={options} />
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FetchWebsiteCrawler;
