import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const postBtnStyle = {
    border: "none",
    margin: 0,
    color: "#fff",
    fontWeight: "bold",
    padding: "16px 20px",
    background: "#7D4C92 ",
    width: "417px",
    borderRadius: "12px",
};

const formStyle = {
    width: "600px",
    height: "200px",
    border: "2px solid lightgrey",
    margin: "3rem auto 10px auto",
    textAlign: "center",
    padding: "30px 40px 30px 40px",
    borderRadius: "12px",
};
const inputFields = {
    width: "100%",
    height: "50px",
    fontFamily: "arial",
    padding: "10px",
    borderRadius: "10px",
    border: "1.5px solid grey",
};
const ImageUploader = () => {
    useEffect(() => {
        document.title = "Image Uploader";
    }, []);

    const [imageAlt, setImageAlt] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [isCorrectStatus, setisCorrectStatus] = useState(false);
    const [imageLink, setImageLink] = useState("");
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            let imagesArray = [];
            const images = localStorage.getItem("gallery-images");
            imagesArray.push();
            if (images === "" || images === null) {
                imagesArray.push({ alt: imageAlt, src: imageLink });
            } else {
                imagesArray.push({ alt: imageAlt, src: imageLink });
                imagesArray = imagesArray.concat(JSON.parse(images));
            }
            localStorage.setItem("gallery-images", JSON.stringify(imagesArray));
            setMessage("Image uploaded successfully");
            setisCorrectStatus(true);
        } catch (E) {
            console.log(E);
            setMessage("An error occured while uploading");
            setisCorrectStatus(false);
        }
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2500);

        setImageLink("");
        setImageAlt("");
    };
    return (
        <div className="container">
            <div className="flex align-center mt-4">
                <h1 className="heading7"> Image Uploader </h1>
                <div className="grow"></div>
                <Link to="/gallery" className="btn btn-primary my-3">
                    View images
                </Link>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} style={formStyle}>
                <input
                    style={inputFields}
                    required
                    value={imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
                    type="text"
                    placeholder="Paste your image url here"
                />
                <br />
                <br />
                <input style={inputFields} required value={imageAlt}
                    onChange={(e) => setImageAlt(e.target.value)}
                    type="text"
                    placeholder="Enter image alt text"
                />
                <br></br>
                <br></br>
                <button type="submit" style={postBtnStyle}>
                    Post
                </button>
            </form>
            {showMessage && (
                <div
                    className={
                        "floating alert alert-primary" +
                        (isCorrectStatus ? " alert-success" : " alert-error")
                    }
                    style={{}}
                    role="alert"
                >
                    {message} Helo
                </div>
            )}
        </div>
    );
};
export default ImageUploader;