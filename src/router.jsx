import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Report from "./Components/Report";
import Legalzard from "./pages/legalzard.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const basePath = "/100105-experience-product/";
const Router = createBrowserRouter([
  {
    path: basePath,
    element: <App />,
    children: [
      {
        path: basePath,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"SAMANTA CONTENT EVALUATOR"}
            reportName={"SamanthaEvaluator"}
            productNumber={"UXLIVINGLAB001"}
          />
        ),
      },
      {
        path: `${basePath}/legalzard`,
        errorElement: <ErrorPage />,
        element: <Legalzard />,
      },
      {
        path: `${basePath}/website-crawler`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"WEBSITE CRAWLER"}
            productNumber={"UXLIVINGLAB005"}
            reportName={"website-crawler"}
          />
        ),
      },
      {
        path: `${basePath}/location-search`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"LOCATION SPECIFIC SEARCH"}
            productNumber={"UXLIVINGLAB004"}
            reportName={"LocationSearch"}
          />
        ),
      },
      {
        path: `${basePath}/world-price`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"WORLD PRICE INDICATOR"}
            productNumber={"UXLIVINGLAB002"}
            reportName={"WorldPrice"}
          />
        ),
      },
      {
        path: `${basePath}/search-livinglab`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"SEARCH LIVING LAB"}
            productNumber={"UXLIVINGLAB006"}
            reportName={"search-livinglab"}
          />
        ),
      },
    ],
  },
]);

export default Router;
