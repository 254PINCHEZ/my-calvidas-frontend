import React, { useState } from "react";
import "./Products.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type ProductItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
  category?: string;
  features?: string[];
};

const productsData: ProductItem[] = [
  {
    id: 1,
    title: "Seared Scallops with Saffron Risotto",
    description: "Perfectly seared dayboat scallops served over creamy saffron-infused Arborio rice with seasonal vegetables.",
    price: 38,
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    available: true,
    category: "Main Course",
    features: ["Gluten Free", "Chef's Special"]
  },
  {
    id: 2,
    title: "Herb-Crusted Lamb Rack",
    description: "New Zealand lamb rack roasted with rosemary and thyme, served with mint jus and seasonal vegetables.",
    price: 45,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    available: true,
    category: "Main Course",
    features: ["Seasonal", "Premium Cut"]
  },
  {
    id: 3,
    title: "Decadent Chocolate Lava Cake",
    description: "Rich, molten center chocolate cake, served with vanilla bean ice cream and fresh berries.",
    price: 15,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    available: false,
    category: "Dessert",
    features: ["Vegetarian", "Popular"]
  },
  {
    id: 4,
    title: "Truffle Mushroom Pasta",
    description: "Fresh handmade pasta with wild mushrooms, black truffle, and Parmesan cream sauce.",
    price: 28,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    available: true,
    category: "Main Course",
    features: ["Vegetarian", "House Specialty"]
  },
  {
    id: 5,
    title: "Grilled Atlantic Salmon",
    description: "Fresh Atlantic salmon with lemon herb butter, roasted potatoes, and asparagus.",
    price: 32,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    available: true,
    category: "Main Course",
    features: ["Pescatarian", "Healthy Choice"]
  },
  {
    id: 6,
    title: "Classic Caesar Salad",
    description: "Crisp romaine lettuce with house-made Caesar dressing, croutons, and Parmesan.",
    price: 18,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    available: true,
    category: "Starter",
    features: ["Vegetarian", "Gluten Free Option"]
  }
];

const Products: React.FC = () => {
  const [search, setSearch] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState<"all" | "available">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = ["all", ...new Set(productsData.map(product => product.category))] as string[];

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase());
    const matchesAvailability =
      availabilityFilter === "all" || (availabilityFilter === "available" && product.available);
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    
    return matchesSearch && matchesAvailability && matchesCategory;
  });

  const handleOrder = (title: string) => {
    alert(`Order placed for: ${title}`);
  };

  return (
    <>
    <Navbar/>
    <div className="products-page">
      {/* Header Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">Our Exquisite Menu</h1>
            <p className="products-hero-subtitle">
              Discover culinary masterpieces crafted with the finest ingredients and passion
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="products-filters-section">
        <div className="container">
          <div className="filters-grid">
            <div className="search-filter">
              <div className="search-input-wrapper">
                <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="search-input"
                  aria-label="Search meals"
                />
              </div>
            </div>

            <div className="filter-group">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="filter-select"
                aria-label="Filter by category"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value as any)}
                className="filter-select"
                aria-label="Filter by availability"
              >
                <option value="all">All Dishes</option>
                <option value="available">Available Now</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-stats">
            <p className="results-count">
              Showing {filteredProducts.length} of {productsData.length} dishes
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <svg className="no-results-icon" viewBox="0 0 24 24" width="64" height="64">
                <path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"/>
              </svg>
              <h3>No dishes found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="product-image"
                    />
                    <div className="product-badges">
                      {product.features?.map((feature, index) => (
                        <span key={index} className="product-badge">
                          {feature}
                        </span>
                      ))}
                    </div>
                    {!product.available && (
                      <div className="product-overlay">
                        <span className="sold-out-text">Currently Unavailable</span>
                      </div>
                    )}
                  </div>

                  <div className="product-content">
                    <div className="product-header">
                      <h3 className="product-title">{product.title}</h3>
                      <span className="product-category">{product.category}</span>
                    </div>
                    
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-features">
                      {product.features?.slice(0, 2).map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="product-footer">
                      <div className="price-container">
                        <span className="product-price">${product.price}</span>
                        <span className="price-label">per serving</span>
                      </div>
                      
                      <button
                        disabled={!product.available}
                        className={`order-button ${!product.available ? 'disabled' : ''}`}
                        onClick={() => handleOrder(product.title)}
                      >
                        {product.available ? (
                          <>
                            <svg className="button-icon" viewBox="0 0 24 24" width="16" height="16">
                              <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                            Add to Order
                          </>
                        ) : (
                          "Unavailable"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Products;