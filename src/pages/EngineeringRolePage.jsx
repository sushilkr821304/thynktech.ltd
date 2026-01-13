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
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: Heading & Content */}
                        <div data-aos="fade-right">
                            <Link to="/about/engineers" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:text-blue-800 transition-colors">
                                <ArrowLeft size={18} /> Back to Engineering Teams
                            </Link>

                            <h5 className="text-[#3498DB] font-bold tracking-widest uppercase text-sm mb-4">
                                {roleDetails.title.replace('Engineering', '')} Department
                            </h5>

                            <h1 className="text-5xl lg:text-6xl font-bold text-[#002B5C] mb-8 leading-tight">
                                {roleDetails.title} <span className="text-gray-400 font-light">at ThynkTech India</span>
                            </h1>

                            <div className="text-lg text-gray-600 leading-relaxed space-y-6 border-l-4 border-blue-500 pl-6">
                                <p>{roleDetails.subtitle}</p>
                                <p>{roleDetails.description}</p>
                            </div>
                        </div>

                        {/* RIGHT: Team Image */}
                        <div className="relative" data-aos="fade-left">
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[url('/images/dots.png')] opacity-20 hidden lg:block"></div>

                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src={roleDetails.heroImage}
                                    alt={`${roleDetails.title} Team`}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">Innovating with Precision</p>
                                    <p className="text-sm opacity-90">Building the future of {roleDetails.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. APPROACH & TECH STACK SECTION */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT: Our Approach */}
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-[#002B5C] mb-8">Our Approach</h2>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                    <Layers className="text-[#3498DB]" size={24} />
                                    How We Work
                                </h3>

                                <div className="space-y-8">
                                    {roleDetails.methodologies?.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="mt-1 flex-shrink-0">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                    <CheckCircle size={14} />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#002B5C] text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-gray-400 text-sm italic">
                                            "We don't just write code; we engineer solutions that stand the test of time and scale."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Technology Stack */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h2 className="text-3xl font-bold text-[#002B5C] mb-8">Technology Stack</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {roleDetails.techStack?.map((tech, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-2xl group-hover:bg-blue-50 transition-colors">
                                            {tech.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#002B5C] group-hover:text-[#3498DB] transition-colors">{tech.name}</h4>
                                            <p className="text-xs text-gray-500 mt-1">{tech.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. TEAM GRID - MEET THE EXPERTS */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#002B5C] mb-4">Meet The Experts</h2>
                        <div className="w-24 h-1 bg-[#3498DB] mx-auto rounded-full"></div>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            The talented individuals driving innovation and excellence in our {roleDetails.title} division.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {currentTeam.length > 0 ? (
                            currentTeam.map((member) => (
                                <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                                    <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">

                                        {/* IMAGE RENDERING SYSTEM - FIXED */}
                                        <img
                                            src={`/images/team/${dataKey}/${member.image}`}
                                            alt={member.name}
                                            onError={(e) => {
                                                e.target.src = "/images/team/default.png";
                                            }}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
                                            <span className="font-bold text-lg">{member.name}</span>
                                            <span className="text-blue-300 text-sm">{member.designation}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white group-hover:bg-gray-50 transition-colors">
                                        <h3 className="font-bold text-[#002B5C] text-lg mb-1">{member.name}</h3>
                                        <p className="text-blue-500 font-medium text-xs uppercase tracking-wider">{member.designation}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-gray-400">
                                No team members found for this role yet.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 4. ENTERPRISE DELIVERY */}
            <section className="py-24 bg-[#002B5C] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for Enterprise Scale</h2>
                    <p className="text-blue-200 max-w-2xl mx-auto text-lg mb-10">
                        Our {roleDetails.title} team delivers secure, high-performance solutions used by global industry leaders.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {roleDetails.projects?.list.map((proj, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <h3 className="text-white font-bold text-lg mb-2">{proj}</h3>
                                <div className="h-1 w-12 bg-[#3498DB] mx-auto rounded-full"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Link to="/contact" className="px-8 py-4 bg-[#3498DB] text-white font-bold rounded-full hover:bg-white hover:text-[#002B5C] transition-all shadow-lg hover:shadow-blue-500/50">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EngineeringRolePage;
