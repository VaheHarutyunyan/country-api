import React from "react";
import ReactSelect from "react-select";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="row">
        <div className="col">
          <input type="search" placeholder="Search" />
        </div>
        <div className="col">
          <ReactSelect placeholder="Choose country" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
