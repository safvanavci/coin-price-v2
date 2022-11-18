/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container mx-auto text-center h-screen py-10'>
        <h1 className='text-[120px] font-bold'>404</h1>
        <h2 className='text-[40px] font-extralight'>Page not found</h2>
        <p className='font-light'>
          The Page you are looking for doesn't exist or an other error occured.
        </p>
        <p className='font-light'>
          Go back, or head go to <Link to='/' className='underline' > Homepage</Link> 
        </p>
    </div>
  )
}
