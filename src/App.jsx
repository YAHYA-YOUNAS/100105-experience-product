import { Outlet } from "react-router-dom";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
