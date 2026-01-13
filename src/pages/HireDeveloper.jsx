import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Shield, Zap, MessageSquare, Clock, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EliteNetworkCarousel from '../components/EliteNetworkCarousel';
import OfficeLocations from '../components/OfficeLocations';
import { developerData } from '../data/hireData';
import { engineers } from '../data/engineers';

const HireDeveloper = () => {
    const { developerType } = useParams();
    const data = developerData[developerType];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [developerType]);

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center pt-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-primary mb-4">Developer Category Not Found</h2>
                        <Link to="/" className="text-secondary hover:underline">Return Home</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="font-sans text-gray-900 antialiased overflow-x-hidden">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="bg-[#001529] text-white pt-0 pb-20 lg:pt-0 lg:pb-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-3/5" data-aos="fade-right">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
                                Hire <span className="text-secondary">{data.name}</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                                {data.intro} Build your dream team with our vetted, top-tier engineering talent and accelerate your digital transformation journey today.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#001529] bg-gray-700 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                                            <img src={`https://i.pravatar.cc/150?u=${i + 120}`} alt="dev" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-4 border-[#001529] bg-secondary flex items-center justify-center text-[12px] font-bold">
                                        +50
                                    </div>
                                </div>
                                <span className="text-gray-400 font-medium tracking-wide">Available for fast onboarding</span>
                            </div>
                        </div>

                        {/* Right Contact Form */}
                        <div className="lg:w-2/5 w-full" data-aos="fade-left">
                            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl relative group">
                                <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-secondary rounded-full"></span>
                                    Inquiry Now
                                </h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Full Name" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-all w-full" />
                                        <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-all w-full" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Phone Number" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-all w-full" />
                                        <input type="text" placeholder="Location" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-all w-full" />
                                    </div>
                                    <textarea placeholder="Tell us about your project requirements..." rows="4" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-all w-full resize-none"></textarea>
                                    <button className="w-full bg-secondary hover:bg-white hover:text-primary py-4 rounded-xl font-bold text-lg transition-all shadow-[0_10px_30px_rgba(0,186,211,0.3)]">
                                        Get Started Today
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -mr-64 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -ml-32 -mb-16"></div>
            </section>

            {/* 2. TRUST & EXPERTISE SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">Unmatched Technical Expertise</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium">Deep dive into our comprehensive technology stack and specialized field knowledge.</p>
                    </div>

                    <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl" data-aos="fade-up">
                        <table className="w-full text-left border-collapse">
                            <thead className="hidden md:table-header-group">
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="px-8 py-6 text-primary font-black uppercase tracking-wider text-sm">Expertise Area</th>
                                    <th className="px-8 py-6 text-secondary font-black uppercase tracking-wider text-sm">Technologies & Capabilities</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 flex flex-col md:table-row-group">
                                {Object.entries(data.expertise).map(([key, value], idx) => (
                                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors flex flex-col md:table-row">
                                        <td className="px-6 py-4 md:px-8 md:py-5 font-bold text-gray-700 md:whitespace-nowrap bg-gray-50/50 md:bg-transparent border-b md:border-b-0 border-gray-100">
                                            <span className="md:hidden block text-[10px] text-primary/60 font-black uppercase tracking-tighter mb-1">Expertise Area</span>
                                            {key}
                                        </td>
                                        <td className="px-6 py-6 md:px-8 md:py-5 text-gray-600 font-medium italic">
                                            <span className="md:hidden block text-[10px] text-secondary/60 font-black uppercase tracking-tighter mb-1">Technologies & Capabilities</span>
                                            {value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 3. VALUE PROPOSITION SECTION */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
                            Crafting Impactful Solutions using <span className="text-secondary">{data.name.split(' ')[0]}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            { title: "Quality Code, Future-Proof Apps", icon: CheckCircle2, desc: "We adhere to strictly modular and industry-standard coding practices to ensure your applications remain scalable." },
                            { title: "Open Collaboration & Communication", icon: MessageSquare, desc: "Direct access to our developers via Slack, Zoom, or your preferred enterprise tools for seamless updates." },
                            { title: "On-Time, Every Time", icon: Clock, desc: "We respect your milestones. Our developers operate within high-performance sprint cycles to meet every deadline." },
                            { title: "Efficient Time Management", icon: Zap, desc: "Optimizing every billable hour with focused productivity and minimal management overhead on your part." },
                            { title: "Proactive Problem Solving", icon: Shield, desc: "Our devs don't just write code; they suggest architectural improvements to keep your product ahead." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(0,186,211,0.1)] transition-all duration-500 border border-gray-100 group">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-xl font-black text-primary mb-4">{item.title}</h4>
                                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DEVELOPER NETWORK SECTION (SLIDER) */}
            <EliteNetworkCarousel
                title="Our Elite Network"
                subtitle={`${data.name}s in our Network`}
                items={data.network.map((talent, i) => ({
                    id: i + 1,
                    name: talent.name,
                    role: `${data.name.split(' ')[0]} EXPERT`,
                    image: talent.image
                }))}
            />

            {/* 5. LOCATION-BASED HIRING SECTION */}
            <OfficeLocations />

            <Footer />
        </div>
    );
};

export default HireDeveloper;
