import "./index.css";
import React, { useRef, useState } from "react";
import ImageCard from "./ImageCard";
// twitch is 28 x 28
// discord reaction is 16 x 16
// discord emoji is 48 x 48
const imageSize = [
  {
    company: "Twitch emote",
    size: "28",
    type: "emote",
  },
  {
    company: "Discord reaction",
    size: "16",
    type: "reaction",
  },
  {
    company: "Discord emote",
    size: "48",
    type: "emote",
  },
];
const UploadImage = () => {
  const [imgURL, setImgURL] = useState("");
  const refContainer = useRef(null);
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImgURL(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderImages = () =>
    imageSize.map((image) => {
      return <ImageCard key={image.size} src={imgURL} details={image} />;
    });

  return (
    <div className="container">
      <div className="container">
        <div className="card-group">{renderImages()}</div>
      </div>
      <hr />
      <input
        ref={refContainer}
        type="file"
        accept="image/*"
        multiple={false}
        onChange={handleImageUpload}
      />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => console.log(refContainer.current.click())}
      >
        Upload Emote!
      </button>
    </div>
  );
};

export default UploadImage;
