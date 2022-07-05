import React from "react";
import { Photo } from "../../../Utils/interfaces";
import { imageUrl } from "../../../Utils/funciones";
import "./CardFlickr.css";

type Props = {
  photo: Photo;
};

const CardFlickr = ({ photo }: Props) => {
  return (
    <div className="flickr_card">
      <div className="flickr_card_image">
        <img src={imageUrl(photo)} alt="" />
      </div>
    </div>
  );
};

export default CardFlickr;
