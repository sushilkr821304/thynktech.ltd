import React from 'react';
import { Layers, Cloud, Brain, Code, Palette, Server, Cpu, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyThynkTechSection = () => {
    const highlights = [
        { icon: Layers, text: "Scalable Web & Mobile Development" },
        { icon: Cloud, text: "Cloud-Ready Architecture & DevOps" },
        { icon: Brain, text: "AI/ML & Data-Driven Solutions" }
    ];

    const features = [
        { title: "Full-Stack Engineering", icon: Code, desc: "End-to-end robust solutions." },
        { title: "UI/UX & Product Design", icon: Palette, desc: "Intuitive & engaging designs." },
        { title: "Cloud & DevOps Deployment", icon: Cloud, desc: "Secure & scalable infrastructure." },
        { title: "AI & Automation Solutions", icon: Cpu, desc: "Smart automation for growth." }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-gray-50 font-sans">
            {/* Subtle Technical Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN */}
                    <div className="text-left">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase mb-4">
                            Why ThynkTech India?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] leading-tight mb-6">
                            Engineering-Driven. <br />
                            Product-Focused. <br />
                            <span className="text-blue-600">Future-Ready.</span>
                        </h2>

                        <p className="text-lg text-[#5F6B7A] mb-2 font-medium">
                            We build scalable digital products with strong engineering, clean UI, and reliable delivery.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            At ThynkTech India, we combine modern technologies, agile execution, and a strong engineering culture to build web and mobile solutions that scale with your business.
                        </p>

                        <div className="space-y-4 mb-10">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-blue-600 shadow-sm">
                                        <item.icon size={18} />
                                    </div>
                                    <span className="font-semibold text-[#0A2540]">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/services" className="px-8 py-3.5 bg-[#0A2540] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#0b2e52] transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                Explore Our Services <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="px-8 py-3.5 bg-white text-[#0A2540] border border-gray-300 font-bold rounded-lg shadow-sm hover:shadow-md hover:border-[#0A2540] transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                Contact Our Team <Mail size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 group hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0A2540] mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyThynkTechSection;
