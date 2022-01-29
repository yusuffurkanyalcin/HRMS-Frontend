import React from "react";
import DateFilter from "./Filters/DateFilter";
import LocationFilter from "./Filters/LocationFilter";

export default function Filters() {
  return (
    <div className="container" style={{minWidth:"188px"}}>
      <LocationFilter />
      <DateFilter/>
    </div>
  );
}
