import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FALLBACK_TECH_IMAGE = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop";

const CultureSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (id) => {
        setImageErrors(prev => ({ ...prev, [id]: true }));
    };

    const getSafeImage = (id, originalSrc) => {
        return imageErrors[id] ? FALLBACK_TECH_IMAGE : originalSrc;
    };

    const slides = [
        {
            title: "Tech-First Benefits",
            description: "At ThynkTech India, we empower our engineers with high-end hardware, remote-first flexibility, and continuous learning stipends. We believe in providing a workspace—both physical and digital—that removes friction and fosters deep work.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Inclusive Engineering Culture",
            description: "Diversity is our greatest strength in solving complex technical challenges. At ThynkTech India, inclusion means every voice—from interns to senior architects—is heard during sprint planning and architecture reviews.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Life at ThynkTech",
            description: "Step into a high-energy environment defined by brainstorming at whiteboards, collaborative code reviews, and the occasional celebratory hackathon. Our culture is built on transparency, technical autonomy, and scaling systems.",
            image: "https://images.unsplash.com/photo-1522071823991-b518ee2f339f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Engineering with Purpose",
            description: "Our mission is to build digital products that fundamentally improve how businesses operate. We solve real-world problems through engineering excellence, data-driven decisions, and a commitment to building a better digital future.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-white overflow-hidden font-sans">
            {/* Top Grid Section - Careers & Professionals */}
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex-1 group cursor-pointer overflow-hidden border-r border-gray-100">
                    <div className="relative aspect-[16/8] overflow-hidden bg-gray-50">
                        <img
                            src={getSafeImage('grid1', "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop")}
                            alt="Early Careers in Tech"
                            onError={() => handleImageError('grid1')}
                            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-8 md:p-10 bg-white">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight group-hover:text-secondary transition-colors uppercase">Early Careers</h3>
                    </div>
                </div>
                <div className="flex-1 group cursor-pointer overflow-hidden">
                    <div className="relative aspect-[16/8] overflow-hidden bg-gray-50">
                        <img
                            src={getSafeImage('grid2', "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop")}
                            alt="Experienced Tech Professionals"
                            onError={() => handleImageError('grid2')}
                            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-8 md:p-10 bg-white">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight group-hover:text-secondary transition-colors uppercase">Experienced Professionals</h3>
                    </div>
                </div>
            </div>

            {/* Why We Do It Header Section */}
            <div className="w-full bg-[#2d1b4d] text-white py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tighter transition-all duration-700">Why We Do It</h2>
                    <h4 className="text-2xl md:text-4xl font-extrabold mb-10 text-white transition-all duration-700">Because we care deeply.</h4>
                    <p className="text-lg md:text-2xl lg:text-3xl text-white/90 max-w-5xl leading-relaxed font-semibold opacity-90 transition-all duration-700">
                        Lead the next chapter by creating real-world impact. Share our values, be driven by our strong sense of purpose,
                        and act with compassion to elevate yourself and the world around you.
                    </p>
                </div>
            </div>

            {/* Carousel Slider Section */}
            <div className="relative bg-[#f8f9fa] w-full min-h-[600px] flex items-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-gray-900 hover:text-secondary transition-all transform hover:scale-110 hidden md:block"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={80} className="md:w-24 md:h-24" strokeWidth={0.5} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-gray-900 hover:text-secondary transition-all transform hover:scale-110 hidden md:block"
                    aria-label="Next slide"
                >
                    <ChevronRight size={80} className="md:w-24 md:h-24" strokeWidth={0.5} />
                </button>

                <div className="w-full flex flex-col lg:flex-row items-stretch">
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-10 md:p-20 lg:p-28 bg-[#f8f9fa] z-10">
                        <div className="max-w-xl w-full">
                            <div key={currentSlide} className="animate-in fade-in duration-700">
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2d1b4d] mb-8">
                                    {slides[currentSlide].title}
                                </h3>
                                <div className="w-20 h-2 bg-secondary mb-10"></div>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold opacity-80">
                                    {slides[currentSlide].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative h-[450px] lg:h-auto overflow-hidden shadow-2xl bg-[#f8f9fa]">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                            >
                                <img
                                    src={getSafeImage(`slide${index}`, slide.image)}
                                    alt={slide.title}
                                    onError={() => handleImageError(`slide${index}`)}
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                            </div>
                        ))}

                        <div className="absolute bottom-10 right-10 flex gap-4 z-40">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-4 h-4 transition-all duration-500 rounded-none border-2 border-white ${index === currentSlide ? 'bg-secondary border-secondary scale-125' : 'bg-transparent hover:bg-white/30'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultureSection;
