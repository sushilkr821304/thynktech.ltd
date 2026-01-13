import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { jobListings } from '../data/jobListings';
import heroImage from '../assets/life_hero.png';

const JobDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const foundJob = jobListings.find(j => j.id === id);
        if (foundJob) {
            setJob(foundJob);
        }
        window.scrollTo(0, 0);
    }, [id]);

    const handleApply = () => {
        navigate(`/careers/apply/${id}`);
    };

    if (!job) return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />
            <div className="flex-grow flex items-center justify-center pt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Job Not Found</h2>
                    <button onClick={() => navigate('/careers/jobs')} className="text-purple-600 hover:underline mt-2">Back to Jobs</button>
                </div>
            </div>
            <Footer />
        </div>
    );

    return (
        <div className="font-sans text-gray-900 antialiased bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            {/* Banner Section */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden mt-20"> {/* Adjust for navbar */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="absolute inset-0 bg-[#002B5C]/80 mix-blend-multiply"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{job.title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-8 flex-grow">
                {/* Main Content */}
                <div className="w-full md:w-2/3">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-100 pb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                                <p className="text-lg text-gray-600 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    {job.city}, {job.state}
                                </p>
                            </div>
                            <button
                                onClick={handleApply}
                                className="mt-4 md:mt-0 bg-[#3498DB] hover:bg-[#2980b9] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
                            >
                                Apply Now
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
                            <div>
                                <span className="block text-gray-500 mb-1 uppercase tracking-wide text-xs font-semibold">Job ID</span>
                                <span className="font-mono text-gray-900 bg-gray-50 px-2 py-1 rounded">{job.id}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 mb-1 uppercase tracking-wide text-xs font-semibold">Department</span>
                                <span className="font-medium text-gray-900">{job.department}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 mb-1 uppercase tracking-wide text-xs font-semibold">Type</span>
                                <span className="font-medium text-[#002B5C] bg-blue-50 px-2 py-1 rounded inline-block">{job.type}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 mb-1 uppercase tracking-wide text-xs font-semibold">Posted Date</span>
                                <span className="font-medium text-gray-900">{job.postedDate}</span>
                            </div>
                        </div>

                        <div className="prose prose-blue max-w-none text-gray-600">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
                            <p className="mb-6 leading-relaxed whitespace-pre-line">{job.description}</p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements & Skills</h3>
                            <ul className="list-disc pl-5 space-y-2 mb-6">
                                {job.skills.map((skill, index) => (
                                    <li key={index} className="text-gray-700">{skill}</li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">About the Role</h3>
                            <p className="leading-relaxed">
                                Join our dynamic team where you will have the opportunity to work on cutting-edge technologies
                                and contribute to projects that impact millions of users. We value innovation, collaboration,
                                and continuous learning.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side Panel */}
                <div className="w-full md:w-1/3 space-y-6">
                    {/* Video Section */}
                    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-black">
                        <div className="aspect-w-16 aspect-h-9 relative h-48 bg-gray-800 flex items-center justify-center group cursor-pointer">
                            <i className="fas fa-play-circle text-white text-5xl opacity-80 group-hover:opacity-100 transition-opacity"></i>
                            <span className="absolute bottom-2 left-2 text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded">Life at ThynkTech</span>
                        </div>
                    </div>

                    {/* Similar Jobs or Other Links */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Share this Job</h3>
                        <div className="flex gap-4 text-2xl text-gray-400">
                            <a href="#" className="hover:text-blue-700 transition-colors"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="hover:text-pink-600 transition-colors"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default JobDetailsPage;
