import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Heart, Zap, Coffee, Award, Laugh, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '../assets/life_hero_office.jpg';
import cultureCollaboration from '../assets/culture_collaboration.png';
import cultureMeeting from '../assets/culture_meeting.png';
import cultureCoding from '../assets/culture_coding.png';

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200", title: "Team Collaboration" },
    { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200", title: "Office Life" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200", title: "Innovation & Creativity" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200", title: "Agile Development" },
    { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200", title: "Problem Solving" },
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200", title: "Code Review & Engineering" },
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200", title: "Leadership & Mentorship" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200", title: "Work-Life Balance" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200", title: "Learning & Skill Growth" },
    { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200", title: "Client Communication" }
];

const LifeAtThynkTech = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Senior Software Engineer",
            quote: "ThynkTech is different. Here, I'm not just writing code; I'm solving real-world problems. The autonomy and trust I get are unmatched.",
            color: "bg-blue-50"
        },
        {
            name: "Rahul Verma",
            role: "Product Manager",
            quote: "The culture here is built on curiosity. We are encouraged to ask 'why' and 'what if'. It's refreshing to work where innovation is a daily habit.",
            color: "bg-purple-50"
        },
        {
            name: "Ananya Gupta",
            role: "DevOps Lead",
            quote: "Growth is fast-tracked here. I joined as a junior dev and was mentored into a leadership role within 3 years. The opportunities are endless.",
            color: "bg-indigo-50"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCards(1);
            else if (window.innerWidth < 1024) setVisibleCards(2);
            else setVisibleCards(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="font-sans text-gray-900 antialiased">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Life at ThynkTech"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00152e]/90 via-[#002B5C]/70 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-white text-left">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-md">
                            <Heart size={14} className="text-pink-400" />
                            <span className="text-xs font-semibold tracking-wider uppercase">Our Culture</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Life at <span className="text-[#3498DB]">ThynkTech</span>
                        </h1>
                        <p className="text-lg md:text-2xl font-light text-blue-100 leading-relaxed mb-8">
                            Where passion meets purpose. Join a community of dreamers, doers, and innovators building the future of technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-8">Not Just a Workplace, But a Launchpad</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At ThynkTech India, we believe that great software is built by happy, empowered people. We are a product-first company where engineering excellence is not just a goal, but a way of life.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We encourage ownership at every level. Whether you are an intern or a VP, your voice matters, your ideas are heard, and your code impacts millions. We are moving beyond the traditional service mindset to true digital partnership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Voices of ThynkTech */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">Voices of ThynkTech</h2>
                        <p className="text-gray-600">Real stories from the people who make us who we are.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testi, idx) => (
                            <div key={idx} className={`${testi.color} p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300`}>
                                <div className="absolute -top-4 -left-4 text-6xl text-gray-200 font-serif opacity-50">"</div>
                                <p className="text-gray-700 text-lg italic mb-6 relative z-10 leading-relaxed">
                                    {testi.quote}
                                </p>
                                <div>
                                    <h4 className="font-bold text-[#002B5C] text-lg">{testi.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{testi.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Growth & Development */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform rotate-3 scale-105" />
                            <img
                                src={cultureCollaboration}
                                alt="Mentorship at ThynkTech"
                                className="relative rounded-3xl shadow-2xl w-full object-cover h-[300px] md:h-[500px]"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-[#3498DB] font-bold tracking-wider uppercase text-sm">Development</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#002B5C] mt-2 mb-6">Your Growth is Our Growth</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We invest heavily in our people because we know that the only way to stay ahead in tech is to keep learning.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Structured Mentorship", desc: "Every new joiner is paired with a mentor to guide their technical and professional journey." },
                                    { title: "Unlimited Learning", desc: "Access to top tier courses, certifications coverage, and regular internal tech talks." },
                                    { title: "Career Acceleration", desc: "Clear promotion paths based on merit and impact, not just tenure." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#3498DB]">
                                            <Target size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#002B5C] text-lg">{item.title}</h4>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work-Life Balance */}
            <section className="py-24 bg-[#0A192F] text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <span className="text-[#3498DB] font-bold tracking-wider uppercase text-sm">Wellbeing</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Work, Life, and Everything in Between</h2>
                            <p className="text-blue-100 text-lg leading-relaxed mb-6">
                                We don't believe in burnout. We believe in sustainable pace and holistic well-being. A happy mind writes better code.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <Coffee className="text-[#3498DB] mb-3" size={28} />
                                    <h4 className="font-bold text-lg">Flexible Hours</h4>
                                    <p className="text-sm text-gray-400 mt-2">Work when you are most productive. We focus on output, not login hours.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <Heart className="text-pink-500 mb-3" size={28} />
                                    <h4 className="font-bold text-lg">Health & Wellness</h4>
                                    <p className="text-sm text-gray-400 mt-2">Comprehensive insurance and mental wellness programs for you and your family.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={cultureMeeting}
                                alt="ThynkTech Culture"
                                className="rounded-3xl shadow-2xl w-full object-cover h-[300px] md:h-[500px] opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-[#3498DB] p-8 rounded-2xl shadow-xl hidden md:block">
                                <p className="text-2xl font-bold text-white">4.8/5</p>
                                <p className="text-white/80 text-sm">Employee Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation & Events */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#3498DB] font-bold tracking-wider uppercase text-sm">Vibrancy</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-4">Innovation & Celebrations</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From intense hackathons to joyous festival celebrations, there is never a dull moment at ThynkTech.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[500px]">
                        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl min-h-[300px] md:min-h-0">
                            <img src={cultureCoding} alt="Hackathon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                                <span className="text-[#3498DB] text-xs font-bold uppercase tracking-wider mb-2">Hackathon</span>
                                <h3 className="text-white text-2xl font-bold">Building the Future in 24 Hours</h3>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-center items-center text-center hover:shadow-lg transition-shadow py-12 md:py-6">
                            <Zap className="text-yellow-500 mb-4" size={32} />
                            <h4 className="font-bold text-[#002B5C] text-lg">Innovation Labs</h4>
                            <p className="text-sm text-gray-500 mt-2">Where wild ideas become prototypes.</p>
                        </div>
                        <div className="bg-blue-600 p-8 rounded-2xl flex flex-col justify-center items-center text-center text-white py-12 md:py-6">
                            <Laugh className="mb-4" size={32} />
                            <h4 className="font-bold text-lg">Fun Fridays</h4>
                            <p className="text-sm text-blue-100 mt-2">Gaming, food, and bonding.</p>
                        </div>
                        <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-gray-200 min-h-[200px] md:min-h-0">
                            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                                <div className="text-center text-white p-6">
                                    <Award size={40} className="mx-auto mb-2" />
                                    <h3 className="text-xl font-bold">Annual Awards Night</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Life at ThynkTech India Carousel Section */}
            <section className="py-20 md:py-24 bg-white border-t border-gray-100 overflow-hidden" id="culture-slider">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#002B5C] mb-6 leading-tight">Life at ThynkTech India: Growing Together Every Day</h2>
                        <p className="text-gray-600 max-w-4xl text-base md:text-xl leading-relaxed">
                            Step into a world of innovation and transformation. See how ThynkTech employees are reinventing their careers, the workplace, and the technology landscape. Explore our moments to glimpse the exciting and dynamic culture at ThynkTech.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Navigation Buttons - Perfectly Centers relative to card area */}
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between z-30 pointer-events-none -mx-2 md:-mx-8">
                            <button
                                onClick={prevSlide}
                                className="pointer-events-auto ml-1 md:ml-0 bg-white/95 backdrop-blur-md text-[#002B5C] p-2.5 md:p-4 rounded-full shadow-xl border border-gray-200 hover:bg-[#002B5C] hover:text-white transition-all duration-300 transform active:scale-90"
                                aria-label="Previous Slide"
                            >
                                <ChevronLeft size={20} className="md:w-6 md:h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="pointer-events-auto mr-1 md:mr-0 bg-white/95 backdrop-blur-md text-[#002B5C] p-2.5 md:p-4 rounded-full shadow-xl border border-gray-200 hover:bg-[#002B5C] hover:text-white transition-all duration-300 transform active:scale-90"
                                aria-label="Next Slide"
                            >
                                <ChevronRight size={20} className="md:w-6 md:h-6" />
                            </button>
                        </div>

                        {/* Carousel Track - Centered 1-card layout for mobile */}
                        <div className="overflow-hidden py-4">
                            <div
                                className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
                                style={{
                                    transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
                                    gap: visibleCards === 1 ? '0' : (window.innerWidth < 1024 ? '16px' : '24px')
                                }}
                            >
                                {galleryImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-shrink-0 relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group/card bg-gray-50"
                                        style={{
                                            width: visibleCards === 1
                                                ? '100%'
                                                : `calc(${100 / visibleCards}% - ${((visibleCards > 1 ? (window.innerWidth < 1024 ? 16 : 24) : 0) * (visibleCards - 1)) / visibleCards}px)`
                                        }}
                                    >
                                        <div className="aspect-[14/10] md:aspect-[4/3] overflow-hidden">
                                            <img
                                                src={img.src}
                                                alt={img.title}
                                                className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-1000"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-5 md:p-8 opacity-90 group-hover/card:opacity-100 transition-opacity">
                                            <div className="bg-white/10 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-white/20 shadow-2xl">
                                                <span className="text-white font-bold text-sm md:text-xl block tracking-wide">
                                                    {img.title}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Dots Indicator - Centered */}
                    <div className="flex justify-center gap-3 mt-8 md:mt-12">
                        {galleryImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx
                                    ? 'w-10 bg-[#002B5C] shadow-md'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LifeAtThynkTech;
