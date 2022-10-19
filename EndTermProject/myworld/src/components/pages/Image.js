import React, { useState } from "react";
import "./Image.css";
const Image = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div>
            <h1 className="heading my-4">Upload Image</h1><br />
            {
                selectedImage && (
                    <div>
                        <img alt="not fount" width={"450px"} src={URL.createObjectURL(selectedImage)} /> <br /> <br />
                        <button className="btn" onClick={() => setSelectedImage(null)}>Remove</button>
                    </div>
                )}
            <br /> <br />
            <div className="box1">
                <input className="choosefile" type="file" name="myImage" onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }
                } />
            </div>

        </div>
    );
};
export default Image;