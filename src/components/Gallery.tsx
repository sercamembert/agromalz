"use client";
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "./NextJsImage";

interface Props {}

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const images = [];
  for (let i = 1; i <= 6; i++) {
    const image = require(`../../public/images/galleryPage/${i}.png`).default;
    images.push(image);
  }
  return (
    <div>
      <PhotoAlbum
        photos={images}
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 600) return 1;
          if (containerWidth >= 600 && containerWidth < 1024) return 2;
          return 3; // Dla szerokości większych lub równych 1024px
        }}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={NextJsImage}
      />

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails]}
      />
    </div>
  );
};

export default Gallery;
