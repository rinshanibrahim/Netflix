import React from "react";
import "./Tvsection.css";
import Horizontal from "../Horizontal/Horizontal";

const Tvsection = (props) => {
  return (
    <>
      <div className="tvsection">
        <div className={props.position ? 'wrappertv'  : 'wrapper2'}>
          <div className="tvsection-child1">
            <h2>{props.data.heading}</h2>
            <h4>
              {props.data.details}
            </h4>
          </div>
          <div className="tvsection-child2">
            <img src={props.data?.imageUrl} alt="Tv-section" />
          </div>
        </div>
      </div>
      <Horizontal/>
    </>
  );
};

export default Tvsection;
