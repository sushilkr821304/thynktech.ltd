import React from 'react';
import benefitImg from '../../assets/culture_innovation.png';
import collabImg from '../../assets/culture_collaboration.png';
import codingImg from '../../assets/culture_coding.png';

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

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4 h-[500px]">
                            <div className="col-span-2 h-[300px] overflow-hidden rounded-2xl shadow-lg relative group">
                                <img
                                    src={benefitImg}
                                    alt="Innovation"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="h-[180px] overflow-hidden rounded-2xl shadow-lg relative group">
                                <img
                                    src={collabImg}
                                    alt="Collaboration"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="h-[180px] overflow-hidden rounded-2xl shadow-lg relative group">
                                <img
                                    src={codingImg}
                                    alt="Coding"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
