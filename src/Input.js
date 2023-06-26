import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./redux/actions/index";
import { bindActionCreators } from "redux";

const Input = () => {
  const state = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div class="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React Redux</h4>

        <div class="quantity my-5 d-flex justify-content-center">
          <a
            className="quantity_minus btn btn-primary mx-3 p-3"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input form-control my-2 w-25"
            value={state}
          />
          <a
            className="quantity_minus btn btn-primary mx-3 p-3"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Input;
