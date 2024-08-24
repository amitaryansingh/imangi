
import React from 'react';
import './Body.css'; // Import the CSS file for styling

const Body = () => {
  return (
    <div className="body-container">
      <header className="body-header">
        <h1>Welcome to Imangi</h1>
      </header>
      <main className="body-content">
        <section id="history-of-imangi" className="body-section">
          <h2>History of Imangi</h2>
          <p>
            Founded in 2011, Imangi Studios emerged as a pioneering force in the entertainment industry with a mission to blend innovative technology with captivating storytelling. The company’s journey began with a vision to create exceptional gaming experiences that resonate with a global audience.
            <br /><br />
            Imangi's early success was marked by the release of Temple Run, a groundbreaking mobile game that redefined the endless runner genre. The game’s combination of dynamic gameplay, intuitive controls, and immersive environments captivated players worldwide, propelling Imangi to the forefront of mobile gaming. Temple Run quickly became a cultural phenomenon, leading to numerous awards and accolades.
            <br /><br />
            As the company expanded, Imangi continued to push the boundaries of interactive entertainment. Their portfolio grew to include a variety of engaging and innovative games, each characterized by a commitment to high-quality design and user experience. The studio’s success is rooted in its ability to adapt to evolving technology and market trends, ensuring that each new project reflects the latest advancements in gaming.
            <br /><br />
            In addition to game development, Imangi has made strides in other areas of digital entertainment, including partnerships with major brands and media properties. The company's dedication to excellence and creativity has established it as a leading player in the industry, known for its ability to deliver unforgettable experiences.
            <br /><br />
            Today, Imangi Studios stands as a testament to the power of innovation and storytelling. With a dedicated team and a passion for pushing the envelope, Imangi continues to shape the future of entertainment, creating memorable experiences for audiences around the globe. As the company looks to the future, it remains committed to exploring new horizons and setting new standards in the world of interactive media.
          </p>
        </section>
        <section id="our-vision" className="body-section">
          <h2>Our Vision</h2>
          <p>
            At Imangi Studios, our vision is to lead the entertainment industry through innovation and creativity. We aim to craft immersive experiences that captivate and inspire a global audience, blending cutting-edge technology with exceptional storytelling. Our goal is to stay ahead of industry trends, continually delivering high-quality, engaging products that resonate with users.
            <br /><br />
            We are committed to exploring new technologies and fostering a culture of creativity within our team. By embracing new challenges and ideas, we strive to set new standards in interactive entertainment. As we move forward, Imangi remains dedicated to shaping the future of digital media and making a lasting impact through groundbreaking experiences.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Body;
