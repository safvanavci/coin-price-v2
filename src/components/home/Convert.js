/* eslint-disable react/prop-types */
import React from 'react'

export default function Convert({datas}) {

    return (
        <>
            <div className="form-control mb-5">
                <label className="input-group">
                    <span>USD</span>
                    <input type="text" placeholder="0.01" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>
                        <select className='bg-inherit w-fit outline-none' onChange={(e) => console.log(e.nativeEvent.srcElement.selectedOptions[0].id
)} >
                            {datas?.map(data => 
                                <option key={data.id} id={data.id} >{data.symbol.toUpperCase()}</option>
                            )}
                            
                        </select>
                    </span>
                    <input type="text" placeholder="0.01" className="input input-bordered w-full" />
                </label>
            </div>
        </>
    )
}
