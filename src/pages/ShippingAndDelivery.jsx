
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShippingAndDelivery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans">
            <header className="page-header">
                <div className="container mx-auto px-4">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-3 flex space-x-2 text-white/50">
                            <li className="breadcrumb-item"><Link to="/" className="text-white/50 hover:text-white">Home</Link></li>
                            <li className="breadcrumb-item">/</li>
                            <li className="breadcrumb-item active text-white" aria-current="page">Shipping & Delivery Policy</li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl text-white">Shipping & Delivery Policy</h1>
                    <p className="meta mb-0 text-white/90 mt-2">Last updated: November 8, 2025</p>
                </div>
            </header>

            <main className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="toc-box sticky top-24">
                            <h5><i className="fas fa-list-ul me-1"></i>Quick Navigation</h5>
                            <div className="space-y-1">
                                <a href="#intro">Introduction</a>
                                <a href="#scope">Scope & Coverage</a>
                                <a href="#preorder">Pre‑Order Consultation</a>
                                <a href="#delivery">Service Delivery Terms</a>
                                <a href="#pricing">Pricing & Delivery Fees</a>
                                <a href="#dispatch">Dispatch & Delays</a>
                                <a href="#issues">Missing or Damaged Items</a>
                                <a href="#downloads">Downloadable Software Delivery</a>
                                <a href="#license">License Keys</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="legal-wrapper">
                            <div id="intro" className="section-block">
                                <h2><i className="fas fa-globe"></i> Introduction</h2>
                                <p className="lead-intro">ThynkTech India delivers software products and services worldwide, including custom software development, online website development, customized website designing, and related offerings.</p>
                                <p>Please contact us before placing an order for software products so we can discuss your needs and confirm feasibility and timelines.</p>
                            </div>

                            <div id="scope" className="section-block">
                                <h2><i className="fas fa-layer-group"></i> Scope & Coverage</h2>
                                <p>All software services and products are provided in accordance with customer requirements. If any aspect is found to be non‑compliant with the agreed scope after delivery, please email <a href="mailto:support@thynktech.ltd">support@thynktech.ltd</a> and we will review promptly.</p>
                            </div>

                            <div id="preorder" className="section-block">
                                <h2><i className="fas fa-comments"></i> Pre‑Order Consultation</h2>
                                <p>The price of a software product depends on the specific service or application chosen based on your requirements. We will provide a price breakdown for your confirmation. Delivery and packaging fees for our products are included in the final checkout price.</p>
                                <p className="notice-box mb-0">If your order is urgent, contact us first to confirm delivery for your requested date before placing your order.</p>
                            </div>

                            <div id="delivery" className="section-block">
                                <h2><i className="fas fa-truck"></i> Service Delivery Terms</h2>
                                <p>We endeavor to dispatch all orders or deliver applications within the stated time limits. In unpredictable circumstances, delivery may be delayed as we rely on third‑party couriers for shipping. While we strive to keep our commitments, we cannot be held responsible for delays caused by courier service failures.</p>
                            </div>

                            <div id="pricing" className="section-block">
                                <h2><i className="fas fa-receipt"></i> Pricing & Delivery Fees</h2>
                                <p>Pricing is based on the selected service or application and will be shared for your approval. Any delivery or packaging fees (if applicable) are already included in the final checkout price.</p>
                            </div>

                            <div id="dispatch" className="section-block">
                                <h2><i className="fas fa-stopwatch"></i> Dispatch & Delays</h2>
                                <p>If your parcel doesn’t arrive when expected, please contact us and we will coordinate with the courier and update you. Report goods damaged upon receipt within seven (7) days of delivery so we can assist you.</p>
                            </div>

                            <div id="downloads" className="section-block">
                                <h2><i className="fas fa-download"></i> Downloadable Software Delivery</h2>
                                <p>Most software we provide is downloadable and involves no physical shipping. For services, delivery timelines may vary by product or engagement. Software download orders are fulfilled via a separate email confirmation including download links and instructions.</p>
                            </div>

                            <div id="license" className="section-block">
                                <h2><i className="fas fa-key"></i> License Keys</h2>
                                <p>Some items require a license key. We may request technical details such as the host ID of the target computer to generate the key. Once received, your license key will be generated and shared with you promptly.</p>
                            </div>

                            <div id="contact" className="section-block">
                                <h2><i className="fas fa-envelope"></i> Contact</h2>
                                <p>For shipping or delivery questions, please email <a href="mailto:support@thynktech.ltd">support@thynktech.ltd</a>. We’re happy to help.</p>
                            </div>

                            <div className="footer-cta">
                                <h3>Need Delivery Assistance?</h3>
                                <p className="mb-4">Share your order details and we’ll provide the latest delivery status.</p>
                                <a href="mailto:support@thynktech.ltd" className="btn btn-light btn-lg me-2"><i className="fas fa-envelope me-1"></i> Email Support</a>
                                <Link to="/" className="btn btn-outline-light btn-lg"><i className="fas fa-home me-1"></i> Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" className="btn btn-primary back-home"><i className="fas fa-arrow-left"></i></Link>
            </main>

            <footer className="text-center py-4 small text-muted">
                © 2025 ThynkTech India. All rights reserved.
            </footer>
        </div>
    );
};

export default ShippingAndDelivery;
