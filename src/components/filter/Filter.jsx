import React from "react";
import "./Filter.scss";

function Filter() {
  return (
    <div>
      <input type="text" placeholder="Filter..." className="filter" />
      <div className="output"></div> {/*This is where the output from the filter will display*/}
    </div>
  );
}

export default Filter;
