import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { jobs } from '../data/careers';

const JobListingPage = () => {
    const location = useLocation();

    // Initialize keyword from URL query params
    const getInitialKeyword = () => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get('keyword') || '';
    };

    const [keyword, setKeyword] = useState(getInitialKeyword());
    const [searchLocation, setSearchLocation] = useState('Pune'); // Default to Pune
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Update keyword if URL changes (e.g. searching from Hero again while on Listing page)
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const urlKeyword = searchParams.get('keyword');
        if (urlKeyword !== null) {
            setKeyword(urlKeyword);
        }
    }, [location.search]);

    // Filtering and Sorting Logic
    const filteredJobs = jobs.filter(job => {
        if (!keyword) return true;

        const lowerKeyword = keyword.toLowerCase().trim();
        const matchesKeyword = job.title.toLowerCase().includes(lowerKeyword) ||
            job.description.toLowerCase().includes(lowerKeyword) ||
            job.requirements.some(req => req.toLowerCase().includes(lowerKeyword));

        // Location is always Pune in the new data, so filter by Pune if selected
        const matchesLocation = searchLocation === '' || job.location.toLowerCase().includes(searchLocation.toLowerCase());

        return matchesKeyword && matchesLocation;
    }).sort((a, b) => {
        if (!keyword) return 0;
        const lowerKeyword = keyword.toLowerCase().trim();

        // Relevance scoring
        const scoreA = getRelevanceScore(a, lowerKeyword);
        const scoreB = getRelevanceScore(b, lowerKeyword);

        return scoreB - scoreA; // Descending order
    });

    function getRelevanceScore(job, term) {
        if (job.title.toLowerCase().includes(term)) return 3; // Highest priority for Title
        if (job.requirements.some(req => req.toLowerCase().includes(term))) return 2; // Medium priority for Skills
        if (job.description.toLowerCase().includes(term)) return 1; // Lower priority for Description
        return 0;
    }

    return (
        <div className="font-sans text-gray-900 antialiased bg-gray-50 min-h-screen">
            <Navbar />

            {/* Search Header */}
            <div className="bg-[#002B5C] py-12 pt-20 shadow-lg"> {/* Enterprise Dark Blue */}
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                        Find Your Next Role at ThynkTech
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
                            className="bg-[#3498DB] hover:bg-[#2980b9] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm flex items-center justify-center whitespace-nowrap"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters - Visual Only mostly given uniform data */}
                <div className="w-full lg:w-1/4">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm sticky top-28">
                        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                            <h3 className="text-lg font-bold text-[#002B5C]">Filters</h3>
                            <button
                                onClick={() => setKeyword('')}
                                className="text-xs text-[#3498DB] font-semibold hover:underline"
                            >
                                Clear All
                            </button>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-3 text-gray-700">Employment Type</label>
                            <div className="space-y-2">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" checked className="mr-3 h-4 w-4 text-[#002B5C] border-gray-300 rounded focus:ring-[#002B5C]" readOnly />
                                    <span className="text-gray-600 text-sm">Full Time</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-3 text-gray-700">Location</label>
                            <div className="space-y-2">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" checked className="mr-3 h-4 w-4 text-[#002B5C] border-gray-300 rounded focus:ring-[#002B5C]" readOnly />
                                    <span className="text-gray-600 text-sm">Pune, India</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Results */}
                <div className="w-full lg:w-3/4">
                    <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                        <span className="bg-[#002B5C] text-white text-xs font-bold px-2.5 py-1 rounded mr-3">{filteredJobs.length}</span>
                        Positions Available
                    </h2>

                    <div className="space-y-5">
                        {filteredJobs.length > 0 ? filteredJobs.map((job, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 hover:border-[#3498DB] hover:shadow-md transition-all duration-300 p-6 group">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 text-[#002B5C] rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#002B5C] group-hover:text-white transition-colors">
                                            <i className={job.icon}></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3498DB] transition-colors mb-1">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                                                <span className="flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-2 text-gray-400"></i> {job.location}
                                                </span>
                                                <span className="flex items-center">
                                                    <i className="fas fa-clock mr-2 text-gray-400"></i> {job.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl">
                                                {job.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {job.requirements.map((req, idx) => (
                                                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium border border-gray-200">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 mt-4 md:mt-0 self-start md:self-center">
                                        <a
                                            href="https://thynktech.recruitment.ltd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center bg-[#3498DB] hover:bg-[#2980b9] text-white font-semibold py-2.5 px-6 rounded-md transition-colors shadow-sm whitespace-nowrap"
                                        >
                                            Apply Now <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="text-center py-16 bg-white rounded-lg border border-dashed border-gray-300">
                                <div className="text-gray-400 text-5xl mb-4">
                                    <i className="far fa-folder-open"></i>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">No positions found</h3>
                                <p className="text-gray-500 mt-1">Try adjusting your search criteria.</p>
                                <button
                                    onClick={() => setKeyword('')}
                                    className="mt-4 text-[#3498DB] font-semibold hover:underline"
                                >
                                    Clear Search
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JobListingPage;
