import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchWithDropdown from "./Components/SearchWithDropdown";
import { sampleData } from "./sampleData";

function App() {
  return (
    <div>
      <h1>Search</h1>
      <SearchWithDropdown searchData={sampleData} />
    </div>
  );
}

export default App;
