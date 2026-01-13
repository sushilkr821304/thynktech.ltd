import React from 'react';
import { MapPin, Building2, Globe } from 'lucide-react';

const OfficeLocations = () => {
    const offices = [
        {
            city: "Noida",
            state: "Uttar Pradesh",
            role: "Head Office",
            desc: <span className="block text-[15px]">Plot No. 20, Block H-1/A,<br />Sector 63, Noida – 201301,<br />Uttar Pradesh, India</span>
        },
        {
            city: "Pune",
            state: "Maharashtra",
            role: "Corporate Office",
            desc: <span className="block text-[15px]">Office No. 1041, Geras Imperium Rise,<br />Opposite Wipro Circle,<br />Rajiv Gandhi Infotech Park,<br />Hinjewadi Phase 2, Pune – 411057,<br />Maharashtra, India</span>
        }
    ];

    return (
        <section className="py-24 bg-[#001529] relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                        <Globe size={16} className="text-secondary" />
                        <span className="text-secondary text-[10px] font-black uppercase tracking-[0.2em]">Regional Presence</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Our Office <span className="text-secondary">Locations</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-medium leading-relaxed">
                        Operating from India's elite tech hubs to deliver world-class digital solutions
                        with hyper-local expertise and global standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {offices.map((office, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.08] hover:border-secondary/30 transition-all duration-500 group relative backdrop-blur-sm"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <Building2 size={28} />
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                                    <MapPin size={12} className="text-secondary" />
                                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">{office.state}</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-black text-white mb-2">{office.city}</h3>
                            <p className="text-secondary text-sm font-bold uppercase tracking-[0.15em] mb-4">{office.role}</p>
                            <p className="text-gray-400 leading-relaxed font-medium">
                                {office.desc}
                            </p>

                            {/* Decorative line */}
                            <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-white text-sm font-bold flex items-center gap-2">
                                    Visit Office <div className="w-8 h-[1px] bg-secondary"></div>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficeLocations;
