import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="relative w-full min-h-[500px] md:min-h-[650px] flex items-center overflow-hidden py-12 md:py-0">
            {/* Background Image with Premium Polish */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/images/frontend/team1.jpg"
                    alt="ThynkTech India Team"
                    className="w-full h-full object-cover object-[center_60%]"
                />
                {/* Multi-layered Premium Overlay - Pointer events none for button clickability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#000F21]/95 via-[#000F21]/80 md:via-[#000F21]/40 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000F21]/70 via-transparent to-transparent md:hidden pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl" data-aos="fade-right">



                    {/* Professional Typography Stack */}
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md">
                        About <span className="text-[#3498DB]">ThynkTech</span> India
                    </h2>

                    <h3 className="text-xl md:text-2xl text-blue-100/90 font-medium mb-8 leading-relaxed max-w-2xl border-l-2 border-blue-500/50 pl-6 italic md:not-italic">
                        Building world-class digital products with passion, people, and technology.
                    </h3>

                    {/* Enterprise-grade Description */}
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-6 max-w-2xl mb-6 font-light">
                        <p>
                            ThynkTech India is a product-driven IT powerhouse focused on architecting enterprise software, robust cloud platforms, and scalable digital ecosystems that empower global businesses.
                        </p>
                        <p>
                            Since 2007, our specialized teams have pioneered secure, high-performance solutions across fintech, edtech, and enterprise domains, ensuring future-readiness in every line of code.
                        </p>
                    </div>

                    {/* Premium Callout Statement */}
                    <div className="relative group max-w-xl mb-8">
                        <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm rounded-2xl transform transition-transform group-hover:scale-[1.02]"></div>
                        <div className="relative flex items-center gap-4 p-5 md:p-6 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                            <div className="w-1.5 h-12 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                            <p className="text-white text-lg md:text-xl font-semibold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent italic">
                                "We are driven by engineering excellence, ownership, and continuous innovation."
                            </p>
                        </div>
                    </div>

                    {/* Professional Action Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-5 relative z-20">
                        <a
                            href="#products"
                            className="group relative w-full md:w-auto px-10 py-4 bg-[#3498DB] text-white text-center font-bold rounded-xl overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(52,152,219,0.3)] hover:shadow-[0_15px_40px_rgba(52,152,219,0.5)] transform hover:-translate-y-1 active:scale-95"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Explore Our Journey
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#team"
                            className="w-full md:w-auto px-10 py-[14px] bg-white/5 backdrop-blur-md border-[1.5px] border-white/30 text-white text-center font-bold rounded-xl hover:bg-white hover:text-[#000F21] transition-all duration-300 shadow-lg active:scale-95"
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
