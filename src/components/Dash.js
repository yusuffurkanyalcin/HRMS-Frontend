import React from "react";
import Filters from "./Filters";
import SearchJob from "./SearchJob";

export default function Dash() {
  return (
    <div className="container">
      <SearchJob />
      <div style={{ marginTop: "50px" }}></div>
      <div className="row">
        <div className="col-md-2">
          <Filters />
        </div>
        <div className="col-md-10"></div>
      </div>
    </div>
  );
}
