import React from 'react'

export default function Headers() {
  return (
    <div className="grid xl:grid-cols-5 grid-cols-4 items-center  font-extrabold">
        <h1 className="justify-self-center">
            Name
        </h1>
        <h1 className="justify-self-center">
            Price
        </h1>
        <h1 className="justify-self-center">
            24h Change
        </h1>
        <h1 className="justify-self-center hidden xl:inline">
            Market Cap
        </h1>
        <h1 className="justify-self-center">
            Last 7 Days
        </h1>
    </div>
  )
}
