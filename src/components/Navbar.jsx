import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
    ChevronDown, Menu, X, Globe, Smartphone,
    Cloud, Code, Megaphone, Settings, Brain,
    MessageSquare, Palette, MapPin, Building2, Users,
    Rocket, Lightbulb, Database, ShieldCheck, TrendingUp,
    Cpu, BarChart3, Search
} from 'lucide-react';
import { products } from '../data/products';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [hireMobileOpen, setHireMobileOpen] = useState(false);
    const [productsMobileOpen, setProductsMobileOpen] = useState(false);
    const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
    const [aboutMobileOpen, setAboutMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (menu) => {
        if (window.innerWidth >= 1024) { // Enable for Desktop Only
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setActiveDropdown(menu);
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    const hirePositions = [
        { name: "Full Stack Developer", icon: Code, id: "fullstack-developers" },
        { name: "Mobile App Developer", icon: Smartphone, id: "app-developers" },
        { name: "UI/UX Designer", icon: Palette, id: "ui-ux-designers" },
        { name: "Backend Engineer", icon: Database, id: "backend-developers" },
        { name: "QA Engineer", icon: ShieldCheck, id: "qa-engineer" },
        { name: "Business Development Executive", icon: TrendingUp, id: "business-development-executive" },
        { name: "DevOps Engineer", icon: Settings, id: "devops-engineer" },
        { name: "AI ML Engineer", icon: Cpu, id: "ai-developers" },
        { name: "Data Scientist", icon: BarChart3, id: "data-scientist" },
        { name: "Data Analyst", icon: Search, id: "data-analyst" },
    ];

    const serviceCategories = [
        {
            title: "Software Engineering",
            items: [
                { name: "Web Design & Development", id: "web-design-development", icon: Globe },
                { name: "Mobile App Development", id: "mobile-app-development", icon: Smartphone },
                { name: "DevOps Engineering", id: "devops-engineering", icon: Cloud },
                { name: "Software Services", id: "software-services", icon: Code },
                { name: "Automation Testing", id: "automation-testing", icon: Settings },
            ]
        },
        {
            title: "Artificial Intelligence",
            items: [
                { name: "AI / ML Engineering", id: "ai-ml-engineer", icon: Brain },
                { name: "AI Chatbot Development", id: "ai-chatbot-development", icon: MessageSquare },
            ]
        },
        {
            title: "Design & Growth",
            items: [
                { name: "UI / UX Design", id: "ui-ux-designer", icon: Palette },
                { name: "Digital Marketing", id: "digital-marketing", icon: Megaphone },
            ]
        }
    ];

    const allServices = serviceCategories.flatMap(cat => cat.items);

    // Updated IDs to match about routes
    // Updated IDs to match about routes - Using 'path' for direct linking
    const aboutLinks = [
        { name: "About Company", path: "/about/company", icon: Building2 },
        { name: "Why ThynkTech", path: "/why-thynktech", icon: ShieldCheck },
        { name: "Leadership Team", path: "/about/team", icon: Users },
        { name: "Life at ThynkTech", path: "/about/life-at-thynktech", icon: Lightbulb },
    ];

    const NavItem = ({ label, linkTo, hasDropdown, dropdownContent, isProducts = false }) => {
        const isOpen = activeDropdown === label;
        // Check if active based on path. E.g. /products active if path starts with /products
        const isActive = location.pathname.startsWith(linkTo) && linkTo !== '/'
            || (linkTo === '/' && location.pathname === '/');

        return (
            <li
                className={`flex items-center h-full group ${isProducts ? 'static' : 'relative'}`}
                onMouseEnter={() => hasDropdown && handleMouseEnter(label)}
                onMouseLeave={() => hasDropdown && handleMouseLeave()}
            >
                {/* Use Link instead of button for top level nav items */}
                <Link
                    to={linkTo}
                    className={`nav-link flex items-center gap-1.5 py-7 text-[15px] font-bold transition-all duration-300 relative tracking-wide cursor-pointer
                        ${isOpen ? 'text-secondary' : 'text-primary'}`}
                    onClick={() => {
                        setActiveDropdown(null);
                        if (linkTo === '/') window.scrollTo(0, 0);
                    }}
                >
                    {label}
                    {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : 'text-gray-400'}`} />}
                    <span className={`absolute bottom-6 left-0 h-0.5 bg-secondary transition-all duration-300 ${isOpen || isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>

                {/* Dropdown Menu Container */}
                {hasDropdown && isOpen && (
                    <div
                        className={`hidden md:block absolute z-50 animate-in fade-in duration-200 pointer-events-auto
                            ${isProducts
                                ? 'left-1/2 -translate-x-1/2 top-full w-screen max-w-[1000px]'
                                : label === 'Hire'
                                    ? 'left-0 top-full w-[600px]'
                                    : 'left-0 top-full w-[280px]'}`}
                    >
                        <div className="pt-2">
                            <div className={`bg-white rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,43,92,0.12)] border border-gray-100 ring-1 ring-black/5 overflow-hidden`}>
                                {isProducts ? (
                                    /* Products Mega Menu */
                                    <div className="p-10">
                                        {/* Header section */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="text-[28px] font-black text-primary mb-2">Our Featured Products</h3>
                                                <p className="text-gray-500 text-[15px] font-medium">Enterprise-grade solutions for digital transformation.</p>
                                            </div>
                                            <Link
                                                to="/products"
                                                onClick={() => setActiveDropdown(null)}
                                                className="flex items-center gap-3 px-7 py-3 bg-[#f0f9ff] hover:bg-[#e0f2fe] text-secondary text-[13px] font-bold rounded-full transition-all group"
                                            >
                                                EXPLORE ALL
                                            </Link>
                                        </div>

                                        {/* 3-Column Optimized Grid */}
                                        <div className="grid grid-cols-3 gap-x-4 gap-y-0.5">
                                            {(() => {
                                                const hostedNames = [
                                                    "Udaan Digital News",
                                                    "ThynkChat Ai ChatBot",
                                                    "Retail Billing",
                                                    "SmartBiz Sakhi Store",
                                                    "UrbanRide",
                                                    "KrushiKranti Kisan Market"
                                                ];

                                                const sortedProducts = [...products].sort((a, b) => {
                                                    const isAHosted = hostedNames.includes(a.name);
                                                    const isBHosted = hostedNames.includes(b.name);
                                                    if (isAHosted && !isBHosted) return -1;
                                                    if (!isAHosted && isBHosted) return 1;
                                                    return 0;
                                                });

                                                return sortedProducts.map(product => {
                                                    // Now linking to internal product page
                                                    return (
                                                        <Link
                                                            key={product.id}
                                                            to={`/products/${product.slug}`}
                                                            onClick={() => setActiveDropdown(null)}
                                                            className="w-full flex items-center gap-4 p-2.5 rounded-xl font-bold text-primary hover:bg-gray-50 hover:text-secondary transition-all group cursor-pointer"
                                                        >
                                                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-all grayscale-[0.6] opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    className="w-full h-full object-contain"
                                                                    style={{ filter: 'contrast(1.02) brightness(1.02)' }}
                                                                />
                                                            </div>
                                                            <span className="text-[14px] transition-colors truncate">
                                                                {product.name}
                                                            </span>
                                                        </Link>
                                                    );
                                                });
                                            })()}
                                        </div>
                                    </div>
                                ) : (
                                    /* Default structure for Services, About, Contact */
                                    <div className="p-2">
                                        {dropdownContent}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </li>
        );
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-sm py-0' : 'bg-white py-0'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center min-w-max transition-transform hover:scale-105">
                        <img src="/images/logo1.png" alt="ThynkTech Logo" className="h-10 lg:h-12 w-auto" />
                    </Link>

                    {/* Desktop/Tablet Menu */}
                    <div className="hidden lg:flex flex-grow justify-center h-full">
                        <ul className="flex items-center space-x-10 h-full relative">
                            <NavItem label="Home" linkTo="/" />

                            <NavItem
                                label="Products"
                                linkTo="/products"
                                hasDropdown
                                isProducts
                            />

                            <NavItem
                                label="Services"
                                linkTo="/services"
                                hasDropdown
                                dropdownContent={
                                    <div className="p-4 space-y-1">
                                        {allServices.map((service, idx) => (
                                            <Link
                                                key={idx}
                                                to={`/services/${service.id}`}
                                                onClick={() => setActiveDropdown(null)}
                                                className="w-full text-left p-2.5 rounded-xl flex items-center gap-4 font-bold text-primary hover:bg-gray-50 hover:text-secondary transition-all group"
                                            >
                                                <service.icon size={18} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                                <span className="text-[14px]">{service.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                }
                            />

                            <NavItem
                                label="Careers"
                                linkTo="/careers" // Points to Careers Page
                                hasDropdown={false} // No dropdown as per "Rename 'Hire' navigation to 'Careers'" and simplicity
                            />

                            <NavItem
                                label="About"
                                linkTo="/about" // Will redirect to /about/company
                                hasDropdown
                                dropdownContent={
                                    <div className="p-4 space-y-1">
                                        {aboutLinks.map((link, idx) => (
                                            <Link
                                                key={idx}
                                                to={link.path}
                                                onClick={() => setActiveDropdown(null)}
                                                className="w-full text-left p-2.5 rounded-xl flex items-center gap-4 font-bold text-primary hover:bg-gray-50 hover:text-secondary transition-all group"
                                            >
                                                <link.icon size={18} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                                <span className="text-[14px]">{link.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                }
                            />

                            <NavItem
                                label="Contact"
                                linkTo="/contact"
                                hasDropdown
                                dropdownContent={
                                    <div className="p-6">
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <MapPin className="text-secondary shrink-0" size={20} />
                                                <div>
                                                    <h4 className="font-bold text-primary text-sm mb-1">Noida Office</h4>
                                                    <p className="text-[12px] text-gray-500 font-medium">Sector-63, Noida-201301</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 border-t border-gray-50 pt-6">
                                                <MapPin className="text-secondary shrink-0" size={20} />
                                                <div>
                                                    <h4 className="font-bold text-primary text-sm mb-1">Pune Office</h4>
                                                    <p className="text-[12px] text-gray-500 font-medium">Hinjewadi Ph-2, Pune</p>
                                                </div>
                                            </div>
                                            <Link
                                                to="/contact"
                                                onClick={() => setActiveDropdown(null)}
                                                className="w-full block text-center py-3 bg-primary hover:bg-secondary text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md mt-2 cursor-pointer"
                                            >
                                                Book fit call
                                            </Link>
                                        </div>
                                    </div>
                                }
                            />
                        </ul>
                    </div>

                    {/* Right CTA */}
                    <div className="flex items-center gap-6 min-w-max">
                        <Link to="/contact" className="hidden md:flex px-7 py-2.5 bg-secondary hover:bg-primary text-white font-bold rounded-full transition-all text-[14px] shadow-sm hover:shadow-md cursor-pointer">
                            Connect With Us
                        </Link>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-primary bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - UPDATED for SPA */}
                {isMenuOpen && (
                    <div className="lg:hidden fixed inset-0 top-20 bg-white z-[60] animate-in slide-in-from-right duration-300 overflow-y-auto border-t border-gray-100">
                        <div className="flex flex-col p-8 space-y-6">
                            {[
                                { label: 'Home', linkTo: '/' },
                                { label: 'Products', id: 'products', linkTo: '/products' },
                                { label: 'Services', id: 'services', linkTo: '/services' },
                                { label: 'Careers', linkTo: '/careers' },
                                { label: 'About', id: 'about', linkTo: '/about' },
                                { label: 'Contact', linkTo: '/contact' }
                            ].map((item) => (
                                <div key={item.label} className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                        {['products', 'services', 'about'].includes(item.id) ? (
                                            <button
                                                onClick={() => {
                                                    if (item.id === 'products') setProductsMobileOpen(!productsMobileOpen);
                                                    else if (item.id === 'services') setServicesMobileOpen(!servicesMobileOpen);
                                                    else if (item.id === 'about') setAboutMobileOpen(!aboutMobileOpen);
                                                }}
                                                className={`text-left text-[18px] font-bold transition-all duration-300 flex-grow py-1
                                                    ${(item.id === 'products' && productsMobileOpen) ||
                                                        (item.id === 'services' && servicesMobileOpen) ||
                                                        (item.id === 'about' && aboutMobileOpen) ? 'text-secondary' : 'text-primary'}`}
                                            >
                                                {item.label}
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.linkTo}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-left text-[18px] font-bold text-primary transition-all duration-300 flex-grow py-1"
                                            >
                                                {item.label}
                                            </Link>
                                        )}

                                        {['products', 'services', 'about'].includes(item.id) && (
                                            <button
                                                onClick={() => {
                                                    if (item.id === 'products') setProductsMobileOpen(!productsMobileOpen);
                                                    else if (item.id === 'services') setServicesMobileOpen(!servicesMobileOpen);
                                                    else if (item.id === 'about') setAboutMobileOpen(!aboutMobileOpen);
                                                }}
                                                className="p-2 text-primary"
                                            >
                                                <ChevronDown
                                                    size={20}
                                                    className={`transition-transform duration-300
                                                        ${(item.id === 'products' && productsMobileOpen) ||
                                                            (item.id === 'services' && servicesMobileOpen) ||
                                                            (item.id === 'about' && aboutMobileOpen) ? 'rotate-180 text-secondary' : ''}`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {item.id === 'products' && productsMobileOpen && (
                                        <div className="flex flex-col gap-2 mt-4 animate-in slide-in-from-top-4 duration-300 pl-4 border-l-2 border-gray-100">
                                            <Link
                                                to="/products"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setProductsMobileOpen(false);
                                                }}
                                                className="p-3 rounded-xl flex items-center gap-4 font-bold text-secondary bg-gray-50 transition-all uppercase tracking-widest text-[11px]"
                                            >
                                                Explore All Products
                                            </Link>
                                            {products.map((product, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={`/products/${product.slug}`}
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setProductsMobileOpen(false);
                                                    }}
                                                    className="p-3 rounded-xl flex items-center gap-4 font-bold text-primary hover:bg-gray-50 hover:text-secondary transition-all group"
                                                >
                                                    <div className="w-6 h-6 flex-shrink-0">
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                                                    </div>
                                                    <span className="text-[14px]">{product.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {item.id === 'services' && servicesMobileOpen && (
                                        <div className="flex flex-col gap-2 mt-4 animate-in slide-in-from-top-4 duration-300 pl-4 border-l-2 border-gray-100">
                                            <Link
                                                to="/services"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setServicesMobileOpen(false);
                                                }}
                                                className="p-3 rounded-xl flex items-center gap-4 font-bold text-secondary bg-gray-50 transition-all uppercase tracking-widest text-[11px]"
                                            >
                                                All Services
                                            </Link>
                                            {allServices.map((service, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={`/services/${service.id}`}
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setServicesMobileOpen(false);
                                                    }}
                                                    className="p-3 rounded-xl flex items-center gap-4 font-bold text-primary hover:bg-gray-50 hover:text-secondary transition-all group"
                                                >
                                                    <service.icon size={18} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                                    <span className="text-[14px]">{service.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {item.id === 'about' && aboutMobileOpen && (
                                        <div className="flex flex-col gap-2 mt-4 animate-in slide-in-from-top-4 duration-300 pl-4 border-l-2 border-gray-100">
                                            {aboutLinks.map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={link.path}
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setAboutMobileOpen(false);
                                                    }}
                                                    className="p-3 rounded-xl flex items-center gap-4 font-bold text-primary hover:bg-gray-50 hover:text-secondary transition-all group"
                                                >
                                                    <link.icon size={18} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                                    <span className="text-[14px]">{link.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            ))}

                            <div className="pt-8 mt-4 border-t border-gray-50 space-y-4">
                                <Link
                                    to="/contact"
                                    onClick={() => { setIsMenuOpen(false); }}
                                    className="w-full block text-center py-4 bg-secondary text-white rounded-2xl font-bold text-[16px] shadow-lg active:scale-[0.98] transition-all"
                                >
                                    Partner With Us
                                </Link>
                                <p className="text-center text-[12px] text-gray-400 font-medium tracking-wide">© 2025 ThynkTech India Limited</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
