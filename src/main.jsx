/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import './index.css'
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Report from "./Components/Report";
import ErrorPage from "./Components/ErrorPage.jsx";
import Legalzard from "./pages/Legalzard.jsx";



const basePath = "/100105-experience-product/";
const router = createBrowserRouter([
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
            productUrl={"https://www.uxlivinglab.org/products/samanta_content_evaluator/"}
            productNumber={"UXLIVINGLAB001"}
          />
        ),
      },
      {
        path: `${basePath}/legalzard`,
        errorElement: <ErrorPage />,
        element: <Legalzard />
      },
      {
        path: `${basePath}/website-crawler`,
        errorElement: <ErrorPage />,
        element: (
          <Report
            productName={"WEBSITE CRAWLER"}
            productNumber={"UXLIVINGLAB005"}
            productUrl={"https://ll05-ai-dowell.github.io/dowellwebsitecrawler/"}
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
            productUrl={"https://www.uxlivinglab.org/products/world-price-indicator/"}
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
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)