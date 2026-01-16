import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import CareersSection from '../components/CareersSection';
import FounderSection from '../components/FounderSection';
import EngineersSection from '../components/EngineersSection';
import SalesSection from '../components/SalesSection';

const AboutPage = () => {
    // The previous dynamic routing is replaced by a single comprehensive page as requested below 'About Page' requirement
    // But user also asked for individual dynamic pages.
    // However, for "About Page" specifically, the prompt lists: About Company, Stats, Founder, Leadership, Engineers, Sales.
    // This implies one long page or sections corresponding to the nav.
    // Since the navbar links to /about, /about/team etc, we should probably stick to the routing or render all if it's the main about page.
    // Let's render ALL sections for the main view to satisfy "About Page ... must be included here".

    // Actually, looking at the App.jsx, /about redirects to /about/company.
    // And /about/:section renders AboutPage.
    // So we need to handle the section prop or just render everything if it's "company" or specific parts?
    // The user requirement says "About Page" (singular) lists all these.
    // So it's better to make /about render ALL of them, and scrollTo the specific section if needed.

    // Let's use useParams.
    const { section } = useParams();
    const location = useLocation();

    useEffect(() => {
        const scrollToSection = () => {
            let targetId = section;

            // Check hash availability if no section param or to override
            if (location.hash) {
                targetId = location.hash.replace('#', '');
            }
            // Map legacy/user-requested IDs to actual component IDs
            if (targetId === 'engineering-team' || targetId === 'engineers') targetId = 'engineering-teams';

            if (targetId) {
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    // Retry once for dynamic content
                    setTimeout(() => {
                        const elRetry = document.getElementById(targetId);
                        if (elRetry) elRetry.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            } else {
                window.scrollTo(0, 0);
            }
        };

        // Delay slightly to ensure page load/render
        setTimeout(scrollToSection, 100);
    }, [section, location.hash]);

    return (
        <div className="font-sans text-gray-900 antialiased">
            <Navbar />
            <div className="pt-20 min-h-screen bg-gray-50">
                {/* We render ALL sections in order as requested */}
                <div id="company">
                    <AboutSection />
                </div>
                <div id="founder">
                    <FounderSection />
                </div>
                <div id="team">
                    <TeamSection />
                </div>
                <div id="engineering-teams">
                    <EngineersSection />
                </div>
                <div id="sales">
                    <SalesSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
