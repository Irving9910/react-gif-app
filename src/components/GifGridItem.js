import React from "react";

export const GifGridItem = ({ id, title, url }) => {

const copyURL = () => {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    window.alert("Gif url copied to clipboard")
}

  return (
    <div className="card animate__animated animate__fadeInLeft animate__delay-1s">
      <div className="img-container">
        <img src={url} alt={title} />
      </div>
      <p >{title}</p>
      <button onClick={copyURL}>Copy URL</button>
    </div>
  );
};
