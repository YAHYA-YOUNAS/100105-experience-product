import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Report from "./Components/Report";
import ErrorPage from "./Components/ErrorPage.jsx";
import EmailExtractor from "./pages/emailExtractor/EmailExtractor.jsx";
import Crawler from "./pages/crawler/Crawler.jsx";
import AuthorizationScreen from "./pages/AuthorizationScreen/AuthorizationScreen.jsx";
import OpenSource from "./pages/OpenSource/OpenSource.jsx";
import SamantaContent from "./pages/SamantaContent/SamantaContent.jsx";

const basePath = "/100105-experience-product/";

const Router = createBrowserRouter([
  {
    path: basePath,
    element: <App />,
    children: [
      {
        path: `${basePath}dowell-extractor`,
        errorElement: <ErrorPage />,
        element: <EmailExtractor />,
      },
      {
        path: `${basePath}website-crawler`,
        errorElement: <ErrorPage />,
        element: <Crawler />,
      },
      {
        path: `${basePath}samanta-content`,
        errorElement: <ErrorPage />,
        element: <SamantaContent />,
      },
      {
        path: `${basePath}open-source`,
        errorElement: <ErrorPage />,
        element: <OpenSource />,
      },
      {
        path: basePath,
        errorElement: <ErrorPage />,
        element: (
          <AuthorizationScreen />
        ),
      },
      {
        path: `${basePath}/report`,
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
        path: `${basePath}/report/legalzard`,
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
        path: `${basePath}/report/website-crawler`,
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
        path: `${basePath}/report/location-search`,
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
        path: `${basePath}/report/world-price`,
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
        path: `${basePath}/report/search-livinglab`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"SEARCH LIVING LAB"}
            productNumber={"UXLIVINGLAB006"}
            productUrl={"https://search-livinglab.flutterflow.app/"}
          />
        ),
      },
    ],
  },
]);

export default Router;
