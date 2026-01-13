import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {

    return (
        <div className="font-sans text-gray-900 antialiased">
            <Navbar />
            <div className="pt-20"> {/* Standard padding for fixed navbar */}
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
