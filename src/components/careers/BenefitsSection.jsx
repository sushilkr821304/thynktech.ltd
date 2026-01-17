import React from 'react';

const BenefitsSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 tracking-tight">Benefits & Culture</h2>

                        <div className="space-y-10">
                            <div className="flex items-start group">
                                <div className="bg-blue-50 p-4 rounded-xl text-[#3498DB] mr-6 flex-shrink-0 group-hover:bg-[#3498DB] group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Growth & Learning</h4>
                                    <p className="text-gray-600 leading-relaxed">Continuous learning opportunities, global certifications, and personalized mentorship programs to accelerate your professional journey.</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-blue-50 p-4 rounded-xl text-[#3498DB] mr-6 flex-shrink-0 group-hover:bg-[#3498DB] group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Work-Life Balance</h4>
                                    <p className="text-gray-600 leading-relaxed">Flexible working models, comprehensive wellness programs, and leave policies that respect your personal time and well-being.</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-blue-50 p-4 rounded-xl text-[#3498DB] mr-6 flex-shrink-0 group-hover:bg-[#3498DB] group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Inclusive Environment</h4>
                                    <p className="text-gray-600 leading-relaxed">A diverse and inclusive workplace where every voice is heard, valued, and empowered to make a difference.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px]">
                        <div className="w-full h-full overflow-hidden rounded-2xl shadow-xl border border-gray-100 relative group">
                            <img
                                src="/images/office-team.jpg"
                                alt="ThynkTech Office Team"
                                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
