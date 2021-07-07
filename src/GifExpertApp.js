import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Gif"]);

  return (
    <div className="main-container">
      <h2>Fetch to GIF API</h2>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
