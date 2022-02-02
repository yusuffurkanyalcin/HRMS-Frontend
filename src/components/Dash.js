import React from "react";
import { Routes ,Route} from "react-router-dom";
import Filters from "./Filters";
import JobAdvertisements from "./JobAdvertisements";
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
        <div className="col-md-10">
          <div className="container">
          <Routes>
            <Route path="/" element={<JobAdvertisements/>} />
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
