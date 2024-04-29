import { useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import "./styles.css"

const OpenSource = ()=>{
  const [tryAgain, setTryAgain] = useState(0);

  const handleTryAgainClick = (event) => {
    event.preventDefault();
    setTryAgain(key => key + 1);
  }
  return (
    <div id="main" className="text-sm w-full md:w-8/12 lg:w-6/12 sm:text-md md:text-base mx-auto p-4 mt-2 rounded-md border border-gray-400 md:border-none">
      <Header classes="w-36 mx-auto"/>
      <Main key={tryAgain} handleTryAgainClick={handleTryAgainClick}/>
    </div>
  )
}

export default OpenSource;