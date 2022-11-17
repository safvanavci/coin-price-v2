/* eslint-disable react/prop-types */
import React from "react";

export default function Info({ data }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
    >
      <div className="collapse-title text-xl font-medium">
        What is {data?.name}?
      </div>
      <div className="collapse-content">{data?.description.en}</div>
    </div>
  );
}
