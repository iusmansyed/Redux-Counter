import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "./State/index";
const Add = () => {
  const Dispatch = useDispatch()
  return (
    <div>
      <h2>Redux Bank</h2>
      
      <button type="button" className="btn btn-primary" onClick={()=>{Dispatch(ActionCreators.increment(100))}}>Increment +</button>
{` `}
      <button type="button" className="btn btn-primary" onClick={()=>{Dispatch(ActionCreators.decrement(100))}}>Decrement -</button>
    </div>
  );
};

export default Add;
