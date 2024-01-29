//eslint-disable-next-line
const Card = ({ productName }) => {
  return (
    <div className="flex justify-between">
      <p className="md:text-md justify-center text-sm font-bold flex">
        <button className="text-lg sm:text-xl ">{productName}</button>
      </p>
    </div>
  );
};

export default Card;
