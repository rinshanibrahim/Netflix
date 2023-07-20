import React from "react";
import "./CardSection.css";

const CardSection = ({ data }) => {
  return (
    <div>
      <div className="card-section-parent" id="Card">
        <div className="card-section-heading">
          <h3>{data[0].heading}</h3>
        </div>
        <div className="card-section-wrapper">
          {data?.map((obj, index) => {
            return (
              <React.Fragment key={index}>
                <div className="card-section">
                  <img src={obj.imageUrl} alt="logo" />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
