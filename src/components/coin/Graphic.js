/* eslint-disable react/prop-types */
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Info from "./Info";
import Prices from "./Prices";

export default function Graphic({ data }) {
  return (
    <div className="lg:w-2/3 py-5 md:py-24 text-xs">
      <div>
        24h High
        <span className="ml-2 font-bold">
          ${data?.market_data.high_24h.usd.toLocaleString()}
        </span>
      </div>
      <Sparklines data={data?.market_data.sparkline_7d.price}>
        <SparklinesLine color="teal" />
      </Sparklines>
      <div>
        24h Low
        <span className="ml-2 font-bold">
          ${data?.market_data.low_24h.usd.toLocaleString()}
        </span>
      </div>
      <div className="md:py-20 py-8">
        <Prices data={data} />
      </div>
      <Info data={data} />
    </div>
  );
}
