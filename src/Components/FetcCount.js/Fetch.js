import React, { useEffect } from 'react'
import { useState } from 'react'

function Fetch() {
    const [data, setData] = useState();
    const [count, setCount] = useState('');

    useEffect(() => {
      fetch('https://northwind.vercel.app/api/products')
      .then(res=>res.json())
      .then(res => setData(res))
    }, [count])
    
    function searchByName () {
      return data?.filter((item)=>{
          return count?.toLowerCase() === '' ? item : item?.name?.toLowerCase().includes(count)
      })
    }

  return (<>
  <div>
    <input type="text" placeholder='Name' value={count} onChange={(e)=>setCount(e.target.value)} />
    <button>Get</button>
  </div>
  <div>
      <ul>
        {(data && !isNaN(parseInt(count)) ? data?.slice(0, Number(count)) : searchByName())?.map(el=> (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
</>)
}

export default Fetch
