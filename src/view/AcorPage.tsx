import React from 'react'
import {useState , useEffect} from 'react';
import MenuAcordeon from '../components/acordeon/acordeon_menu/MenuAcordeon'
import Loading from '../components/general/Loading'
import { Items } from '../Utils/interfaces';

type Props = {}



const data: Items[] = [] ;

const AcorPage = (props: Props) => {

  const [isLoading , setIsLoading] = useState(true);
  const [items , setItems] = useState(data);

  useEffect(() => {

    setTimeout(()=>{
      fetch('acordeon.json')
      .then(res=>res.json())
      .then((data: Items[])=>{
        setItems(data);
        setIsLoading(false);
        
      });
    } , 1500)

  }, [])
  

  
  
  if(isLoading)return <Loading></Loading>
  return (
    <div>
      <MenuAcordeon items={items}></MenuAcordeon>
    </div>
  )
}

export default AcorPage