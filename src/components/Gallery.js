import React, { useState } from 'react';
import './Gallery.css'; // Import your CSS file

function ImageSlider() {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section className="image-slider flex flex-col">
      <button className="image-slider-button" onClick={togglePause}>Pause</button>
      <article className={`image-slider-content ${isPaused ? "paused" : ""}`} >
        <div className="image-slider-column">
          <ul className="image-slider-list">
            <li className="image-slider-item"><img src="https://www.iitbracing.org/assets/Blog-post/one%20(5).jpg" alt="Placeholder" /></li>
            <li className="image-slider-item"><img src="https://www.iitbracing.org/assets/Blog-post/one%20(4).jpg" alt="Placeholder" /></li>
            <li className="image-slider-item"><img src="https://www.iitbracing.org/assets/Blog-post/one%20(6).JPG" alt="Placeholder" /></li>
            <li className="image-slider-item"><img src="https://www.iitbracing.org/assets/Blog-post/onee%20(2).jpg" alt="Placeholder" /></li>
          </ul>
        </div>
        <div className="image-slider-column">
          <ul className="image-slider-list">
            <li className="image-slider-item"><img src="https://www.iitbracing.org/assets/Blog-post/onee%20(1).jpg" alt="Placeholder" /></li>
            <li className="image-slider-item"><img src="https://www.iitbracing.org/assets/Blog-post/one%20(1).jpg" alt="Placeholder" /></li>
            <li className="image-slider-item"><img src="https://www.iitbracing.org/assets/Blog-post/onee%20(1).jpg" alt="Placeholder" /></li>
            <li className="image-slider-item"><img src="https://www.iitbracing.org/assets/Blog-post/one%20(3).jpg" alt="Placeholder" /></li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default ImageSlider;
