import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Cpu, Layout, Server, Layers, Smartphone, PenTool,
    Settings, CheckCircle
} from 'lucide-react';

const EngineersSection = () => {
    const location = useLocation();

    // Categories to display with mapped paths
    const categories = [
        { id: 'frontend', label: 'Frontend Developers', icon: Layout, desc: 'Interactive UI', path: '/engineering/frontend-developers' },
        { id: 'backend', label: 'Backend Developers', icon: Server, desc: 'Scalable Infrastructure', path: '/engineering/backend-developers' },
        { id: 'fullstack', label: 'Full-stack Developers', icon: Layers, desc: 'End-to-End Solutions', path: '/engineering/fullstack-developers' },
        { id: 'mobile', label: 'Mobile App Developers', icon: Smartphone, desc: 'iOS & Android', path: '/engineering/app-developers' },
        { id: 'devops', label: 'DevOps Engineers', icon: Settings, desc: 'CI/CD & Cloud', path: '/engineering/devops-engineers' },
        { id: 'qa', label: 'QA / Testers', icon: CheckCircle, desc: 'Quality Assurance', path: '/engineering/qa-engineers' },
        { id: 'ai', label: 'AI / ML Engineers', icon: Cpu, desc: 'Intelligence & Automation', path: '/engineering/ai-developers' },
        { id: 'uiux', label: 'UI / UX Designers', icon: PenTool, desc: 'User Experience', path: '/engineering/ui-ux-designers' },
    ];

    return (
        <section className="py-16 bg-[#F5F7FA] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-40 -mr-20 -mt-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* 1. Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#002B5C] mb-4 tracking-tight">
                        Our Software Engineering Team
                    </h2>
                    <div className="w-20 h-1.5 bg-[#3498DB] mx-auto rounded-full mb-6"></div>
                    <p className="text-base text-gray-500 font-medium leading-relaxed">
                        Dedicated developers building tomorrow's solutions today with cutting-edge technologies and innovation.
                        Our diverse team of experts delivers enterprise-grade software tailored to your business goals.
                    </p>
                </div>

                {/* 2. Role Categories Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = location.pathname === cat.path;

                        return (
                            <Link
                                key={cat.id}
                                to={cat.path}
                                className={`
                                    flex flex-col items-center justify-center p-5 rounded-xl border transition-all duration-300 group h-full
                                    bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)]
                                    ${isActive
                                        ? 'border-[#3498DB] ring-1 ring-[#3498DB]/10 shadow-[0_10px_25px_rgba(52,152,219,0.12)] -translate-y-1'
                                        : 'border-[#E6EAF0] hover:border-[#3498DB]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1'
                                    }
                                `}
                            >
                                <div className={`
                                    w-11 h-11 flex items-center justify-center rounded-full mb-3.5 transition-all duration-300
                                    ${isActive
                                        ? 'bg-[#3498DB]/10 text-[#3498DB]'
                                        : 'bg-gray-50 text-gray-400 group-hover:bg-[#3498DB]/10 group-hover:text-[#3498DB]'
                                    }
                                `}>
                                    <Icon size={20} strokeWidth={1.5} />
                                </div>
                                <span className={`
                                    text-[13px] font-bold text-center leading-tight mb-1.5 tracking-tight transition-colors duration-300
                                    ${isActive ? 'text-[#3498DB]' : 'text-[#002B5C] group-hover:text-[#3498DB]'}
                                `}>
                                    {cat.label}
                                </span>
                                <span className="text-[9px] font-semibold text-center uppercase tracking-[0.08em] text-gray-400 opacity-70">
                                    {cat.desc}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EngineersSection;
