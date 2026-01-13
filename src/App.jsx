import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CancellationAndRefund from './pages/CancellationAndRefund';
import ShippingAndDelivery from './pages/ShippingAndDelivery';
import ServiceDetail from './pages/ServiceDetail';
import HireDeveloper from './pages/HireDeveloper';

// New Pages
import ProductDetail from './pages/ProductDetail';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import WhyThynkTech from './pages/WhyThynkTech';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import LifeAtThynkTech from './pages/LifeAtThynkTech';
import JobListingPage from './pages/JobListingPage';
import JobDetailsPage from './pages/JobDetailsPage';
import ApplicationPage from './pages/ApplicationPage';
import EngineeringRolePage from './pages/EngineeringRolePage';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Product Routes */}
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:slug" element={<ProductDetail />} />

                {/* Service Routes */}
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:id" element={<ServiceDetail />} />

                {/* About Routes */}
                <Route path="/about" element={<AboutPage />} /> {/* Now acts as main About Page */}
                <Route path="/about/:section" element={<AboutPage />} />
                <Route path="/why-thynktech" element={<WhyThynkTech />} />
                <Route path="/about/life-at-thynktech" element={<LifeAtThynkTech />} />

                {/* Engineering Routes */}
                <Route path="/engineering/:roleId" element={<EngineeringRolePage />} />


                {/* Career Routes */}
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/careers/jobs" element={<JobListingPage />} />
                <Route path="/careers/jobs/:id" element={<JobDetailsPage />} />
                <Route path="/careers/apply/:id" element={<ApplicationPage />} />
                <Route path="/hire" element={<Navigate to="/careers" replace />} /> {/* Redirect old hire to careers */}
                <Route path="/hire/:developerType" element={<HireDeveloper />} /> {/* Keep for legacy external links if any */}

                {/* Contact Route */}
                <Route path="/contact" element={<ContactPage />} />

                {/* Legal Routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/cancellation-refund" element={<CancellationAndRefund />} />
                <Route path="/cancellation-and-refund" element={<Navigate to="/cancellation-refund" replace />} />
                <Route path="/shipping-delivery" element={<ShippingAndDelivery />} />
                <Route path="/shipping-and-delivery" element={<Navigate to="/shipping-delivery" replace />} />
            </Routes>
        </>
    );
}

export default App;
