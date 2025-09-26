import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-page">
      <h2>About Us</h2>

      {/* First Row */}
      <div className="about-row">
        <img src="https://winn-cocktail.vercel.app/static/media/drinks-2578446_1920.6e39b40bd86c9ecfa98c.jpg" alt="People with drinks" />
        <div className="about-text">
          <p>At <strong>Moonlit Sips</strong>,  we are passionate about the art 
             of mixology and the joy that comes from crafting and savoring exceptional cocktails. Our 
             journey began with a shared love for unique flavors, creativity in mixology, and the desire
            to bring the world of cocktails closer to enthusiasts like you.
          </p>
          <h4>Who We Are:</h4>
          <p>Moonlit Sips is a curated space where cocktail aficionados, both seasoned 
            mixologists and enthusiastic beginners, come together to explore, learn, and 
            elevate their cocktail experiences. Our team is composed of dedicated individuals who share
            a common goal to inspire and empower you to create memorable moments through the art of cocktail making.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="about-row">
        <img src="https://winn-cocktail.vercel.app/static/media/drinks-2578446_1920.6e39b40bd86c9ecfa98c.jpg" alt="Cocktail education" />
        <div className="about-text">
          <h3>What we do:</h3>
          <p><strong>Inspiration:</strong> <br />
             Immerse yourself in a world of endless inspiration with our extensive collection of 
             cocktail recipes. From classic concoctions to innovative creations, we've got something for e
             every taste and occasion.
          </p>
          <h4>Education:</h4>
          <p>Whether you're a novice or a seasoned pro, our articles, tutorials, and guides provide
             valuable insights into the world of mixology. Learn about the history of your favorite
             spirits, master essential techniques, and discover the latest trends in the cocktail scene.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
