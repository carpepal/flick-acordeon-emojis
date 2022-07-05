import React from 'react'
import { Photo } from '../../../Utils/interfaces';
import Loading from '../../general/Loading';
import CardFlickr from '../cardFlickr/CardFlickr';
import "./TabFlickr.css"
type Props = {
  data:Photo[] | undefined
}

const TabFlickr = ({data}: Props) => {

  if(data === undefined)return <Loading></Loading>

  return (
    <div className='flickr_data'>
      {data.map((photo:Photo , index: number): JSX.Element=>{
        return (<CardFlickr photo={photo} key={index}></CardFlickr>)
      })}
    </div>
  )
}

export default TabFlickr