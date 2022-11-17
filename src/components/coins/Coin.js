import React from "react";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
// eslint-disable-next-line react/prop-types
export default function Coin({ currentItems,search }) {
  return (
    <>
      {currentItems &&
        // eslint-disable-next-line react/prop-types
        currentItems.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
          <Link to={`/coin/${item.id}`} key={item.id}>
            <div className="grid xl:grid-cols-5 grid-cols-4 items-center h-20 border border-base-300 rounded-xl px-5 hover:bg-base-200">
              <div className="flex items-center gap-3">
                <img src={item.image} className="w-8 h-8 rounded-full" />
                <div className="font-semibold">{item.symbol.toUpperCase()}</div>
                <div className="text-xs hidden lg:inline">{item.name}</div>
              </div>
              <div className="justify-self-center">
                ${item.current_price.toLocaleString()}
              </div>
              <div className="justify-self-center">
                {item.price_change_percentage_24h > 0 ? (
                  <div className="text-green-600">
                    +{item.price_change_percentage_24h.toFixed(2)}%
                  </div>
                ) : (
                  <div className="text-red-600">
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </div>
                )}
              </div>
              <div className="justify-self-center hidden xl:inline">
                ${item.market_cap.toLocaleString()}{" "}
              </div>
              <div className="lg:w-40 w-24 justify-self-center">
                <Sparklines data={item.sparkline_in_7d.price}>
                  <SparklinesLine color="teal" />
                </Sparklines>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}
