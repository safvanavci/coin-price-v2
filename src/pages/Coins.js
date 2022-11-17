import React,{useState} from 'react'
import Paginate from '../components/coins/Paginate'
import Search from '../components/coins/Search'
import Headers from '../components/Headers'

export default function Coins() {

  const [search, setSearch] = useState("")
  
  return (
    <div className='container mx-auto flex flex-col gap-2 pt-9'>
      <Search setSearch={setSearch} />
      <Headers/>
      <Paginate itemsPerPage={20} search={search} />
    </div>
  )
}
