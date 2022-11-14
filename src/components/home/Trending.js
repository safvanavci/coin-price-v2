import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Trending() {

  const [datas, setDatas] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    axios.get(process.env.REACT_APP_API_KEY_TRENDING)
    .then((res) => setDatas(res.data.coins))
  }, []);

  return (
    <div className="flex justify-between w-[1500px]">
        {console.log(datas)}
      {
        datas?.map(data =>
            <div key={data.item.coin_id} className="flex flex-col gap-6 bg-base-200 w-40 h-48 px-3 py-6 rounded-md font-bold text-xs shadow-lg hover:shadow-none">
                <div className="flex">
                    <img src={data.item.large} className="w-10 h-10" />
                    <div className="ml-3">
                        <h1 className="h-4 overflow-hidden text-ellipsis">
                            {data.item.name}
                        </h1>
                        <p className=" font-extrabold text-sm"> 
                            {data.item.symbol}
                        </p>

                    </div>
                </div>
                <div className="w-full text-center font-extrabold ">
                    <h1>Market cap rank</h1>
                    <p>{data.item.market_cap_rank}</p>
                </div>
                <div className="flex justify-around">
                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className="w-4" />
                    <p>{data.item.price_btc.toFixed(6)}</p>
                </div>
            </div>
        )
      }
    </div>
  );
}
