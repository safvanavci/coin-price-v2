import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import Headers from "../Headers";

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
      <Headers/>
      {datas?.map((data) => (
        <Link to={`/coin/${data.id}`} key={data.id} >
        <div
          
          className="grid xl:grid-cols-5 grid-cols-4 items-center h-20 border border-base-300 rounded-xl px-5 hover:bg-base-200"
          >
          <div className="flex items-center gap-3">
            <img src={data.image} className="w-8 h-8 rounded-full" />
            <div className="font-semibold">{data.symbol.toUpperCase()}</div>
            <div className="text-xs hidden lg:inline">{data.name}</div>
          </div>
          <div className="justify-self-center">
            ${data.current_price.toLocaleString()}
          </div>
          <div className="justify-self-center">
            {data.price_change_percentage_24h > 0 ? (
                <div className="text-green-600">
                +{data.price_change_percentage_24h.toFixed(2)}%
              </div>
            ) : (
                <div className="text-red-600">
                {data.price_change_percentage_24h.toFixed(2)}%
              </div>
            )}
          </div>
          <div className="justify-self-center hidden xl:inline">
            ${data.market_cap.toLocaleString()}{" "}
          </div>
          <div className="lg:w-40 w-24 justify-self-center">
            <Sparklines data={data.sparkline_in_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
        </div>
            </Link>
      ))}
    </div>
  );
}
