import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <div className="gif-grid">
      <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
      <hr className="animate__animated animate__fadeInLeft" />

      {loading && (
          <img
            src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
            alt="loading"
            className="loading-gif"
          />
      )}

      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
