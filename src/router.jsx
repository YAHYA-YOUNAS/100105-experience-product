
import { createHashRouter } from "react-router-dom";
import App from './App.jsx'
import Report from "./Components/Report";


const basePath =  '/100105-experience-product'
const Router = createHashRouter([{
    path: basePath,
    element: <App />,
    children: [
        {
            path: basePath,
            element: <Report
                        productName={"SAMANTA CONTENT EVALUATOR"}
                        reportName={"SamanthaEvaluator"}
                        productNumber={"UXLIVINGLAB001"}
                    />,
        },
        {
            path: `${basePath}/legalzard`,
            element: <Report
                        productName={"LEGALZARD"}
                        reportName={"Legalzard"}
                        productNumber={"UXLIVINGLAB003"}
                    />,
        },
        {
            path: `${basePath}/website-crawler`,
            element: <Report
                        productName={"WEBSITE CRAWLER"}
                        productNumber={"UXLIVINGLAB005"}
                        reportName={"website-crawler"}
                    />,
        },
        {
            path: `${basePath}/location-search`,
            element: <Report
                        productName={"LOCATION SPECIFIC SEARCH"}
                        productNumber={"UXLIVINGLAB004"}
                        reportName={"LocationSearch"}
                    />,
        },
        {
            path: `${basePath}/world-price`,
            element: <Report
                        productName={"WORLD PRICE INDICATOR"}
                        productNumber={"UXLIVINGLAB002"}
                        reportName={"WorldPrice"}
                    />,
        },
        {
            path: `${basePath}/search-livinglab`,
            element: <Report
                        productName={"SEARCH LIVING LAB"}
                        productNumber={"UXLIVINGLAB006"}
                        reportName={"search-livinglab"}
                    />,
        },
    ]
}])


export default Router

