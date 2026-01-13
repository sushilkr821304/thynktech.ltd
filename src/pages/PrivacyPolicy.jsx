
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
                            <li className="breadcrumb-item active text-white" aria-current="page">Privacy Policy</li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl text-white">Privacy Policy</h1>
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
                                <a href="#personal-info">Personal Information</a>
                                <a href="#disclosure">Disclosure</a>
                                <a href="#sensitive">Specific Categories</a>
                                <a href="#security">Security, Retention & Cookies</a>
                                <a href="#third-party">Third-Party Sites</a>
                                <a href="#emails">Emails / Newsletters</a>
                                <a href="#marketing">Marketing & Advertisement</a>
                                <a href="#dpo">Data Protection Officer</a>
                                <a href="#rights">User Privileges & Access</a>
                                <a href="#processors">Third-Party Data Processors</a>
                                <a href="#breach">Data Breach</a>
                                <a href="#updates">Updating This Policy</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="legal-wrapper">
                            <div id="intro" className="section-block">
                                <h2><i className="fas fa-user-shield"></i> Introduction</h2>
                                <p className="lead-intro">ThynkTech India has created this privacy statement to demonstrate our commitment to privacy. We understand you trust us with your personal information and we implement appropriate security measures to protect against loss, misuse, and alteration.</p>
                            </div>

                            <div id="personal-info" className="section-block">
                                <h2><i className="fas fa-id-card"></i> Personal Information We Collect</h2>
                                <p>You can visit ThynkTech India online without revealing any information about yourself. The website collects only information you voluntarily provide (for example via feedback forms or email). To deliver relevant content and services, we may request the following personal information:</p>
                                <ul className="clean-list">
                                    <li>Full name</li>
                                    <li>Email ID</li>
                                    <li>Telephone number</li>
                                    <li>Country</li>
                                    <li>Digital identifiers such as ISP, IP address, browser type, OS, device details</li>
                                    <li>Metadata such as location, cookies, time on pages, pages viewed, and access timing</li>
                                </ul>
                                <p>If you choose not to provide certain information, we may be unable to serve your request. ThynkTech India does not use personal information to make automated decisions.</p>
                            </div>

                            <div id="disclosure" className="section-block">
                                <h2><i className="fas fa-share"></i> Disclosure of Personal Information</h2>
                                <p>ThynkTech India does not share your personal information with third parties for marketing purposes without your prior consent. We will seek consent before using or sharing personal information for purposes beyond the original collection intent. We may share data within our organization for processing, storage, or to provide requested services—subject to contractual data privacy obligations.</p>
                            </div>

                            <div id="sensitive" className="section-block">
                                <h2><i className="fas fa-triangle-exclamation"></i> Specific Categories of Personal Information</h2>
                                <p>ThynkTech India does not request the following sensitive categories unless required by law (e.g., a court case):</p>
                                <ul className="clean-list">
                                    <li>Racial information</li>
                                    <li>Political, religious, or philosophical beliefs</li>
                                    <li>Genetic or biometric information</li>
                                    <li>Health, mortality, or sex-related information</li>
                                </ul>
                            </div>

                            <div id="security" className="section-block">
                                <h2><i className="fas fa-lock"></i> Data Security, Retention, and Cookies</h2>
                                <p>We employ appropriate administrative, technical, and organizational safeguards to protect your personal information. ThynkTech India may retain your information where there is a legitimate business need or as required by applicable laws.</p>
                                <p>If you register with any of our services, we may use cookies to enhance your experience. A cookie is a small data element stored on your device to recognize you upon return. Registering online with our services indicates your consent to receive such cookies.</p>
                            </div>

                            <div id="third-party" className="section-block">
                                <h2><i className="fas fa-up-right-from-square"></i> Third-Party Sites</h2>
                                <p>ThynkTech India is not responsible for the privacy practices or content of third-party websites linked from this site. Third-party logos, brands, and names on this website are the property of their respective owners. We may link to third-party services; however, their policies apply when you visit them.</p>
                            </div>

                            <div id="emails" className="section-block">
                                <h2><i className="fas fa-envelope-open-text"></i> Emails / Newsletters</h2>
                                <p>We may use your email address to share news and updates via a secure email marketing provider. We currently use the third-party data processor ActiveTrail. Your email information may also be stored in our backend systems and CRM.</p>
                            </div>

                            <div id="marketing" className="section-block">
                                <h2><i className="fas fa-bullhorn"></i> Marketing & Advertisement</h2>
                                <p>We may display personalized or targeted online advertisements on Google-owned and associated sites based on your interactions with our site and services. We do not share your personal information with third-party advertising agencies. Advertisers may infer audiences based on interactions. Some parties may provide us with aggregated demographic or placement data which we use to improve relevance.</p>
                            </div>

                            <div id="dpo" className="section-block">
                                <h2><i className="fas fa-user-tie"></i> Data Protection Officer</h2>
                                <p>ThynkTech India has appointed a Data Protection Officer (DPO) familiar with our internal data privacy practices. You may contact the DPO for any queries.</p>
                                <p className="mb-1"><strong>Address:</strong> ThynkTech India, Trios, Indialand, Behind Grand Hightstreet Mall, Ravij Gandhi Tech Park, Hinjewadi Phase 1, Pune 411057, MH, India</p>
                                <p className="mb-1"><strong>Email:</strong> <a href="mailto:support@thynktech.ltd">support@thynktech.ltd</a></p>
                                <p className="mb-0"><strong>Contact:</strong> <a href="tel:+917030730431">+91 7030730431</a></p>
                            </div>

                            <div id="rights" className="section-block">
                                <h2><i className="fas fa-scale-balanced"></i> User Privileges and Access</h2>
                                <p>Upon verification, ThynkTech India will provide requested information within 30 days (or earlier if required by law via official email to <a href="mailto:support@thynktech.ltd">support@thynktech.ltd</a>). If we cannot fulfill a request earlier, we will communicate an expected timeframe. You may request:</p>
                                <ul className="clean-list">
                                    <li>What personal information about you is under processing</li>
                                    <li>Who has access rights to this information</li>
                                    <li>Authentication/rectification of personal information</li>
                                    <li>Deletion of personal information unless required by law (e.g., court case)</li>
                                </ul>
                            </div>

                            <div id="processors" className="section-block">
                                <h2><i className="fas fa-diagram-project"></i> Third-Party Data Processors</h2>
                                <p>We use reputable third-party processors that comply with applicable regulations (including EU GDPR 2018) for various services, including:</p>
                                <ul className="clean-list">
                                    <li>Google (Privacy Policy)</li>
                                    <li>ActiveTrail (Privacy Policy)</li>
                                    <li>Microsoft 365 / Office 365 (Security & Compliance)</li>
                                    <li>Tawk.to (Privacy Policy)</li>
                                </ul>
                            </div>

                            <div id="breach" className="section-block">
                                <h2><i className="fas fa-bell"></i> Data Breach</h2>
                                <p>In the event of a personal data breach impacting our website or third-party processors, we will notify relevant authorities within 72 hours where required by law.</p>
                            </div>

                            <div id="updates" className="section-block">
                                <h2><i className="fas fa-pen-nib"></i> Updating This Privacy Policy</h2>
                                <p>ThynkTech India may change or update this statement at any time. When updated, the “Last updated” date at the top of this page will reflect the change. For material updates, we may notify you by email or provide a notice on our home page. Please review this policy periodically at <a href="https://www.thynktech.ltd" target="_blank" rel="noopener noreferrer">www.thynktech.ltd</a>.</p>
                            </div>

                            <div id="contact" className="section-block">
                                <h2><i className="fas fa-envelope"></i> Contact</h2>
                                <p>If you have any questions about this Privacy Policy, our practices, or your dealings with this website, please contact <a href="mailto:support@thynktech.ltd">support@thynktech.ltd</a>.</p>
                                <p className="notice-box mb-0">All other trademarks and logos belong to their respective owners. All rights reserved.</p>
                            </div>

                            <div className="footer-cta">
                                <h3>Need Help With Your Data?</h3>
                                <p className="mb-4">We’re here to help with access, correction, or deletion requests.</p>
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

export default PrivacyPolicy;
