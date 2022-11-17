import React from "react";
import Sidebar from "../components/home/Sidebar";
import Coins from "../components/home/Coins";
import Trending from "../components/home/Trending";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="trending overflow-x-auto px-4 py-12">
        <div className="py-4 text-lg font-bold">
          <h1>Trend Coins</h1>
        </div>
        <Trending />
      </div>
      <div className="flex flex-wrap-reverse py-20 px-3 lg:px-0 ">
        <Coins/>
        <Sidebar/>
      </div>
    </div>
  );
}
