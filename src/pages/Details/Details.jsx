import React from "react";
import Types from "./Types/Types";
import DetailSidePannel from "./DetailSidePannel/DetailSidePannel";
import ListTypes from "./ListTypes/ListTypes";

const Details = () => {
  return (
    <div>
      <h3>Air Compressors and Treatment Equipment</h3>
      <Types />

      <div className="row">
        <div className="col-lg-4">
          <DetailSidePannel />
        </div>
        <div className="col-lg-8">
          <ListTypes />
        </div>
      </div>
    </div>
  );
};

export default Details;
