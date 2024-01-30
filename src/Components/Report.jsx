import ReportGraph from "./ReportGraph";
//eslint-disable-next-line
const Report = ({ productName, productNumber, productUrl}) => {
  return (
    <ReportGraph
      productName={productName}
      productUrl={productUrl}
      productNumber={productNumber}
    />
  );
};

export default Report;
