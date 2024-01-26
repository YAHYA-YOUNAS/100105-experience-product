import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import SamanthaEvaluator from "./Components/SamanthaEvaluator";
import Report from "./Components/Report";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/samantha" element={<Home />} /> */}
          <Route
            path="/legalzard"
            element={
              <Report
                productName={"LEGALZARD"}
                reportName={"Legalzard"}
                productNumber={"UXLIVINGLAB003"}
              />
            }
          />
          <Route
            path="/website-crawler"
            element={
              <Report
                productName={"WEBSITE CRAWLER"}
                productNumber={"UXLIVINGLAB005"}
                reportName={"website-crawler"}
              />
            }
          />
          <Route
            path="/location-search"
            element={
              <Report
                productName={"LOCATION SPECIFIC SEARCH"}
                productNumber={"UXLIVINGLAB004"}
                reportName={"LocationSearch"}
              />
            }
          />
          <Route
            path="/world-price"
            element={
              <Report
                productName={"WORLD PRICE INDICATOR"}
                productNumber={"UXLIVINGLAB002"}
                reportName={"WorldPrice"}
              />
            }
          />
          <Route
            path="/search-livinglab"
            element={
              <Report
                productName={"SEARCH LIVING LAB"}
                productNumber={"UXLIVINGLAB006"}
                reportName={"search-livinglab"}
              />
            }
          />
          <Route
            path="/"
            element={
              <Report
                productName={"SAMANTA CONTENT EVALUATOR"}
                reportName={"SamanthaEvaluator"}
                productNumber={"UXLIVINGLAB001"}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
