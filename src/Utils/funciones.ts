import { Params, Photo } from "./interfaces";


export const imageUrl = (photo: Photo) : string =>{
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
}

export const getFormatedUrl= (params: Params[]) : string => {
    let baseUrl : string = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent";

    let formatedUrl=`${baseUrl}&api_key=5fb90c8a453fba6ffd28e642242e9775`

    params.forEach((param , index)=>{
        formatedUrl+=`&${param.key}=${param.value}`
    })

    return formatedUrl;
}