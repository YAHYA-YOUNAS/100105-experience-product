import axios from "axios";
import React, { useState } from "react";

const Permutation = () => {
  const [input1, setInput1Value] = useState("");
  const [input2, setInput2Value] = useState("");
  const [isInput1Valid, setIsInput1Valid] = useState(true);
  const [isInput2Valid, setIsInput2Valid] = useState(true);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.example.com/data");
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", input1, input2);

    fetchData();
  };

  return (
    <div className="flex h-screen">
      <div className="w-80 bg-white h-screen flex-col justify-center items-center">
        <div className="mt-10 flex justify-center items-center w-full px-1 mb-20">
          <h1 className="text-3xl font-bold  ">Dowell Permutation</h1>
        </div>
        <div className=" w-78 bg-white flex-1 h-auto flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="relative cursor-pointer w-full">
              <input
                type="text"
                placeholder="Value n"
                name="n"
                value={input1}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^(0|[1-9]\d*)$/.test(value)) {
                    setInput1Value(value);
                    setIsInput1Valid(true);
                  } else {
                    setIsInput1Valid(false);
                    setInput1Value("");
                  }
                }}
                className="h-20 w-56 px-6 text-3xl font-mono text-black border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-50 transition duration-200"
              />
              <span className="text-3xl font-mono text-black text-opacity-80 bg-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                value n
              </span>
            </label>
            {!isInput1Valid && (
              <p className="warning-icon text-sm text-orange-600 font-mono ">
                ⚠️ Only whole number possible
              </p>
            )}

            <label className="relative cursor-pointer">
              <input
                type="text"
                placeholder="Value r"
                value={input2}
                name="r"
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^(0|[1-9]\d*)$/.test(value)) {
                    setInput2Value(value);
                    setIsInput2Valid(true);
                  } else {
                    setIsInput2Valid(false);
                    setInput2Value("");
                  }
                }}
                className="h-20 w-56 font-mono px-6 text-4xl text-black border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-50 transition duration-200"
              />
              <span className="text-4xl font-mono text-black text-opacity-80 bg-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                Value r
              </span>

              {!isInput2Valid && (
                <p className="warning-icon text-sm text-orange-600 font-mono mt-2">
                  ⚠️ Only whole number possible
                </p>
              )}
            </label>
            <div className="pt-10 px-2 flex justify-center items-center w-full">
              <button
                type="submit"
                className=" border-2 w-full  border-blue-400 text-neutral-700 hover:text-black rounded-lg hover:bg-blue-400  font-bold py-2 px-4 "
              >
                experience
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-grow p-8 border-l-2 ">{input1}</div>
    </div>
  );
};

export default Permutation;
