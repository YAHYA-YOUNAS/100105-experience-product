import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
function useReportCount(date, day, productNumber) {
  const [count, setCount] = useState(0);
  const [errorc, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = format(new Date(date), "dd-MM-yyyy"); // Format the date as dd-mm-yyyy
      // console.log("format date", formattedDate);
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
        console.log("responsedata from hooks", responseData);
        const countData = responseData
          .map((data) => data.count)
          .reduce((accum, curr) => {
            return accum + curr;
          }, 0);
        setCount(countData); // Update the state with the fetched data
      } catch (error) {
        setError({ isError: true, message: error?.data?.message });
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, [day, date, productNumber]);
  return [count, errorc];
}

export default useReportCount;
