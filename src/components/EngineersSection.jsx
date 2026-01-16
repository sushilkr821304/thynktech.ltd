import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Cpu, Layout, Server, Layers, Smartphone, PenTool,
    Settings, CheckCircle
} from 'lucide-react';

const MotionLink = motion(Link);

const EngineersSection = () => {
    const location = useLocation();

    const categories = [
        { id: 'frontend', label: 'Frontend Developers', icon: Layout, desc: 'INTERACTIVE UI', path: '/engineering/frontend-developers' },
        { id: 'backend', label: 'Backend Developers', icon: Server, desc: 'SCALABLE INFRASTRUCTURE', path: '/engineering/backend-developers' },
        { id: 'fullstack', label: 'Full-stack Developers', icon: Layers, desc: 'END-TO-END SOLUTIONS', path: '/engineering/fullstack-developers' },
        { id: 'mobile', label: 'Mobile App Developers', icon: Smartphone, desc: 'IOS & ANDROID', path: '/engineering/app-developers' },
        { id: 'devops', label: 'DevOps Engineers', icon: Settings, desc: 'CI/CD & CLOUD', path: '/engineering/devops-engineers' },
        { id: 'qa', label: 'QA / Testers', icon: CheckCircle, desc: 'QUALITY ASSURANCE', path: '/engineering/qa-engineers' },
        { id: 'ai', label: 'AI / ML Engineers', icon: Cpu, desc: 'INTELLIGENCE & AUTOMATION', path: '/engineering/ai-developers' },
        { id: 'uiux', label: 'UI / UX Designers', icon: PenTool, desc: 'USER EXPERIENCE', path: '/engineering/ui-ux-designers' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-10 bg-[#F6F8FC] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-8"
                >
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0B1B3A] mb-2 tracking-tight">
                        Our Software Engineering Team
                    </h2>
                    <p className="text-sm text-[#5B6B82] font-medium leading-relaxed max-w-2xl mx-auto">
                        Dedicated developers building tomorrow's solutions today with cutting-edge technologies and innovation.
                        Our diverse team delivers enterprise-grade software tailored to your business goals.
                    </p>
                </motion.div>

                {/* Role Categories Navigation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
                >
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = location.pathname === cat.path;

                        return (
                            <MotionLink
                                key={cat.id}
                                to={cat.path}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2, ease: "easeInOut" }
                                }}
                                className={`
                                    relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl border transition-all duration-300 group h-full
                                    ${isActive
                                        ? 'bg-[#EFF6FF] border-[#2563EB] shadow-[0_8px_20px_rgba(37,99,235,0.1)] ring-1 ring-[#2563EB]/5'
                                        : 'bg-white border-[#E6ECF5] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#2563EB]/30 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]'
                                    }
                                `}
                            >
                                <div className={`
                                    w-10 h-10 flex items-center justify-center rounded-xl mb-3 transition-all duration-300
                                    ${isActive
                                        ? 'bg-[#2563EB] text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]'
                                        : 'bg-[#F0F4F8] text-[#5B6B82] group-hover:bg-[#2563EB] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.25)]'
                                    }
                                `}>
                                    <Icon size={20} strokeWidth={1.5} />
                                </div>

                                <span className={`
                                    text-[13px] font-bold text-center leading-tight mb-1 tracking-tight transition-colors duration-300
                                    ${isActive ? 'text-[#2563EB]' : 'text-[#0B1B3A] group-hover:text-[#2563EB]'}
                                `}>
                                    {cat.label}
                                </span>

                                <span className={`
                                    text-[9px] font-bold text-center uppercase tracking-[0.08em] transition-colors duration-300
                                    ${isActive ? 'text-[#2563EB]/70' : 'text-[#5B6B82] opacity-60 group-hover:text-[#2563EB]/70'}
                                `}>
                                    {cat.desc}
                                </span>

                                {/* Active Glow Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 rounded-xl ring-2 ring-[#2563EB]/15 pointer-events-none"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                            </MotionLink>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default EngineersSection;
