import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Report from "./Components/Report";
import ErrorPage from "./Components/ErrorPage.jsx";
import EmailExtractor from "./email-extractor/100107-DowellEmailExtractor/src/App.jsx";
import WebsiteCrawler from "./website-crawler/dowellwebsitecrawler/src/App.jsx";
import DowellPermutaion from "./dowell-permutation/src/App.jsx";
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
            productUrl={
              "https://www.uxlivinglab.org/products/samanta_content_evaluator/"
            }
            productNumber={"UXLIVINGLAB001"}
          />
        ),
      },
      {
        path: `${basePath}/legalzard`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"LEGALZARD"}
            productUrl={"https://www.legalzard.com/"}
            productNumber={"UXLIVINGLAB003"}
          />
        ),
      },
      {
        path: `${basePath}/website-crawler`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"WEBSITE CRAWLER"}
            productNumber={"UXLIVINGLAB005"}
            productUrl={
              "https://ll05-ai-dowell.github.io/dowellwebsitecrawler/"
            }
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
            productUrl={"https://geopositioning.uxlivinglab.online/api/"}
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
            productUrl={
              "https://www.uxlivinglab.org/products/world-price-indicator/"
            }
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
            productUrl={"https://search-livinglab.flutterflow.app/"}
          />
        ),
      },
      {
        path: `${basePath}/DowellEmailExtractor`,
        errorElement: <ErrorPage />,
        element: <EmailExtractor></EmailExtractor>,
      },
      {
        path: `${basePath}/DowellWebsiteCrawler`,
        errorElement: <ErrorPage />,
        element: <WebsiteCrawler></WebsiteCrawler>,
      },
      {
        path: `${basePath}/DowellPermutation`,
        errorElement: <ErrorPage />,
        element: <DowellPermutaion></DowellPermutaion>,
      },

      {
        path: `${basePath}/contact-us`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"CONTACT US"}
            productNumber={"UXLIVINGLAB007"}
            productUrl={"https://search-livinglab.flutterflow.app/"}
          />
        ),
      },
    ],
  },
]);

export default Router;
