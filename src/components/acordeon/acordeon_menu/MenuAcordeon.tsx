import React from 'react'
import { Items } from '../../../Utils/interfaces'
import ItemAcordeon from '../acordeon_description/ItemAcordeon'

type Props = {
    items: Items[]
}

const MenuAcordeon = ({items}: Props) => {
  return (
   <>
    {
      items.map((item : Items , index: number): JSX.Element=>{
        return (
          <div key={index}>
            <ItemAcordeon data={item} index={index} ></ItemAcordeon>
            
          </div>
        )
      })
    }
   </> 
  )
}

export default MenuAcordeon