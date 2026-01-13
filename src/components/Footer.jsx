
import React from 'react';
import { Link } from 'react-router-dom';
import GlobalCTA from './GlobalCTA';

const Footer = () => {
    return (
        <>
            <GlobalCTA />
            <footer className="footer">
                <div className="footer-container">
                    {/* LEFT */}
                    <div className="footer-about">
                        <div className="logo">
                            <Link to="/">
                                <img
                                    src="/images/footer_logo.png"
                                    alt="Thynk Tech India"
                                    className="footer-logo-img"
                                />
                            </Link>
                        </div>
                        {/* <p>
                        Thynk Tech India is a leading technology solutions company delivering innovative, scalable, and customer-centric digital products. Since 2007, we have been empowering businesses with cutting-edge software, AI-driven solutions, and enterprise-grade systems—built by a passionate team committed to excellence, trust, and long-term partnerships.
                    </p> */}

                        <div className="social-icons">
                            <a href="https://www.facebook.com/thynktechindia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://x.com/thynktechindia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/thynk-tech-india" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/thynktechindia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* COMPANY */}
                    <div className="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About company</Link></li>
                            <li><Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Company services</Link></li>
                            <li><Link to="/careers" style={{ color: 'inherit', textDecoration: 'none' }}>Job opportunities</Link></li>
                            <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact us</Link></li>
                        </ul>
                    </div>

                    {/* CUSTOMER */}
                    <div className="footer-links">
                        <h3></h3>
                        <ul>
                            <li><Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link></li>
                            <li><Link to="/terms-of-use" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</Link></li>
                            <li><Link to="/cancellation-refund" style={{ color: 'inherit', textDecoration: 'none' }}>Cancellation & Refund</Link></li>
                            <li><Link to="/shipping-delivery" style={{ color: 'inherit', textDecoration: 'none' }}>Shipping & Delivery</Link></li>
                            <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>Who we are</Link></li>
                        </ul>
                    </div>

                    {/* SUBSCRIBE */}
                    <div className="footer-subscribe">
                        <h3>Subscribe Now</h3>
                        <p>Enter your email address for receiving valuable newsletters.</p>

                        <div className="subscribe-box">
                            <input type="email" placeholder="Enter your email address" />
                            <button>
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="footer-bottom">
                    © Copyright 2025 - ThynkTech India, All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
