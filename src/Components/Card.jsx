import { Link } from "react-router-dom";
//eslint-disable-next-line
const Card = ({ productName, productNumber }) => {
  return (
    <div className=" ">
      <div className="flex  justify-between w-[90%] sm:w-[90%] py-2">
        <p className="md:text-md   justify-center text-sm font-bold flex  ">
          {" "}
          <Link to={`/product/${encodeURIComponent(productNumber)}`}>
            <button className=" mx-4 md:mx-6 text-lg sm:text-2xl ">
              {productName}
            </button>
          </Link>{" "}
          <span className="  text-[#68779E] mt-[8px]">
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
          </span>{" "}
          <span className="text-[#68779E]  mt-1 ml-2"> | </span>
          <span className=" text-lg sm:text-2xl font-bold  ml-2 ">
            {" "}
            {productNumber}{" "}
          </span>
        </p>
        {/* <div className="mr-8 text-2xl text-[#df484a]">{direction}</div> */}
      </div>

      {/* <div className="border border-gray-200 h-px mt-2"></div> */}
    </div>
  );
};

export default Card;
