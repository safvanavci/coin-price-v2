import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Stats from "../components/coin/Stats";
import Graphic from "../components/coin/Graphic";
import Convert from "../components/coin/Convert";

export default function Coin() {

  const params = useParams();
  const [data, setData] = useState();
  
  useEffect(() => {
    axios
      // eslint-disable-next-line no-undef
      .get( `${process.env.REACT_APP_API_KEY_COIN + params.id}?sparkline=true`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container mx-auto mt-7 px-5 lg:px-0">
      <div className="bg-base-300 w-fit px-2 py-1 rounded-full text-xs font-light">
        Rank #{data?.market_cap_rank}
      </div>
      <div className="flex items-center gap-1 py-3 mt-4">
        <img src={data?.image.large} className="h-10 w-10 rounded-full" />
        <div className="text-2xl font-bold ml-2">{data?.name}</div>
        <div className="text-xs">({data?.symbol.toUpperCase()} / USD)</div>
      </div>
      <div className="text-[30px] font-bold flex items-center gap-2">
        ${data?.market_data.current_price.usd.toLocaleString()}
        <div className="text-lg">
          {data?.market_data.price_change_percentage_1h_in_currency.usd > 0 ? (
            <div className="text-green-600 flex items-center">
              <AiOutlineCaretUp />
              {data?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                2
              )}
              %
            </div>
          ) : (
            <div className="text-red-600 flex items-center">
              <AiFillCaretDown />
              {data?.market_data.price_change_percentage_1h_in_currency.usd
                .toFixed(2)
                .substr(1)}
              %
            </div>
          )}
        </div>
      </div>

      <div className="lg:flex justify-between">
        <Graphic data={data} />
        <div className="md:flex justify-between lg:inline mx-auto md:mx-0 md:w-auto w-[350px]">
          <Convert data={data} />

          <div className="w-[350px]">
            <div className="text-2xl font-semibold mb-3">
              {data?.symbol.toUpperCase()} Price Statistics
            </div>
            <Stats data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
