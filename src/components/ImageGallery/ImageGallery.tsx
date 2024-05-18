import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.css";

interface Picture {
  id: string;
  urls: {
    small: string,
  };
  alt_description: string ;
}

interface ImageGalleryProps {
  pictures: Picture[];
  onImageClick: (picture: Picture) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  pictures,
  onImageClick,
}) => {
  return (
    <ul className="images-list">
      {pictures &&
        pictures.length > 0 &&
        pictures.map((picture) => {
          return (
            <ImageCard
              key={picture.id}
              picture={picture}
              onClick={() => onImageClick(picture)}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
