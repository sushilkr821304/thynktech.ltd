import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { jobListings } from '../data/jobListings';

const ApplicationPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Find job title for context
    const job = jobListings.find(j => j.id === id);
    const jobTitle = job ? job.title : 'Position';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        // Simulating API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="font-sans text-gray-900 antialiased bg-gray-50 min-h-screen flex flex-col">
                <Navbar />
                <div className="pt-24 pb-12 flex-grow container mx-auto px-4 flex items-center justify-center">
                    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-green-500">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
                        <p className="text-gray-500 mb-6">Thank you for applying for <span className="font-semibold text-gray-800">{jobTitle}</span>. Our team will review your profile and get back to you shortly.</p>
                        <button
                            onClick={() => navigate('/careers/jobs')}
                            className="text-[#3498DB] font-bold hover:bg-blue-50 px-6 py-2 rounded-lg transition-colors border border-blue-200"
                        >
                            Back to Jobs
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="font-sans text-gray-900 antialiased bg-gray-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-20 pb-12 flex-grow container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                    <div className="mb-8 border-b border-gray-100 pb-4">
                        <button onClick={() => navigate(-1)} className="flex items-center text-gray-400 hover:text-gray-900 mb-4 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                        </button>
                        <h1 className="text-2xl font-bold text-gray-900">Apply for <span className="text-[#002B5C]">{jobTitle}</span></h1>
                        <p className="text-gray-500 text-sm mt-1">ID: {id}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                <span className="bg-blue-100 text-[#002B5C] w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">First Name <span className="text-red-500">*</span></label>
                                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                    <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" />
                                </div>
                            </div>
                        </div>

                        {/* Professional Details */}
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                <span className="bg-blue-100 text-[#002B5C] w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                                Professional Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Total Experience (Years) <span className="text-red-500">*</span></label>
                                    <input type="number" min="0" step="0.5" placeholder="0 for Freshers" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Current Company</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" placeholder="Optional" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">LinkedIn Profile URL</label>
                                    <input type="url" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" placeholder="https://linkedin.com/in/..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Portfolio / Github URL</label>
                                    <input type="url" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" placeholder="Optional" />
                                </div>
                            </div>
                        </div>

                        {/* Resume & Message */}
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                <span className="bg-blue-100 text-[#002B5C] w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                                Resume & Additional Info
                            </h3>
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Upload Resume <span className="text-red-500">*</span></label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-white hover:border-[#3498DB] transition-all cursor-pointer bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <p className="text-gray-500 text-sm font-medium">Click to upload Resume (PDF, DOCX)</p>
                                    <p className="text-xs text-gray-400 mt-1">Max 5MB</p>
                                    <input type="file" required accept=".pdf,.doc,.docx" className="hidden" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">Cover Letter / Message</label>
                                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498DB] outline-none transition-shadow" rows="4" placeholder="Tell us why you're a great fit..."></textarea>
                            </div>
                        </div>

                        <div className="flex items-center pt-4">
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full bg-[#3498DB] hover:bg-[#2980b9] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 flex items-center justify-center ${submitting ? 'opacity-75 cursor-wait' : ''}`}
                            >
                                {submitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" verify="true" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting Application...
                                    </>
                                ) : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ApplicationPage;
