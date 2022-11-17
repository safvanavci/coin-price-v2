/* eslint-disable react/prop-types */
import React from "react";

export default function Prices({ data }) {
  return (
    <div className="stats shadow w-full">
      <div className="stat">
        <div className="stat-title">USD</div>
        <div className="stat-value !text-lg">
          {data?.market_data.current_price.usd.toLocaleString()}
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">EUR</div>
        <div className="stat-value !text-lg">
          {data?.market_data.current_price.eur.toLocaleString()}
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">TRY</div>
        <div className="stat-value !text-lg">
          {data?.market_data.current_price.try.toLocaleString()}
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">BTC</div>
        <div className="stat-value !text-lg">
          {data?.market_data.current_price.btc}
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">ETH</div>
        <div className="stat-value !text-lg">
          {data?.market_data.current_price.eth.toLocaleString()}
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">AED</div>
        <div className="stat-value !text-lg">
          {data?.market_data.current_price.aed.toLocaleString()}
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">GBP</div>
        <div className="stat-value !text-lg">
          {data?.market_data.current_price.gbp.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
