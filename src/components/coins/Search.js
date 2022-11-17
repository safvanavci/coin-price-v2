import React from 'react'
import {BsSearch} from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
export default function Search({ setSearch }) {
  return (
    <div className="form-control w-[350px] pb-10">
        
          <label className="input-group input-group-sm">
          <span><BsSearch/></span>
          <input 
          onChange={(e)=> setSearch(e.target.value)}
          type="text" 
          placeholder="Search coin" 
          className="input input-bordered input-sm w-full" 
          autoFocus 
          />
        </label>
        
    </div>
  )
}
