import React from "react";
import "./CardSection.css";

const CardSection = ({ data }) => {
  return (
    <div>
      <div className="card-section-parent">
        <div className="card-section-heading">
          <h3>{data[0].heading}</h3>
        </div>
        <div className="card-section-wrapper">
          {data?.map((obj) => {
            return (
              <div className="card-section">
                <img src={obj.imageUrl}  alt="logo" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
