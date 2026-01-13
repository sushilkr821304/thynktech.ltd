import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductCard = ({ product, isLink = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const CardContent = (
        <div className={`bg-white rounded-2xl overflow-hidden h-full flex flex-col border border-gray-100 relative transition-all duration-500
            ${product.isLive
                ? 'shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] group cursor-pointer hover:border-accent/20'
                : 'shadow-[0_5px_20px_rgba(0,0,0,0.03)] cursor-default grayscale-[0.3] opacity-90'}`}>

            {/* Top Accent Line / Glow */}
            {(() => {
                const brandColors = {
                    'Udaan Digital News': 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]',
                    'ThynkChat Ai ChatBot': 'bg-gray-900 shadow-[0_0_15px_rgba(17,24,39,0.5)]',
                    'Retail Billing': 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]',
                    'SmartBiz Sakhi Store': 'bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]',
                    'KrushiKranti Kisan Market': 'bg-green-600 shadow-[0_0_15px_rgba(22,163,74,0.5)]',
                    'UrbanRide': 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]',
                    'Dairy Delights': 'bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]',
                    'Unique t Fabric India': 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
                    'EasyPay': 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]',
                    'Classic Cuts': 'bg-purple-700 shadow-[0_0_15px_rgba(126,34,206,0.5)]',
                    'Shubh Vivah': 'bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
                    'Eggcellent Choice': 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]',
                };

                const hoverClass = brandColors[product.name];
                const shouldShowHover = !!hoverClass;

                return (
                    <div className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 z-20 
                        ${shouldShowHover
                            ? `opacity-30 group-hover:opacity-100 ${hoverClass.split(' ')[0]} group-hover:${hoverClass.split(' ')[1]}`
                            : 'bg-gray-200 opacity-50'
                        }
                    `}></div>
                );
            })()}
            {/* Live Badge */}
            {product.isLive && ['Udaan Digital News', 'ThynkChat Ai ChatBot', 'Retail Billing', 'SmartBiz Sakhi Store', 'KrushiKranti Kisan Market', 'UrbanRide'].includes(product.name) && (
                <div className="absolute top-5 right-5 z-30">
                    <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_4px_12px_rgba(0,43,92,0.3)] border border-white/10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        LIVE
                    </span>
                </div>
            )}

            {/* Image Wrapper - Ultra-tightened gap */}
            <div className={`relative w-full ${isLink ? 'pt-[78%]' : 'pt-[63%]'} overflow-hidden bg-white ${isLink ? 'px-4 pt-4 pb-0' : 'px-6 pt-6 pb-0'}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={`absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-contain transition-transform duration-400 
                        ${product.isLive ? 'group-hover:scale-110' : ''}`}
                />
            </div>

            {/* Card Body - Zero top padding */}
            <div className="px-6 pb-6 pt-0 flex-1 flex flex-col items-center text-center">
                <h5 className="text-xl font-bold text-primary mb-3">
                    {product.name}
                </h5>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] mb-4' : 'max-h-16 mb-2'}`}>
                    <p className={`text-gray-600 text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                        {product.description}
                    </p>
                </div>
                <div className="mt-auto">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        className="text-secondary hover:text-primary font-semibold text-sm transition-colors focus:outline-none cursor-pointer"
                        aria-expanded={isExpanded}
                    >
                        {isExpanded ? 'See less' : 'See more'}
                    </button>
                </div>
            </div>
        </div>
    );

    if (isLink) {
        const isExternal = product.link && product.link.startsWith('http');

        if (isExternal) {
            return (
                <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                >
                    {CardContent}
                </a>
            );
        }

        return (
            <Link
                to={`/products/${product.slug}`}
                className="block h-full group"
            >
                {CardContent}
            </Link>
        );
    }

    return CardContent;
};

const ProductsSection = () => {
    // Row 1: Live Products (Ids 1-4)
    const row1Products = products.filter(p => [1, 2, 3, 4].includes(p.id));

    // Row 2: Featured Products (UrbanRide id 9, KrushiKranti id 5, Shubh Vivah id 11, Eggcellent Choice id 12)
    const row2Products = products.filter(p => [9, 5, 11, 12].includes(p.id));

    // Row 3: Other Non-Live (Classic Cuts id 10, Dairy Delights id 6, Unique t Fabric id 7, EasyPay id 8)
    const row3Products = products.filter(p => [10, 6, 7, 8].includes(p.id));

    return (
        <section id="products" className="pt-0 pb-24 bg-gradient-to-b from-[rgba(0,43,92,0.03)] to-[rgba(0,43,92,0.07)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Our Featured Products
                    </h2>
                    <p className="text-lg text-gray-600">
                        Innovative solutions designed to transform your business and life.
                    </p>
                </div>

                {/* Row 1: LIVE Products */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {row1Products.map((product, index) => (
                        <div key={product.id} data-aos="fade-up" data-aos-delay={index * 50}>
                            <ProductCard product={product} isLink={true} />
                        </div>
                    ))}
                </div>

                {/* Row 2: Featured Products */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {row2Products.map((product, index) => (
                        <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <ProductCard product={product} isLink={true} />
                        </div>
                    ))}
                </div>

                {/* Row 3: Other Non-Live */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {row3Products.map((product, index) => (
                        <div key={product.id} data-aos="fade-up" data-aos-delay={index * 50}>
                            <ProductCard product={product} isLink={true} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
