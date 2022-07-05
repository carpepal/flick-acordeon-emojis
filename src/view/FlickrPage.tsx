import React ,{useState , useEffect}from 'react';
import { state, Photo } from '../Utils/interfaces';
import SearchFlickr from '../components/flirck/searchFlickr/SearchFlickr';
import TabFlickr from '../components/flirck/tabFlickr/TabFlickr';
import { getFormatedUrl } from '../Utils/funciones';

type Props = {}

const FlickrPage = (props: Props) => {
  const [searchString , setSearchString] = useState('');
  const [images , setImages] = useState<Photo[]>();
  const state: state<string> = {
    value: searchString,
    OnChange: setSearchString
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(()=>{
      console.log(searchString);
      let url : string = getFormatedUrl([
        {
          key:"per_page",
          value: 20
        },
        {
          key: "format",
          value:"json"
        },
        {
          key: 'nojsoncallback',
          value: 1
        },
        {
          key:"tag",
          value: searchString
        }
      ])
      fetch(url)
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          
          if(data!==undefined)setImages(data.photos.photo)
        })
    } , 1000)
  
    return () => clearTimeout(delayDebounceFn);
  }, [searchString])
  
  return (
    <div>
      <SearchFlickr search={state}></SearchFlickr>
      <hr />
      <TabFlickr data={images}></TabFlickr>
    </div>
  )
}

export default FlickrPage