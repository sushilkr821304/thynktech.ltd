
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CancellationAndRefund = () => {
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
                            <li className="breadcrumb-item active text-white" aria-current="page">Cancellation & Refund Policy</li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl text-white">Cancellation & Refund Policy</h1>
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
                                <a href="#scope">Scope & Definitions</a>
                                <a href="#cancellation">Cancellation Window</a>
                                <a href="#eligibility">Refund Eligibility</a>
                                <a href="#nonref">Non‑Refundable Items</a>
                                <a href="#request">How to Request</a>
                                <a href="#processing">Processing Timeline</a>
                                <a href="#partial">Partial Refunds</a>
                                <a href="#chargebacks">Chargebacks</a>
                                <a href="#exceptions">Exceptions</a>
                                <a href="#updates">Policy Updates</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="legal-wrapper">
                            <div id="intro" className="section-block">
                                <h2><i className="fas fa-circle-info"></i> Introduction</h2>
                                <p className="lead-intro">This Cancellation & Refund Policy explains how ThynkTech India handles service cancellations and refunds for our offerings. Our goal is to be transparent and fair while maintaining operational integrity.</p>
                            </div>

                            <div id="scope" className="section-block">
                                <h2><i className="fas fa-briefcase"></i> Scope & Definitions</h2>
                                <p>This policy applies to services, subscriptions, training, and consulting provided directly by ThynkTech India unless your contract states otherwise. “Order Date” means the date payment was confirmed. “Activation” means when access is provisioned or delivery commences.</p>
                            </div>

                            <div id="cancellation" className="section-block">
                                <h2><i className="fas fa-calendar-xmark"></i> Cancellation Window</h2>
                                <ul className="clean-list">
                                    <li>Before Activation: You may cancel anytime prior to activation for a full refund, minus non-recoverable payment gateway fees (if applicable).</li>
                                    <li>After Activation (within 7 days): Eligible for a pro‑rated refund based on usage/delivery, excluding setup and onboarding fees.</li>
                                    <li>After 7 days: Cancellations are accepted, but refunds are generally not available unless mandated by applicable law or specified in a written agreement.</li>
                                </ul>
                            </div>

                            <div id="eligibility" className="section-block">
                                <h2><i className="fas fa-clipboard-check"></i> Refund Eligibility</h2>
                                <ul className="clean-list">
                                    <li>Payment must have been received directly by ThynkTech India and verifiable in our systems.</li>
                                    <li>Only the original payment method will be used for refunds.</li>
                                    <li>Taxes, duties, and third‑party charges may be non‑refundable depending on jurisdiction and provider policies.</li>
                                    <li>Requests must include order reference, payment proof, and a brief reason for cancellation.</li>
                                </ul>
                            </div>

                            <div id="nonref" className="section-block">
                                <h2><i className="fas fa-ban"></i> Non‑Refundable Items</h2>
                                <ul className="clean-list">
                                    <li>Custom development work already delivered or in progress.</li>
                                    <li>One‑time setup, onboarding, or configuration fees.</li>
                                    <li>Third‑party licenses or pass‑through costs.</li>
                                    <li>Training completed or partially attended (unless required by law).</li>
                                    <li>Promotional/discounted offerings explicitly marked as non‑refundable.</li>
                                </ul>
                            </div>

                            <div id="request" className="section-block">
                                <h2><i className="fas fa-file-signature"></i> How to Request a Cancellation/Refund</h2>
                                <p>Please email your request to <a href="mailto:support@thynktech.ltd">support@thynktech.ltd</a> with the subject “Cancellation/Refund Request” and include:</p>
                                <ul className="clean-list">
                                    <li>Order ID, invoice, and payment date</li>
                                    <li>Registered name and contact details</li>
                                    <li>Reason for cancellation and any supporting evidence</li>
                                </ul>
                            </div>

                            <div id="processing" className="section-block">
                                <h2><i className="fas fa-clock"></i> Processing Timeline</h2>
                                <p>Upon receiving a complete request, we typically respond within 5 business days. Approved refunds are generally processed within 7–14 business days, subject to bank/payment gateway timelines.</p>
                            </div>

                            <div id="partial" className="section-block">
                                <h2><i className="fas fa-percent"></i> Partial Refunds</h2>
                                <p>For pro‑rated cases, we calculate based on delivered value, time elapsed, and any irrecoverable costs. Administrative or gateway fees may be deducted where applicable.</p>
                            </div>

                            <div id="chargebacks" className="section-block">
                                <h2><i className="fas fa-credit-card"></i> Chargebacks</h2>
                                <p>If a chargeback is initiated, we may suspend the associated service pending resolution. We will provide documentation to the payment provider to support our case. To avoid delays, please contact us first to resolve any issues.</p>
                            </div>

                            <div id="exceptions" className="section-block">
                                <h2><i className="fas fa-scale-balanced"></i> Exceptions & Legal Rights</h2>
                                <p>Nothing in this policy limits your rights under applicable consumer protection laws. Contractual terms with specific clients may supersede this policy where expressly stated.</p>
                            </div>

                            <div id="updates" className="section-block">
                                <h2><i className="fas fa-pen-nib"></i> Policy Updates</h2>
                                <p>ThynkTech India may update this policy from time to time. Significant changes may be communicated via email or notices on our website. The “Last updated” date will reflect the latest change.</p>
                            </div>

                            <div id="contact" className="section-block">
                                <h2><i className="fas fa-envelope"></i> Contact</h2>
                                <p>For questions related to cancellations or refunds, contact <a href="mailto:support@thynktech.ltd">support@thynktech.ltd</a> or call <a href="tel:+917030730431">+91 7030730431</a>.</p>
                                <p className="notice-box mb-0">All trademarks and logos belong to their respective owners. All rights reserved.</p>
                            </div>

                            <div className="footer-cta">
                                <h3>Need Help With a Refund?</h3>
                                <p className="mb-4">Email us with your order details and we’ll guide you through the process.</p>
                                <a href="mailto:support@thynktech.ltd" className="btn btn-light btn-lg me-2"><i class="fas fa-envelope me-1"></i> Email Support</a>
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

export default CancellationAndRefund;
