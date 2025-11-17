import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Submitting form data:", formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <div className="contact-page">
          {/* Hero Section */}
          <section className="contact-hero">
            <div className="container">
              <div className="contact-hero-content">
                <h1 className="contact-hero-title">Get In Touch</h1>
                <p className="contact-hero-subtitle">
                  We're here to make your dining experience exceptional. Reach out with any questions about reservations, private events, or general inquiries.
                </p>
              </div>
            </div>
          </section>

          {/* Main Contact Section */}
          <section className="contact-main-section">
            <div className="container">
              <div className="contact-grid">
                {/* Contact Form */}
                <div className="contact-form-section">
                  <div className="section-header">
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  {submitted ? (
                    <div className="contact-success">
                      <div className="success-icon">
                        <svg viewBox="0 0 24 24" width="64" height="64">
                          <path fill="#8B4513" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h3>Thank You, {formData.name || 'Guest'}!</h3>
                      <p>Your message has been successfully submitted. A member of our team will respond to you shortly.</p>
                      <button onClick={resetForm} className="btn btn-secondary">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="+254725401081"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="subject" className="form-label">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="form-select"
                            required
                          >
                            <option value="">Select a subject</option>
                            <option value="reservation">Reservation Inquiry</option>
                            <option value="private-dining">Private Dining & Events</option>
                            <option value="general">General Information</option>
                            <option value="feedback">Feedback & Reviews</option>
                            <option value="careers">Careers & Employment</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="form-textarea"
                          required
                          placeholder="Please share your questions, comments, or special requests..."
                        />
                      </div>

                      <button 
                        type="submit" 
                        className={`btn btn-primary submit-button ${isSubmitting ? 'submitting' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="spinner" viewBox="0 0 24 24" width="20" height="20">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg className="send-icon" viewBox="0 0 24 24" width="20" height="20">
                              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

                {/* Contact Information */}
                <div className="contact-info-section">
                  <div className="info-card">
                    <div className="section-header">
                      <h2>Visit Us Today</h2>
                      <p>Experience the perfect blend of ambiance and culinary excellence.</p>
                    </div>

                    <div className="contact-details">
                      <div className="contact-item">
                        <div className="contact-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#8B4513" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                          </svg>
                        </div>
                        <div className="contact-text">
                          <h3>Address</h3>
                          <p>123 bagic hostel<br />Bagic, HOSTEL 12345</p>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#8B4513" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </div>
                        <div className="contact-text">
                          <h3>Email</h3>
                          <p>info@calvidasdining.com<br />githinjipinchez001@gmail.com</p>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon">
                          <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#8B4513" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                        </div>
                        <div className="contact-text">
                          <h3>Phone</h3>
                          <p>0725401081<br />0794747454</p>
                        </div>
                      </div>
                    </div>

                    <div className="hours-section">
                      <h3 className="hours-title">Operating Hours</h3>
                      <div className="hours-list">
                        <div className="hour-item">
                          <span className="day">Monday - Thursday</span>
                          <span className="time">11:00 AM – 10:00 PM</span>
                        </div>
                        <div className="hour-item">
                          <span className="day">Friday</span>
                          <span className="time">11:00 AM – 11:00 PM</span>
                        </div>
                        <div className="hour-item">
                          <span className="day">Saturday</span>
                          <span className="time">10:00 AM – 11:00 PM</span>
                        </div>
                        <div className="hour-item">
                          <span className="day">Sunday</span>
                          <span className="time">10:00 AM – 9:00 PM</span>
                        </div>
                      </div>
                    </div>

                    <div className="emergency-note">
                      <p>
                        <strong>For urgent reservations:</strong> Please call us directly during business hours for immediate assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}