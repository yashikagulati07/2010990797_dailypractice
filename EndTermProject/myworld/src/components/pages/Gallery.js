import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    document.title = "Gallery";
    let allImages = localStorage.getItem("gallery-images");
    if (allImages != null) {
      allImages = JSON.parse(allImages);
      setImages(allImages);
    } else {
      setImages([]);
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="flex align-center mt-4">
          <h1>Gallery</h1>
          <div className="grow"></div>
          <Link to="/image-uploader" className="btn btn-primary"> Upload Image </Link>
        </div>
        <br/>
        {/* <Link to="/image-uploader">Back</Link> */}
        <div className="grid">
          {images != null && images.length > 0 && images.map((image, index) => (
              <div className="grid-item" key={`${index}`}>
                <img alt={image.alt} src={image.src} width="250px" height="250px" className="gallery-img" /> <br/>
              </div>          
            ))}
        </div>
        {!(images != null && images.length > 0) && (
          <div className="no">
            <h2> Noting to display</h2>
          </div>
        )}
      </div>
    </>
  );
};
export default Gallery;

