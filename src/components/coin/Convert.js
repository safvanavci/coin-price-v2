/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { converting, getPrice } from "../../redux/slices/ConvertSlice";

export default function Convert({ data }) {
  
  const dispatch = useDispatch();
  const num = useSelector((state) => state.convert.number);

  return (
    <div>
      <div className="text-2xl font-semibold">
        Convert USD to {data?.symbol.toUpperCase()}
      </div>
      <div className="form-control py-5 mb-6">
        <label className="input-group mb-3">
          <span>USD</span>
          <input
            onChange={(e) => {
              dispatch(getPrice(data?.market_data.current_price.usd));
              dispatch(converting(Number(e.target.value)));
            }}
            type="number"
            placeholder="0"
            className="input input-bordered"
          />
        </label>

        <label className="input-group">
          <span>{data?.symbol.toUpperCase()}</span>
          <input
            value={num}
            type="number"
            className="input input-bordered"
            readOnly
          />
        </label>
      </div>
    </div>
  );
}
