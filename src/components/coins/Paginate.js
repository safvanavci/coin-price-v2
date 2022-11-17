import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Coin from "./Coin";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function Paginate({ itemsPerPage,search }) {
    
  useEffect(() => {
    axios
      // eslint-disable-next-line no-undef
      .get(process.env.REACT_APP_API_KEY_ALL)
      .then((res) => setitems(res.data));
  }, []);

  const [items, setitems] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Coin currentItems={currentItems} search={search} />
      <ReactPaginate
      className="flex mx-auto my-8"
        breakLabel="..."
        nextLabel="»"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="«"
        renderOnZeroPageCount={null}
        breakClassName='btn btn-disabled'
        pageLinkClassName='btn'
        activeLinkClassName='btn-active'
        previousLinkClassName='btn'
        nextLinkClassName='btn'
      />
    </>
  );
}
