import React from "react";
import "./ImageCard.css";

interface Picture {
  id: string;
  urls: {
    small: string,
  };
  alt_description: string | null;
}

interface ImageCardProps {
  picture: Picture;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ picture, onClick }) => {
  return (
    <li key={picture.id}>
      <img
        className="image-item"
        onClick={onClick}
        src={picture.urls.small}
        alt={picture.alt_description || "Image"}
      />
    </li>
  );
};

export default ImageCard;
