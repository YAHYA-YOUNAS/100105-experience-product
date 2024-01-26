import ReportGraph from "./ReportGraph";
//eslint-disable-next-line
const Report = ({ productName, reportName, productNumber }) => {
  return (
    <ReportGraph
      productName={productName}
      reportName={reportName}
      productNumber={productNumber}
    />
  );
};

export default Report;
