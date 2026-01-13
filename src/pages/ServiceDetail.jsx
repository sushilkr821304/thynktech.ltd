import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/services';
import { ArrowRight, CheckCircle2, Settings, Megaphone, Code, Play, Cloud } from 'lucide-react';
import ServiceCapabilities from '../components/ServiceCapabilities';
import ServiceOverview from '../components/ServiceOverview';
import webImg from '../assets/web_hero.png';
import iosImg from '../assets/ios_hero.png';
import softwareImg from '../assets/software_hero.png';
import testingImg from '../assets/testing_hero.png';
import devopsImg from '../assets/devops_hero.png';
import webContentImg from '../assets/web_content.png';
import iosContentImg from '../assets/ios_content.png';
import androidIllustration from '../assets/android_illustration.png';
import softwareContentImg from '../assets/software_content.png';
import marketingContentImg from '../assets/marketing_content.png';
import testingContentImg from '../assets/testing_content.png';
import aiIllustration from '../assets/ai_illustration.png';
import chatbotIllustration from '../assets/chatbot_illustration.png';
import uiUxIllustration from '../assets/ui_ux_illustration.png';


// Map of service IDs to local imported images
// Only web.png is currently available, others fallback to service.heroImage
const heroImages = {
    'web-design-development': webImg,
    'mobile-app-development': iosImg,
    'devops-engineering': devopsImg,
    'software-services': softwareImg,
    'automation-testing': testingImg,
    'ai-ml-engineer': aiIllustration,
    'ai-chatbot-development': chatbotIllustration,
    'ui-ux-designer': uiUxIllustration,
};

