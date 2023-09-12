import axios from "axios";
import { useEffect, useState } from "react";

function ExpItem(props) {
  return (
    <>
      <div className="item">
        {/* {props.title ? (
          <h3 className="item-title uppercase">{props.title}</h3>
        ) : (
          <h3>Value Not Set</h3>
        )} */}
        <h3 className="item-title uppercase">{props.title}</h3>
        <p className="item-desc">{props.desc}</p>
        <p>{props.address}</p>
        <p className="item-focus">
          <i className="fa-solid fa-arrow-right"></i>
          {props.focus}
        </p>
        <span className="item-right">{props.right}</span>
      </div>
    </>
  );
}
export default ExpItem;
