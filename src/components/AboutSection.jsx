import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="relative w-full min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image - Professionally Cropped */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/images/team-hero.jpg"
                    alt="ThynkTech Team"
                    className="w-full h-full object-cover object-[center_65%]" // Focused on faces, cropping ceiling/floor
                />
                {/* Soft Dark Gradient Overlay - Left to Right for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 py-10">
                <div className="max-w-3xl pl-4 md:pl-8 border-l-4 border-blue-500/0 -mt-8" data-aos="fade-right">

                    {/* Small Tag */}
                    <div className="inline-block px-3 py-1 mb-4 rounded-md bg-white/10 backdrop-blur-md border border-white/20">
                        <span className="text-white font-bold tracking-widest text-xs uppercase">ABOUT THYNKTECH</span>
                    </div>

                    {/* Big Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-sm">
                        About ThynkTech India
                    </h2>

                    {/* Sub-heading */}
                    <h3 className="text-xl md:text-2xl text-blue-100 font-medium mb-6 leading-relaxed">
                        Building world-class digital products with passion, people, and technology.
                    </h3>

                    {/* Description - Unchanged Content */}
                    <div className="text-gray-200 text-lg leading-relaxed space-y-4">
                        <p>
                            ThynkTech India is a product-driven IT company focused on building enterprise software, cloud platforms, SaaS products, and digital ecosystems that help businesses scale faster and operate smarter.
                        </p>
                        <p>
                            Since 2007, our teams have delivered secure, high-performance, and future-ready solutions across fintech, enterprise, education, and digital platforms.
                        </p>
                        <p className="text-white font-medium border-l-4 border-[#3498DB] pl-4">
                            We are driven by engineering excellence, ownership, and continuous innovation.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="#products"
                            className="px-8 py-3.5 bg-[#3498DB] text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                        >
                            Explore Our Journey
                        </a>
                        <a
                            href="#team"
                            className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-[#002B5C] transition-all duration-300 hover:border-white"
                        >
                            Meet Our Team
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
