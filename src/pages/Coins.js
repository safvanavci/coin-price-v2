import React from 'react'
import Paginate from '../components/coins/Paginate'
import Headers from '../components/Headers'

export default function Coins() {
  return (
    <div className='container mx-auto flex flex-col gap-2'>
      <Headers/>
      <Paginate itemsPerPage={20} />
    </div>
  )
}
