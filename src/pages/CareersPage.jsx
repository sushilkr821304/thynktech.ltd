import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CareersHero from '../components/careers/CareersHero';
import CareerCategories from '../components/careers/CareerCategories';
import WhyWeDoIt from '../components/careers/WhyWeDoIt';
import BenefitsSection from '../components/careers/BenefitsSection';

const CareersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-gray-900 antialiased bg-white">
            <Navbar />
            <div className="pt-20">
                <CareersHero />
                <CareerCategories />
                <WhyWeDoIt />
                <BenefitsSection />
            </div>
            <Footer />
        </div>
    );
};

export default CareersPage;
