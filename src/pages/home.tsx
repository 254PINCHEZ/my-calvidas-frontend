import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import './Home.css';

type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  isSpecial: boolean;
  badge?: string;
};

type FeatureItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// Using reliable Unsplash URLs for placeholder images
const menuItemsData: MenuItem[] = [
  {
    id: 1,
    title: 'Seared Scallops with Saffron Risotto',
    description: 'Perfectly seared dayboat scallops served over creamy saffron-infused Arborio rice with seasonal vegetables.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    isSpecial: true,
    badge: 'Chef\'s Special'
  },
  {
    id: 2,
    title: 'Herb-Crusted Lamb Rack',
    description: 'New Zealand lamb rack roasted with rosemary and thyme, served with mint jus and seasonal vegetables.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    isSpecial: true,
    badge: 'Seasonal'
  },
  {
    id: 3,
    title: 'Decadent Chocolate Lava Cake',
    description: 'Rich, molten center chocolate cake, served with vanilla bean ice cream and fresh berries.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    isSpecial: false,
    badge: 'Popular'
  }
];

const featuresData: FeatureItem[] = [
  {
    id: 1,
    title: 'Farm to Table',
    description: 'We source the freshest ingredients directly from local farms and trusted suppliers.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Expert Chefs',
    description: 'Our Michelin-starred chefs create innovative dishes that delight the senses.',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Elegant Ambiance',
    description: 'Experience fine dining in our beautifully designed restaurant with impeccable service.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }
];

const Home: React.FC = () => {
  const featuredDishes = menuItemsData.filter(item => item.isSpecial);
  const popularDishes = menuItemsData.filter(item => !item.isSpecial);

  return (
    <div className="page-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Calvidas Dining Restaurant Interior" 
            className="hero-bg-image" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                CALVIDAS DINING
              </h1>
              <p className="hero-tagline">
                Experience pure excellence. A sanctuary for fine dining in the heart of the city.
              </p>
              <div className="hero-cta-group">
                <Link to="/menu" className="btn btn-primary">
                  View Our Menu
                </Link>
                <Link to="/reservations" className="btn btn-secondary">
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Calvidas</h2>
            <p className="section-subtitle">
              Discover what makes our dining experience truly exceptional
            </p>
          </div>
          <div className="features-grid">
            {featuresData.map(feature => (
              <div key={feature.id} className="feature-card">
                <div className="feature-image-container">
                  <img src={feature.image} alt={feature.title} className="feature-image" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="dishes-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Signature Dishes</h2>
            <p className="section-subtitle">
              Masterpieces crafted with passion and precision
            </p>
          </div>
          <div className="dishes-grid">
            {featuredDishes.map(item => (
              <div key={item.id} className="dish-card">
                <div className="dish-image-container">
                  <img src={item.image} alt={item.title} className="dish-image" />
                  {item.badge && <span className="dish-badge">{item.badge}</span>}
                </div>
                <div className="dish-card-content">
                  <h3 className="dish-title">{item.title}</h3>
                  <p className="dish-description">{item.description}</p>
                  <div className="dish-footer">
                    <p className="dish-price">${item.price.toFixed(2)}</p>
                    <Link to={`/menu#item-${item.id}`} className="view-dish-link">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="popular-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Customer Favorites</h2>
            <p className="section-subtitle">
              Beloved dishes that keep our guests coming back
            </p>
          </div>
          <div className="popular-grid">
            {popularDishes.map(item => (
              <div key={item.id} className="popular-card">
                <div className="popular-image-container">
                  <img src={item.image} alt={item.title} className="popular-image" />
                  {item.badge && <span className="popular-badge">{item.badge}</span>}
                </div>
                <div className="popular-content">
                  <h3 className="popular-title">{item.title}</h3>
                  <p className="popular-description">{item.description}</p>
                  <div className="popular-footer">
                    <p className="popular-price">${item.price.toFixed(2)}</p>
                    <Link to={`/menu#item-${item.id}`} className="btn btn-outline">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready for an Unforgettable Experience?</h2>
            <p className="cta-description">
              Book your table today and let us create magical moments for you
            </p>
            <div className="cta-buttons">
              <Link to="/reservations" className="btn btn-primary btn-large">
                Reserve Your Table
              </Link>
              <Link to="/meals" className="btn btn-secondary btn-large">
                Explore Full Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;