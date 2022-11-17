import React from 'react'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

export default function Sidebar() {
  return (
    <div className='w-[350px] mx-auto px-0 lg:px-6 self-end sticky top-5'>
      <div className="form-control">
        <Link to='coins' className='cursor-pointer'>
          <label className="input-group input-group-sm">
          <span><BsSearch/></span>
          <input type="text" placeholder="Search coin" className="input input-bordered input-sm w-full" />
        </label>
        </Link>
      </div>
    </div>
  )
}
