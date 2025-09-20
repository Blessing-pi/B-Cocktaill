import React from 'react'
import '../styles/footer.css'
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Blessed-<span>Cocktail</span></h3>
          <p>
            At Blessed-Cocktail, we are passionate about the art of mixology
            and the joy that comes from crafting and savoring exceptional cocktails.
          </p>
        </div>

        <div className="footer-section">
          <h3>Top Courses</h3>
          <ul>
            <li>Mixology Basics</li>
            <li>Spirit Spotlight</li>
            <li>Cocktail Recipes & Techniques</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Training</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p><FaEnvelope /> blessingowolabi23@gmail.com</p>
          <p><FaGithub /> Blessing Pi</p>
          <p><FaTwitter /> Owolabi Blessing</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Blessed-Cocktail. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
