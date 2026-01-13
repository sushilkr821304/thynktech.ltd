import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsSection from '../components/ProductsSection';

const ProductsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-gray-900 antialiased">
            <Navbar />
            <div className="pt-20">
                <ProductsSection />
            </div>
            <Footer />
        </div>
    );
};

export default ProductsPage;
