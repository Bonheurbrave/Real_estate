// DisplayImages.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/images')
      .then(response => {
        // setImages(response.data);
        console.log(response);
       })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Uploaded Images</h2>
      {images.map(image => (
        <img key={image.id} src={`data:image/jpeg;base64,${image.image}`} alt={image.name} />
      ))}
    </div>
  );
}

export default DisplayImages;
