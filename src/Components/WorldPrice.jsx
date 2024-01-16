import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import GraphChart from "./GraphChart";


const WorldPrice = () => {
  const productData = {
    productName: "WORLD PRICE INDICATOR",
    productNumber: "UXLIVINGLAB002",
  };

  const [data, setData] = useState(null); // Initialize data as null

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
    <div className="bg-[#F4F4F4] h-full">
      <div className="flex justify-center overflow-hidden h-[150px] px-28 sm:px-28 bg-[#131A26]  py-3">
        <img
          className="bg-[#131A26]"
          src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
          alt=""
        />
      </div>
      <h1 className="pl-4 sm:ml-40 text-3xl font-bold my-4">Products List</h1>
      <div className="container my-4 mx-auto overflow-hidden bg-white">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <li
            style={{
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            }}
            className="my-2 py-1 mx-3"
          >
            <div className="rounded-lg">
              <Card
                productName={productData.productName}
                productNumber={productData.productNumber}
              />
            </div>
            <div className="mt-4">
              <GraphChart data={data} options={options} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorldPrice;
