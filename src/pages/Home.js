import React,{useEffect , useState } from "react";
import Sidebar from "../components/home/Sidebar";
import Coins from "../components/home/Coins";
import Trending from "../components/home/Trending";
import axios from "axios";


export default function Home() {

const [datas, setDatas] = useState();


  useEffect(() => {
    axios
      // eslint-disable-next-line no-undef
      .get(process.env.REACT_APP_API_KEY)
      .then((res) => setDatas(res.data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="trending overflow-x-auto px-4 py-10">
        <div className="py-4 text-lg font-bold">
          <h1>Trend Coins</h1>
        </div>
        <Trending />
      </div>
      <div className="flex flex-wrap-reverse py-20 px-3 lg:px-0 ">
        <Coins datas={datas}/>
        <Sidebar datas={datas}/>
      </div>
    </div>
  );
}
