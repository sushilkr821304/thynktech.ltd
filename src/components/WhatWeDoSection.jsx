import { useState } from 'react';
import {
    TrendingUp,
    Code2,
    BarChart3,
    Palette,
    CheckCircle2,
    Star
} from 'lucide-react';

const WhatWeDoSection = () => {
    const [activeTab, setActiveTab] = useState('marketing');

    const tabs = [
        { id: 'marketing', label: 'Marketing', icon: TrendingUp },
        { id: 'engineering', label: 'Engineering', icon: Code2 },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'design', label: 'Design', icon: Palette }
    ];

    const content = {
        marketing: {
            title: 'Marketing Execution Pods',
            subtitle: 'We help your clients grow faster with done-for-you execution that converts.',
            features: [
                'Performance Marketing & Lead Generation',
                'Funnel Optimization & Conversion Growth',
                'Email & Automation Workflows',
                'Reporting & Attribution Dashboard'
            ],
            stats: {
                projects: '29+',
                label: ''
            },
            badge: 'IT & digital solutions',
            image: '/images/what-we-do/marketing.png'
        },
        engineering: {
            title: 'Engineering Pods',
            subtitle: 'We build, scale, and optimize websites and platforms that perform.',
            features: [
                'Web, Mobile & eCommerce Development',
                'Front-end, Backend, CMS & API Integrations',
                'QA-Bound CI/CD Delivery',
                'Legacy Modernization'
            ],
            stats: {
                projects: '29+',
                label: ''
            },
            badge: 'IT & digital solutions',
            image: '/images/what-we-do/engineering.png'
        },
        analytics: {
            title: 'Analytics Pods',
            subtitle: 'We bring clarity to your client reporting.',
            features: [
                'GA4 Setup and Event Tracking',
                'Attribution Modeling & Dashboards',
                'CRM & Ad Platform Integration',
                'Custom Reporting Solutions'
            ],
            stats: {
                projects: '29+',
                label: ''
            },
            badge: 'IT & digital solutions',
            image: '/images/what-we-do/analytics.png'
        },
        design: {
            title: 'Design Pods',
            subtitle: 'Make every idea launch-ready – beautifully and reliably.',
            features: [
                'Figma to HTML / Shopify / Webflow',
                'UX Audits & Conversion Design',
                'Rapid Prototyping',
                'Responsive email templates (ESP-ready)'
            ],
            stats: {
                projects: '29+',
                label: ''
            },
            badge: 'IT & digital solutions',
            image: '/images/what-we-do/design.png'
        }
    };

    const currentContent = content[activeTab];

    return (
        <section id="what-we-do" className="py-20 bg-gradient-to-br from-primary via-[#003d7a] to-secondary relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                        What We Do?
                    </h2>
                    <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto px-4">
                        We fill your delivery gaps with specialized pods that integrate into your workflows – invisible to clients, indispensable to you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div data-aos="fade-right">
                        {/* Tab Navigation */}
                        <div className="bg-white rounded-2xl p-2 md:p-3 shadow-2xl mb-6 md:mb-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${activeTab === tab.id
                                                ? 'bg-primary text-white shadow-lg scale-105'
                                                : 'bg-transparent text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            <Icon size={18} className="md:w-5 md:h-5" />
                                            <span className="hidden md:inline">{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
                                    {currentContent.title}
                                </h3>
                                <p className="text-white/90 text-base md:text-lg">
                                    {currentContent.subtitle}
                                </p>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-2 md:space-y-3">
                                {currentContent.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 md:gap-3 text-white"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={18} />
                                        <span className="text-sm md:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative" data-aos="fade-left">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Main Image */}
                            <div className="aspect-[4/3] relative">
                                <img
                                    src={currentContent.image}
                                    alt={currentContent.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                            </div>

                            {/* Floating Cards */}
                            {/* Top Left - Great Project Badge */}
                            <div className="absolute top-2 left-2 md:top-8 md:left-8 bg-white rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 animate-float" style={{ animationDelay: '0s' }}>
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                                        <Star className="text-white" size={16} fill="white" />
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Great Project</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Left - Projects Count */}
                            <div className="absolute bottom-2 left-2 md:bottom-8 md:left-8 bg-white rounded-xl md:rounded-2xl shadow-xl px-3 py-2 md:px-6 md:py-4 animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-1 md:gap-2">
                                    <Star className="text-secondary" size={16} fill="#3498DB" />
                                    <span className="text-[10px] md:text-xs text-gray-500 uppercase font-semibold">Own running Projects</span>
                                </div>
                                <p className="text-xl md:text-3xl font-bold text-primary mt-1">
                                    {currentContent.stats.projects}
                                    <span className="text-sm md:text-lg font-normal text-gray-600">{currentContent.stats.label}</span>
                                </p>
                            </div>

                            {/* Top Right - Enterprises Optimize */}
                            <div className="absolute top-2 right-2 md:top-8 md:right-8 bg-white rounded-xl md:rounded-2xl shadow-xl p-2 md:p-4 animate-float max-w-[140px] md:max-w-none" style={{ animationDelay: '0.5s' }}>
                                <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                                    <TrendingUp className="text-secondary flex-shrink-0" size={16} />
                                    <span className="text-[10px] md:text-xs font-semibold text-gray-700 leading-tight">Enterprises Optimize</span>
                                </div>
                                <p className="text-[10px] md:text-xs text-gray-600">Operations And Grow</p>
                            </div>

                            {/* Bottom Right - IT & digital solutions Badge */}
                            <div className="absolute bottom-2 right-2 md:bottom-8 md:right-8 bg-yellow-400 text-black rounded-lg md:rounded-xl shadow-xl px-2 py-1 md:px-4 md:py-2 font-bold text-[10px] md:text-sm animate-float" style={{ animationDelay: '1.5s' }}>
                                {currentContent.badge}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default WhatWeDoSection;
