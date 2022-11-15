import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function Coins() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    axios
      // eslint-disable-next-line no-undef
      .get(process.env.REACT_APP_API_KEY)
      .then((res) => setDatas(res.data));
  }, []);

  return (
    <div className="flex flex-col gap-5 lg:text-base text-xs">
      <div className="grid xl:grid-cols-5 grid-cols-4 items-center  font-extrabold">
        <h1 className="justify-self-center">
            Name
        </h1>
        <h1 className="justify-self-center">
            Price
        </h1>
        <h1 className="justify-self-center">
            24h Change
        </h1>
        <h1 className="justify-self-center hidden xl:inline">
            Market Cap
        </h1>
        <h1 className="justify-self-center">
            Last 7 Days
        </h1>
      </div>
      {datas?.map((data) => (
        <div
          key={data.id}
          className="grid xl:grid-cols-5 grid-cols-4 items-center h-20 border border-base-300 rounded-xl px-5 hover:bg-base-200"
        >
          <div className="flex items-center gap-3">
            <img src={data.image} className="w-8 h-8 rounded-full" />
            <p className="font-semibold">{data.symbol.toUpperCase()}</p>
            <p className="text-xs hidden lg:inline">{data.name}</p>
          </div>
          <p className="justify-self-center">
            ${data.current_price.toLocaleString()}
          </p>
          <p className="justify-self-center">
            {data.price_change_percentage_24h > 0 ? (
              <p className="text-green-600">
                +{data.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className="text-red-600">
                {data.price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
          </p>
          <p className="justify-self-center hidden xl:inline">
            ${data.market_cap.toLocaleString()}{" "}
          </p>
          <div className="lg:w-40 w-24 justify-self-center">
            <Sparklines data={data.sparkline_in_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
        </div>
      ))}
    </div>
  );
}
