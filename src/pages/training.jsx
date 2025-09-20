import React from 'react';
import '../styles/training.css';

const Training = () => {
  return (
    <section className="training-page">
      <h2 className="training-title">Training</h2>
      <div className="training-content">
        <div className="training-courses">
          <p className="training-welcome">
            Welcome to the Training Hub at Winn-cocktail. Embark on a journey of discovery and mastery with our 
            comprehensive training resources designed to elevate your mixology skills. Whether you're a novice looking 
            to shake up your first cocktail or an experienced bartender aiming to refine your craft, our training page 
            is your go-to destination for learning and growth.
          </p>

          <h3>Mixology Basics:</h3>
          <p>Learn the fundamental techniques of mixology, including shaking, stirring, muddling, and layering.
             Understand the key components of a well-balanced cocktail and the importance of proper measurements.
          </p>

          <h3>Spirit Spotlight:</h3>
          <p>Dive deep into the world of spirits. Explore the unique characteristics of different types of liquor,
             from classic favorites to emerging trends.
          </p>

          <h3>Cocktail Recipes & Techniques:</h3>
          <p>Explore a diverse range of cocktail recipes, each accompanied by step-by-step instructions and pro tips.
             Master advanced techniques to take your cocktail game to the next level.
          </p>
        </div>

        <div className="training-form">
          <form>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your full name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="level">Level of Expertise</label>
            <select id="level" required>
              <option value="novice">Novice</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <label htmlFor="format">Preferred Learning Format</label>
            <select id="format" required>
              <option value="video">Video Tutorials</option>
              <option value="written">Written Guide</option>
              <option value="live">Live Webinars</option>
            </select>

            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Training;