const contentImages = {
    'web-design-development': webContentImg,
    'mobile-app-development': iosContentImg,
    'devops-engineering': softwareContentImg,
    'software-services': softwareContentImg,
    'digital-marketing': marketingContentImg,
    'automation-testing': testingContentImg,
    'ai-ml-engineer': aiIllustration,
    'ai-chatbot-development': chatbotIllustration,
    'ui-ux-designer': uiUxIllustration,
};

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isPlayingVideo, setIsPlayingVideo] = useState(false);

    const handleNavigation = (sectionId) => {
        navigate(`/#${sectionId}`);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const service = servicesData.find(s => s.id === id);

    // Use imported image if available in map, otherwise fallback to data
    const heroImageSrc = heroImages[id] || service?.heroImage;
    const contentImageSrc = contentImages[id];

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsPlayingVideo(false);
    }, [id]);

    if (!service) {
        return (
            <div className="font-sans text-gray-900 antialiased">
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-primary mb-4">Service Not Found</h2>
                        <Link to="/" className="text-secondary hover:underline">Return Home</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="font-sans text-gray-900 antialiased bg-white">
            <Navbar />

            {/* SECTION 1: CINEMATIC HERO (Matching Image 1) */}
            <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden min-h-[600px] flex items-center">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* LEFT: Video/Image Container */}
                        <div className="lg:w-1/2 w-full relative aspect-video bg-gray-900/50 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl" data-aos="fade-right">
                            {!isPlayingVideo ? (
                                <div className="relative w-full h-full cursor-pointer group/overlay" onClick={() => setIsPlayingVideo(true)}>
                                    <img
                                        src={heroImageSrc}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-80 group-hover/overlay:opacity-100 transition-opacity duration-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/overlay:bg-black/40 transition-all duration-300">
                                        <div className="w-20 h-20 bg-secondary/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,180,216,0.5)] group-hover/overlay:scale-110 transition-transform duration-300">
                                            <Play size={32} className="text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                </div>
                            ) : (
                                <video
                                    key={service.id}
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    onEnded={() => setIsPlayingVideo(false)}
                                >
                                    <source src={service.videoPath} type="video/mp4" />
                                </video>
                            )}
                        </div>

                        {/* RIGHT: Text Content */}
                        <div className="lg:w-1/2 text-left" data-aos="fade-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-secondary font-bold mb-6 tracking-wide uppercase">
                                {service.subtitle}
                            </p>
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                                {service.description}
                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">
                                <Link to="/contact" className="px-8 py-4 bg-secondary hover:bg-white hover:text-primary text-white font-bold rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,180,216,0.3)] inline-flex items-center gap-2">
                                    Book a Consultation <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -mr-20"></div>
            </section>

            {/* SECTION 2: CONTENT & IMPACT (Matching Image 2) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                            {/* Left Side: Header & Image */}
                            <div className="lg:col-span-12 mb-8">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-12 flex flex-col gap-2">
                                    <span>{service.aboutSection.heading.split('.')[0]}.</span>
                                    <span className="text-secondary">{service.aboutSection.heading.split('.')[1]}</span>
                                </h2>
                            </div>

                            <div className="lg:col-span-7" data-aos="fade-right">
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-gray-50 aspect-[16/9] bg-gray-100 group">
                                    <img
                                        src={service.teamImagePath}
                                        alt="ThynkTech Team"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="mt-10">
                                    <p className="text-xl md:text-2xl text-gray-700 font-medium leading-[1.6]">
                                        {service.aboutSection.textLeft}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Detailed Copy */}
                            <div className="lg:col-span-5 flex flex-col justify-start" data-aos="fade-left">
                                <div className="space-y-8 text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                                    {service.aboutSection.textRight}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FEATURES GRID (Matching Image 3-5) */}
            <section className="py-24 bg-[#111111] text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                            {/* Left Sticky Header */}
                            <div className="lg:w-5/12 lg:sticky lg:top-32 h-fit">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1]">
                                    Our {service.title} <br />
                                    <span className="text-secondary/80">Services</span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
                                    Our {service.title.toLowerCase()} specialists understand the importance of performance, scalability, and user-centric logic across all digital touchpoints.
                                </p>
                                <p className="text-xl text-gray-400 mb-12">
                                    Let’s build a <span className="text-white font-bold italic underline decoration-secondary">solution</span> that connects, communicates, and converts beautifully.
                                </p>
                                <Link to="/contact" className="group flex items-center gap-4 px-8 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1">
                                    <span className="w-8 h-[2px] bg-secondary group-hover:bg-white transition-colors"></span>
                                    Get In Touch
                                </Link>
                            </div>

                            {/* Right Grid of Service Cards */}
                            <div className="lg:w-7/12">
                                <div className="grid grid-cols-1 gap-6">
                                    {service.serviceFeatures.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="group bg-[#1A1A1A] p-10 md:p-14 rounded-[2rem] border border-white/5 hover:border-secondary/30 transition-all duration-500 hover:bg-[#222222]"
                                            data-aos="fade-up"
                                            data-aos-delay={idx * 100}
                                        >
                                            <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-secondary transition-colors">
                                                {feature.title}
                                            </h3>
                                            <div className="w-12 h-1 bg-secondary/30 group-hover:w-24 group-hover:bg-secondary transition-all duration-500 mb-6"></div>
                                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: SERVICE CAPABILITIES & TECHNOLOGIES */}
            <ServiceCapabilities serviceId={id} />

            {/* NEW SECTION: SERVICE OVERVIEW (Team Image & Checklist) */}
            <ServiceOverview serviceId={id} />

            {/* SECTION 4: FINAL CTA (ThynkTech Branded) */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8" data-aos="zoom-in">
                        Ready to Accelerate Your Growth?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-medium">
                        Partner with ThynkTech India for world-class {service.title.toLowerCase()} that delivers measurable business impact.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/contact"
                            className="px-12 py-5 bg-black text-white font-black rounded-2xl shadow-2xl hover:bg-white hover:text-black transform hover:-translate-y-2 transition-all duration-500 uppercase tracking-widest text-sm"
                        >
                            Hire Our Team
                        </Link>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 border-[40px] border-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 border-[60px] border-white rounded-full"></div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
