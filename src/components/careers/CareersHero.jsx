import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/culture_collaboration.png'; // Assuming this exists

const CareersHero = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('Pune');

    const handleSearch = () => {
        navigate(`/careers/jobs?keyword=${keyword}&location=${location}`);
    };

    return (
        <div className="relative h-[600px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 drop-shadow-xl tracking-tight max-w-4xl">
                    Our reinvention starts with you.
                </h1>

                <div className="bg-white p-2 rounded-md shadow-2xl flex flex-col md:flex-row gap-3 w-full max-w-5xl mx-auto">
                    <div className="flex-grow relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search by Skills, Keywords or Job Title"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#3498DB] focus:border-[#3498DB] outline-none text-gray-700 placeholder-gray-400"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/3 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value="Pune, India"
                            readOnly
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-600 outline-none cursor-default"
                        />
                    </div>
                    <button
                        onClick={handleSearch}
                        className="bg-[#3498DB] hover:bg-[#2980b9] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm flex items-center justify-center whitespace-nowrap"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CareersHero;
