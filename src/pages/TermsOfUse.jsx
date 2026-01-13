
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
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
                            <li className="breadcrumb-item active text-white" aria-current="page">Terms of Use</li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl text-white">Terms of Use</h1>
                    <p className="meta mb-0 text-white/90 mt-2">Please read these Terms carefully before using our website.</p>
                </div>
            </header>

            <main className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="toc-box sticky top-24">
                            <h5><i className="fas fa-list-ul me-1"></i>Quick Navigation</h5>
                            <div className="space-y-1">
                                <a href="#acceptance">Acceptance</a>
                                <a href="#information">Information & Links</a>
                                <a href="#jurisdiction">Jurisdiction & Submissions</a>
                                <a href="#ideas">Unauthorized Ideas</a>
                                <a href="#relationships">Business Relationships</a>
                                <a href="#termination">Termination</a>
                                <a href="#license">Limited License</a>
                                <a href="#documents">Documents Use</a>
                                <a href="#ip">Intellectual Property</a>
                                <a href="#blogs">Blogs & Conduct</a>
                                <a href="#thirdparty">Third-Party Content</a>
                                <a href="#warranties">No Warranties</a>
                                <a href="#damages">Limitation of Damages</a>
                                <a href="#legaluse">Legal Use</a>
                                <a href="#indemnity">Indemnity</a>
                                <a href="#changes">Changes</a>
                                <a href="#disclaimers">Disclaimers</a>
                                <a href="#copyright">Copyright</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="legal-wrapper">
                            <div id="acceptance" className="section-block">
                                <h2><i className="fas fa-check-circle"></i> Acceptance of Terms</h2>
                                <p className="lead-intro">By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws. If you do not agree, do not use or download any information from this site.</p>
                                <p>The following terms and conditions apply to your use of this website without limitation or qualification. Visiting or downloading materials from this site constitutes acceptance of these terms.</p>
                            </div>

                            <div id="information" className="section-block">
                                <h2><i className="fas fa-info-circle"></i> Information & External Links</h2>
                                <p>All information provided here is free of charge and for informational purposes only. It does not create any business relationship between you and ThynkTech India. External links may lead to third-party sites beyond our control. No warranty is made with respect to those links or their services; use them at your own risk.</p>
                            </div>

                            <div id="jurisdiction" className="section-block">
                                <h2><i className="fas fa-gavel"></i> Jurisdiction & Submissions</h2>
                                <p>You are solely responsible for complying with the laws of the jurisdiction from which you access this site. Do not submit highly confidential information unless expressly requested. All data you submit is presumed legally usable unless stated otherwise.</p>
                            </div>

                            <div id="ideas" className="section-block">
                                <h2><i className="fas fa-lightbulb"></i> Unauthorized Ideas</h2>
                                <p>We do not accept unsolicited ideas from outside non-business associations. Any such submissions may be disregarded or destroyed. We hold no obligation regarding unauthorized data.</p>
                            </div>

                            <div id="relationships" className="section-block">
                                <h2><i className="fas fa-handshake"></i> Business Relationships</h2>
                                <p>ThynkTech India maintains professional relationships with multiple entities including customers, suppliers, and partners. Terms such as "joint venture", "partnership" or "partner" signify collaboration in common interest areas and do not denote precise legal relationships unless explicitly stated.</p>
                            </div>

                            <div id="termination" className="section-block">
                                <h2><i className="fas fa-ban"></i> Termination</h2>
                                <p>We reserve the right, at our sole discretion and without notice, to restrict or terminate access to the website for any person, geography, or jurisdiction at any time.</p>
                            </div>

                            <div id="license" className="section-block">
                                <h2><i className="fas fa-key"></i> Limited License</h2>
                                <p>While accessing the website, you agree not to interfere with its functioning. You shall not copy, modify, or reproduce any service, product, or solution information from this site without authorization.</p>
                            </div>

                            <div id="documents" className="section-block">
                                <h2><i className="fas fa-file-lines"></i> Documents Usage</h2>
                                <p>You may download, view, copy, and print documents from the site only if:</p>
                                <ul className="clean-list">
                                    <li>They are used solely for personal, informational, non-commercial purposes.</li>
                                    <li>They are not modified or altered in any way.</li>
                                    <li>Use beyond fair use requires prior written authorization from ThynkTech India.</li>
                                    <li>Unless otherwise stated, all content belongs to ThynkTech India and referenced trademarks are property of respective owners.</li>
                                </ul>
                            </div>

                            <div id="ip" className="section-block">
                                <h2><i className="fas fa-shield-alt"></i> Intellectual Property & Logos</h2>
                                <p>Elements of this website are protected by copyright and other laws. They may not be copied or imitated (in whole or part). No logo, graphic, sound, or image may be retransmitted unless expressly permitted. All trademarks and logos remain the property of their respective owners.</p>
                            </div>

                            <div id="blogs" className="section-block">
                                <h2><i className="fas fa-blog"></i> Blogs & User Conduct</h2>
                                <p>Blogs may express individual opinions which do not represent official positions of ThynkTech India. We retain copyright to all blog content. Your participation (comments/feedback) must not:</p>
                                <ul className="clean-list">
                                    <li>Defame or abuse the organization or any third party.</li>
                                    <li>Violate legal rights of the organization.</li>
                                    <li>Use derogatory or objectionable statements.</li>
                                    <li>Upload harmful files (viruses, worms, malware).</li>
                                    <li>Upload files you are not legally entitled to share.</li>
                                </ul>
                                <p className="notice-box"><strong>Security Notice:</strong> Ensure adequate precautions while downloading any content. ThynkTech India is not liable for harm caused by inadequate user-side protection.</p>
                            </div>

                            <div id="thirdparty" className="section-block">
                                <h2><i className="fas fa-share-nodes"></i> Third-Party Content</h2>
                                <p>This site may furnish third-party articles, reports, or data. Such content is not created or endorsed by us and is provided for general information only. We make no guarantees on completeness or accuracy. External links do not imply sponsorship, affiliation, or authorization regarding displayed intellectual property.</p>
                            </div>

                            <div id="warranties" className="section-block">
                                <h2><i className="fas fa-exclamation-triangle"></i> No Warranties</h2>
                                <p>This website, its materials, and any software are provided "as is" without warranties of any kind, express or implied. We cannot guarantee the site will be virus-free despite best efforts.</p>
                            </div>

                            <div id="damages" className="section-block">
                                <h2><i className="fas fa-bomb"></i> Limitation of Damages</h2>
                                <p>In no event shall ThynkTech India be liable for any direct, indirect, special, consequential, or other damages related to use or inability to use this site or any linked site, even if advised of the possibility of such damages.</p>
                            </div>

                            <div id="legaluse" className="section-block">
                                <h2><i className="fas fa-scale-balanced"></i> Legal Use</h2>
                                <p>You agree not to use the website for unlawful purposes or in ways that could damage ThynkTech India infrastructure. Attempts to gain unauthorized access to servers or information are strictly prohibited.</p>
                            </div>

                            <div id="indemnity" className="section-block">
                                <h2><i className="fas fa-shield-heart"></i> Indemnity</h2>
                                <p>You agree to indemnify and hold harmless ThynkTech India from any claim, expense, loss, or liability arising from misuse of this website.</p>
                            </div>

                            <div id="changes" className="section-block">
                                <h2><i className="fas fa-pen-nib"></i> Changes</h2>
                                <p>We reserve the right to modify these Terms of Use partially or wholly at any time and to discontinue or limit your access without prior notice.</p>
                            </div>

                            <div id="disclaimers" className="section-block">
                                <h2><i className="fas fa-triangle-exclamation"></i> Disclaimers</h2>
                                <p>This website may contain typographical or clerical errors. We disclaim obligations to update content and do not warrant accuracy or completeness. Reliance on content is solely at your own risk. Content is informational only and not technical advice.</p>
                            </div>

                            <div id="copyright" className="section-block">
                                <h2><i className="fas fa-copyright"></i> Copyright Notice</h2>
                                <p>Unless otherwise stated, all content on this website is © ThynkTech India. Unauthorized reproduction or distribution is prohibited.</p>
                            </div>

                            <div id="contact" className="section-block">
                                <h2><i className="fas fa-envelope-open-text"></i> Contact Information</h2>
                                <p>If you have any questions regarding these Terms of Use, please contact: <a href="mailto:support@thynktech.ltd">support@thynktech.ltd</a></p>
                            </div>

                            <div className="footer-cta">
                                <h3>Need Clarification?</h3>
                                <p className="mb-4">Reach out to us for any questions about these Terms or permissible usage.</p>
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

export default TermsOfUse;
