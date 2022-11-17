/* eslint-disable react/prop-types */
import React from "react";

export default function Stats({ data }) {
  return (
    <div className="coinstats">
      <div>
        <span>{data?.name} Price</span>
        <span>${data?.market_data.current_price.usd.toLocaleString()}</span>
      </div>
      <div>
        <span>Market Cap</span>
        <span>${data?.market_data.market_cap.usd.toLocaleString()}</span>
      </div>
      <div>
        <span>Market Rank</span>
        <span>#{data?.market_cap_rank}</span>
      </div>
      <div>
        <span>Total Volume</span>
        <span>${data?.market_data.total_volume.usd.toLocaleString()}</span>
      </div>
      <div>
        <span>24h High</span>
        <span>${data?.market_data.high_24h.usd.toLocaleString()}</span>
      </div>
      <div>
        <span>24h Low</span>
        <span>${data?.market_data.low_24h.usd.toLocaleString()}</span>
      </div>
      <div>
        <span>Price Change (1h)</span>
        {data?.market_data.price_change_percentage_1h_in_currency.usd > 0 ? (
          <span className="text-green-600">
            +
            {data?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
              2
            )}
            %
          </span>
        ) : (
          <span className="text-red-600">
            {data?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
              2
            )}
            %
          </span>
        )}
      </div>
      <div>
        <span>Price Change (24h)</span>
        {data?.market_data.price_change_percentage_24h > 0 ? (
          <span className="text-green-600">
            +{data?.market_data.price_change_percentage_24h.toFixed(2)}%
          </span>
        ) : (
          <span className="text-red-600">
            {data?.market_data.price_change_percentage_24h.toFixed(2)}%
          </span>
        )}
      </div>
      <div>
        <span>Price Change (7d)</span>
        {data?.market_data.price_change_percentage_7d > 0 ? (
          <span className="text-green-600">
            +{data?.market_data.price_change_percentage_7d.toFixed(2)}%
          </span>
        ) : (
          <span className="text-red-600">
            {data?.market_data.price_change_percentage_7d.toFixed(2)}%
          </span>
        )}
      </div>
      <div>
        <span>Price Change (30d)</span>
        {data?.market_data.price_change_percentage_30d > 0 ? (
          <span className="text-green-600">
            +{data?.market_data.price_change_percentage_30d.toFixed(2)}%
          </span>
        ) : (
          <span className="text-red-600">
            {data?.market_data.price_change_percentage_30d.toFixed(2)}%
          </span>
        )}
      </div>
      <div>
        <span>All-Time High</span>
        <span>${data?.market_data.ath.usd.toLocaleString()}</span>
      </div>
      <div>
        <span>All-Time Low</span>
        <span>${data?.market_data.atl.usd.toLocaleString()}</span>
      </div>
    </div>
  );
}
