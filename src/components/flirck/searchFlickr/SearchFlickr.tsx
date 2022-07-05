import React from 'react'
import {ChangeEventHandler ,FormEvent} from 'react';
import { state } from '../../../Utils/interfaces';


type Props = {
  search:state<string>
}

const SearchFlickr = ({search}: Props) => {

  const handleChange : ChangeEventHandler<HTMLInputElement> = (e:FormEvent<HTMLInputElement>)=>{
      search.OnChange(e.currentTarget.value);
  }

  return (
    <div>
      <input type="text" name="search" id="search" placeholder='search' onChange={handleChange} value={search.value}/>
    </div>
  )
}

export default SearchFlickr