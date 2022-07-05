import React, { useState } from 'react'
import { Items } from '../../../Utils/interfaces'

type Props = {
  data: Items
  index: number
}

const ItemAcordeon = ({data , index}: Props) => {
  
  const [item , setItem] = useState(data);

  return (
    <div>
      <div className="title" onClick={()=>setItem((prev)=>({...prev , active: !prev.active}))}>{item.title}</div>
      <div className="card" style={{display: item.active ? 'block' : 'none'}}>{item.text}</div>
    </div>
  )
}

export default ItemAcordeon