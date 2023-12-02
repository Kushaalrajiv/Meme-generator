import React from "react";
import memesData from "../memesData";

export default function Main(){
    const [image,setImage]= React.useState("");
    function getMemes(){
        const memes=memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length)
        const url=memes[randomNumber].url;
        setImage(url)
    }
    return (
        <main className="main">
            {/* <form className="form"> */}
                <input type="text" placeholder="Top Text" className="form--text" />
                <input type="text" placeholder="Bottom Text" className="form--text" />
                <button className="form--button" onClick={getMemes}>Get a new meme image 🖼️</button>
                <img src={image} className="form--image"/>
            {/* </form> */}
        </main>
    )
}