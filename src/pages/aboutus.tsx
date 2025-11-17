import React from 'react';
import "./AboutUs.css";
import photo from "../assets/my git photo.jpg"
import nemxy from "../assets/becky photo.jpeg"
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function AboutUs() {
  return (
    <>
    <Navbar />
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">Our Story</h1>
            <p className="about-hero-subtitle">
              Where culinary artistry meets timeless elegance at Calvidas Dining
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="section-header">
                <h2>The Calvidas Legacy</h2>
                <div className="accent-line"></div>
              </div>
              <p className="story-intro">
                Welcome to Calvidas Dining, an exquisite culinary sanctuary nestled in the heart of Bagic. 
                Since our inception, we have dedicated ourselves to creating unforgettable dining experiences 
                that celebrate the art of fine cuisine.
              </p>
              <p className="story-text">
                Our journey began with a simple vision: to establish a dining destination where every element—from 
                the carefully sourced ingredients to the impeccable service—works in harmony to create magic. 
                We believe that a great meal is more than just sustenance; it's a memory in the making, a celebration 
                of life's special moments.
              </p>
              <div className="signature">
                <p className="signature-name">Peter Mungai</p>
                <p className="signature-title">Founder & Head Chef</p>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Calvidas Dining Restaurant Interior" 
                className="feature-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Exquisite culinary presentation at Calvidas Dining" 
                className="feature-image"
              />
            </div>
            <div className="mission-content">
              <div className="section-header">
                <h2>Our Culinary Philosophy</h2>
                <div className="accent-line"></div>
              </div>
              <p className="mission-text">
                At Calvidas, we are committed to delivering an unparalleled dining experience that fuses 
                culinary excellence with genuine hospitality. Our mission extends beyond serving exceptional 
                food—we create moments that linger in memory long after the last bite.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#8B4513" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Locally Sourced Excellence</h4>
                    <p>We partner with local farmers and artisans to bring you the freshest, most flavorful ingredients.</p>
                  </div>
                </div>
                <div className="mission-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#8B4513" d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Innovative Culinary Art</h4>
                    <p>Our chefs blend traditional techniques with contemporary creativity in every dish.</p>
                  </div>
                </div>
                <div className="mission-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#8B4513" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="point-content">
                    <h4>Uncompromising Quality</h4>
                    <p>Every detail, from ingredient selection to final presentation, meets our highest standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header center">
            <h2>Meet Our Culinary Artists</h2>
            <p className="section-subtitle">
              The passionate team behind the Calvidas experience
            </p>
            <div className="accent-line"></div>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img 
                  src={photo}
                  alt="Peter Mungai - Head Chef" 
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">PETER MUNGAI</h3>
                <p className="member-role">Head Chef & Founder</p>
                <p className="member-bio">
                  With over 15 years of culinary expertise spanning Michelin-starred restaurants across Europe 
                  and Asia, Peter brings innovation and passion to every creation. His leadership inspires our 
                  team to push culinary boundaries while honoring traditional flavors.
                </p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Sarah Chen - Pastry Chef" 
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Sarah Chen</h3>
                <p className="member-role">Pastry Chef</p>
                <p className="member-bio">
                  A graduate of EMBU UNIVERSITY,  delicate touch and artistic vision transform simple 
                  ingredients into extraordinary desserts. Her creations are the perfect sweet conclusion to 
                  our dining experience.
                </p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img 
                  src={nemxy}
                  alt="Marcus Rodriguez - Sommelier" 
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">BECKYLOVINE❤️</h3>
                <p className="member-role">Head Sommelier</p>
                <p className="member-bio">
                  BECKYLOVINE our extensive wine collection with expertise gained from years in isaak walton embu 
                  and Napa Valley. Her perfect pairings elevate every dish to new heights of flavor harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header center">
            <h2>Our Commitment to Excellence</h2>
            <p className="section-subtitle">
              The principles that guide every aspect of the Calvidas experience
            </p>
            <div className="accent-line"></div>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="#D4AF37" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We never compromise on the quality of our ingredients, preparation, or service.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="#D4AF37" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Authenticity</h3>
              <p>Every dish tells a story of genuine flavors and honest cooking techniques.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="#D4AF37" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3>Hospitality</h3>
              <p>We treat every guest as family, ensuring warmth and comfort throughout their visit.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="#D4AF37" d="M7 2v11h3v9l7-12h-4l4-8H7z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We continuously evolve our menu while respecting culinary traditions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}