import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-gray-900 antialiased">
            <Navbar />
            <div className="pt-20">
                <ServicesSection />
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
