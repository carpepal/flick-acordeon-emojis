import React, { ChangeEventHandler } from 'react'

type Props = {
  isDisable?:boolean
  value:string
  HandlerChange: any
}

const SearchEmoji = ({
  isDisable = true,
  value,
  HandlerChange,
   ...props}:Props) => {
  return (
    <>
      <div>
        <input type="text" name="search" placeholder='search' disabled={isDisable ||false } value={value} onChange={HandlerChange}/>
      </div>
    </>
  )
}

export default SearchEmoji;