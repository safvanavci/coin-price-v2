import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Convert from "./Convert";

// eslint-disable-next-line react/prop-types
export default function Sidebar({ datas }) {
  return (
    <div className="w-[350px] mx-auto px-0 lg:px-6 self-end lg:sticky top-5 mb-20">
      <div className="form-control mb-5">
        <Link to="coins" className="cursor-pointer">
          <label className="input-group input-group-sm">
            <span>
              <BsSearch />
            </span>
            <input
              type="text"
              placeholder="Search coin"
              className="input input-bordered input-sm w-full"
            />
          </label>
        </Link>
      </div>
      <Convert datas={datas} />
    </div>
  );
}
