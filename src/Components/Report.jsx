import ReportGraph from "./ReportGraph";
//eslint-disable-next-line
const Report = ({ productName, reportName, productNumber, productUrl}) => {
  return (
    <ReportGraph
      productName={productName}
      productUrl={productUrl}
      reportName={reportName}
      productNumber={productNumber}
    />
  );
};

export default Report;
