import ProductDetails from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import SamanthaEvaluator from "./Components/SamanthaEvaluator";
import Legalzard from "./Components/Legalzard";
import WebsiteCrawler from "./Components/WebsiteCrawler";
import LocationSearch from "./Components/LocationSearch";
import WorldPrice from "./Components/WorldPrice";
import SearchLivingLab from "./Components/SearchLivingLab";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:productNumber" element={<ProductDetails />} />
          <Route path="/samantha" element={<Home />} />
          <Route path="/legalzard" element={<Legalzard />} />
          <Route path="/website-crawler" element={<WebsiteCrawler />} />
          <Route path="/location-search" element={<LocationSearch />} />
          <Route path="/world-price" element={<WorldPrice />} />
          <Route path="/search-livinglab" element={<SearchLivingLab />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
