import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { ArrowLeft, ExternalLink, MessageCircle } from 'lucide-react';

const ProductDetail = () => {
    const { slug } = useParams();
    const product = products.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="font-sans text-gray-900 antialiased min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-primary mb-4">Product Not Found</h2>
                        <Link to="/" className="text-secondary hover:underline flex items-center justify-center gap-2">
                            <ArrowLeft size={20} /> Return Home
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const isExternal = product.link && product.link !== '#';

    return (
        <div className="font-sans text-gray-900 antialiased bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-primary text-white overflow-hidden min-h-[500px] flex items-center">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 w-full" data-aos="fade-right">
                            <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
                                <ArrowLeft size={16} /> Back to Home
                            </Link>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                                {product.description}
                            </p>
                            <div className="flex flex-wrap gap-5">
                                {isExternal ? (
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-secondary hover:bg-white hover:text-primary text-white font-bold rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,180,216,0.3)] inline-flex items-center gap-2"
                                    >
                                        Visit Website <ExternalLink size={20} />
                                    </a>
                                ) : (
                                    <Link
                                        to="/contact"
                                        className="px-8 py-4 bg-secondary hover:bg-white hover:text-primary text-white font-bold rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,180,216,0.3)] inline-flex items-center gap-2"
                                    >
                                        Enquire Now <MessageCircle size={20} />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full flex justify-center" data-aos="fade-left">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full relative group">
                                <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 blur-[120px] rounded-full -mr-20"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -ml-10"></div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-primary mb-6">About {product.name}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>
                        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-primary mb-2">Key Highlights</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                                    <span className="text-gray-700">Enterprise-grade reliability and scalability</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                                    <span className="text-gray-700">Seamless integration capabilities</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                                    <span className="text-gray-700">24/7 Dedicated support from ThynkTech</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductDetail;
