import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { engineeringRoles } from '../data/engineeringRoles';
import { teamData } from '../data/teamData';
import { ArrowLeft, CheckCircle, Layers } from 'lucide-react';

const EngineeringRolePage = () => {
    const { roleId } = useParams();

    // Map URL param to teamData key
    const roleKeyMap = {
        'frontend-developers': 'frontend',
        'backend-developers': 'backend',
        'fullstack-developers': 'fullstack',
        'app-developers': 'mobile',
        'devops-engineers': 'devops',
        'qa-engineers': 'qa',
        'ai-developers': 'ai',
        'ui-ux-designers': 'uiux'
    };

    const dataKey = roleKeyMap[roleId] || 'frontend'; // Fallback
    const currentTeam = teamData[dataKey] || [];

    // Fetch detailed role data (description, title etc)
    const roleDetails = engineeringRoles[roleId] || engineeringRoles['frontend-developers'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [roleId]);

    return (
        <div className="font-sans antialiased text-gray-900 bg-[#F5F7FA]">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-center">

                        {/* LEFT: Heading & Content */}
                        <div className="lg:col-span-2 flex flex-col justify-center" data-aos="fade-right">
                            <Link
                                to="/about#engineering-teams"
                                className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-10 hover:text-[#0A2540] transition-colors group w-fit"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm tracking-wide">Back to Engineering Teams</span>
                            </Link>

                            <div className="mb-2">
                                <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 pl-1">
                                    {roleDetails.title.replace('Engineering', '')} Department
                                </span>
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A2540] leading-tight mb-2 tracking-tight">
                                    {roleDetails.title}
                                </h1>
                                <span className="text-xl text-gray-400 font-light block mb-10 pl-1">
                                    at ThynkTech India
                                </span>
                            </div>

                            <div className="pl-6 border-l-2 border-gray-200 flex flex-col gap-5">
                                <p className="text-lg font-bold text-[#0A2540] leading-relaxed">
                                    {roleDetails.subtitle}
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {roleDetails.description}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Team Image Hero Banner */}
                        <div className="lg:col-span-3 relative" data-aos="fade-left">
                            {/* Ambient Glow */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                            {/* Clean Enterprise Hero Card */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 bg-gray-100 aspect-[16/9] ring-1 ring-black/5">
                                <img
                                    src={roleId === 'devops-engineers' ? "/images/devops.jpg" : roleDetails.heroImage}
                                    alt={`${roleDetails.title} Team`}
                                    className="w-full h-full object-cover object-center transform transition-transform duration-1000 hover:scale-105"
                                />

                                {/* Professional Overlays for Readability */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/40 to-transparent"></div>
                                <div className="absolute inset-0 bg-[#0A2540]/5"></div>

                                {/* Minimal Caption */}
                                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-0.5 w-8 bg-blue-400"></div>
                                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-blue-200">Team Excellence</span>
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold mb-1 tracking-tight">Innovating with Precision</h3>
                                    <p className="text-blue-100 text-xs md:text-base font-light opacity-95">Building the future of {roleDetails.title.replace('Engineering', '')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. APPROACH & TECH STACK SECTION */}
            <section className="py-20 bg-white border-t border-gray-100 shadow-sm relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT: Our Approach */}
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-[#0A2540] mb-8">Our Approach</h2>

                            <div className="bg-[#F5F7FA] p-8 rounded-2xl border border-gray-100 h-full hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-[#0A2540] mb-6 flex items-center gap-3">
                                    <Layers className="text-[#2563EB]" size={24} />
                                    How We Work
                                </h3>

                                <div className="space-y-8">
                                    {roleDetails.methodologies?.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="mt-1 flex-shrink-0">
                                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#0A2540] group-hover:bg-[#0A2540] group-hover:text-white transition-colors duration-300">
                                                    <CheckCircle size={14} />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0A2540] text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                                                <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pt-6 border-t border-gray-200">
                                        <p className="text-[#5F6B7A] text-sm italic font-medium">
                                            "We don't just write code; we engineer solutions that stand the test of time and scale."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Technology Stack */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h2 className="text-3xl font-bold text-[#0A2540] mb-8">Technology Stack</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {roleDetails.techStack?.map((tech, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-lg bg-[#F3F6FB] flex items-center justify-center text-2xl group-hover:bg-[#0A2540] group-hover:text-white transition-colors duration-300">
                                            {tech.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0A2540] group-hover:text-[#2563EB] transition-colors">{tech.name}</h4>
                                            <p className="text-xs text-[#5F6B7A] mt-1">{tech.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. TEAM CAROUSEL - MEET THE EXPERTS */}
            <section className="py-16 bg-[#F5F7FA] overflow-hidden">
                <style>
                    {`
                        @keyframes scroll-team {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-team-scroll {
                            animation: scroll-team 50s linear infinite;
                        }
                        .animate-team-scroll:hover {
                            animation-play-state: paused;
                        }
                    `}
                </style>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0A2540] mb-3">Meet The Experts</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#1E40AF] mx-auto rounded-full"></div>
                        <p className="text-[#5F6B7A] mt-5 max-w-2xl mx-auto text-base">
                            The talented individuals driving innovation and excellence in our {roleDetails.title} division.
                        </p>
                    </div>

                    <div className="relative group/marquee overflow-hidden">
                        {currentTeam.length > 0 ? (
                            <div className={`flex gap-6 ${currentTeam.length > 4 ? 'animate-team-scroll w-max' : 'justify-center w-full'}`}>
                                {/* Only duplicate array if we have enough members for a continuous marquee */}
                                {(currentTeam.length > 4 ? [...currentTeam, ...currentTeam, ...currentTeam, ...currentTeam] : currentTeam).map((member, idx) => (
                                    <div
                                        key={`${member.id}-${idx}`}
                                        className="w-56 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#E6ECF5] transition-all duration-500 hover:shadow-[0_25px_50px_rgba(11,27,58,0.1)] group/card"
                                    >
                                        <div className="h-[280px] w-full overflow-hidden relative bg-[#BFC6D2] flex items-center justify-center p-0">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                loading="lazy"
                                                decoding="async"
                                                onError={(e) => {
                                                    e.target.src = "/images/team/default.png";
                                                }}
                                                className="w-full h-full object-cover object-center transition-all duration-700 group-hover/card:scale-110"
                                                style={{ mixBlendMode: 'multiply', opacity: '1' }}
                                            />
                                            <div className="absolute inset-0 bg-[#0B1B3A]/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                        <div className="p-6 text-center bg-white border-t border-[#E6ECF5]">
                                            <h3 className="font-bold text-[#0B1B3A] text-lg mb-1 leading-tight tracking-tight group-hover/card:text-[#2563EB] transition-colors">{member.name}</h3>
                                            <p className="text-[#2563EB] font-bold text-[10px] uppercase tracking-[0.15em] opacity-80">{member.designation}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-[#5B6B82] bg-[#F6F8FC] rounded-3xl border border-dashed border-[#E6ECF5] font-medium">
                                No team members listed for this department yet.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 4. ENTERPRISE DELIVERY */}
            < section className="py-24 bg-[#0A2540] relative overflow-hidden" >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-900/10 -skew-x-12 transform -translate-x-20"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Built for Enterprise Scale</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-12 leading-relaxed opacity-90">
                        Our {roleDetails.title} team delivers secure, high-performance solutions used by global industry leaders.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                        {roleDetails.projects?.list.map((proj, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                                <h3 className="text-white font-bold text-lg mb-4 group-hover:text-blue-200 transition-colors">{proj}</h3>
                                <div className="h-1 w-12 bg-gradient-to-r from-[#2563EB] to-[#1E40AF] mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default EngineeringRolePage;
