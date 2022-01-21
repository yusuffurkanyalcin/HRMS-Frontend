import React from "react";
import Categories from "./Categories";
import SearchJob from "./SearchJob";

export default function Dash() {
  return (
    <div>
      <SearchJob />
      <div style={{marginTop:"50px"}}></div>
      <Categories/>
    </div>
  );
}
