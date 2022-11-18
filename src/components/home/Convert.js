/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPrice,
  converting,
  resetNumber,
} from "../../redux/slices/ConvertSlice";

export default function Convert({ datas }) {
  const [coinName, setCoinName] = useState("bitcoin");
  // eslint-disable-next-line no-undef
  const url = process.env.REACT_APP_API_KEY_COIN + coinName;
  const dispatch = useDispatch();
  const number = useSelector((state) => state.convert.number);

  useEffect(() => {
    axios
      .get(url)
      .then((res) =>
        dispatch(getPrice(res.data.market_data.current_price.usd))
      );
  }, [url]);

  const getCoinName = (e) => {
    setCoinName(e.nativeEvent.srcElement.selectedOptions[0].id);
    dispatch(resetNumber());
    document.getElementsByClassName("input")[1].value = "";
  };
  const convert = (e) => {
    dispatch(converting(e.target.value));
  };

  return (
    <>
      <div className=" font-bold mb-4 text-lg">
        Convert USD to {coinName[0].toUpperCase() + coinName.substring(1)}
      </div>
      <div className="form-control mb-5">
        <label className="input-group">
          <span className="w-[143px]">USD</span>
          <input
            type="number"
            onChange={(e) => convert(e)}
            placeholder="0"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="input-group">
          <span>
            <select
              className="bg-inherit w-fit outline-none"
              onChange={(e) => getCoinName(e)}
            >
              {datas?.map((data) => (
                <option key={data.id} id={data.id}>
                  {data.symbol.toUpperCase()}
                </option>
              ))}
            </select>
          </span>
          <input
            type="number"
            value={number}
            placeholder="0"
            className="input input-bordered w-full"
            readOnly
          />
        </label>
      </div>
    </>
  );
}
