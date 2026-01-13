import React from 'react';
import { Link } from 'react-router-dom';

const GlobalCTA = () => {
    return (
        <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-normal text-white mb-6 tracking-wide">
                    With you for the long <span className="block mt-2">run</span>
                </h2>

                <p className="text-gray-300 text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Whether you are a startup, enterprise, or growing business, ThynkTech India is committed to being your long-term technology partner. We build scalable, secure, and future-ready digital solutions that grow with you.
                </p>

                <Link
                    to="/contact"
                    className="inline-block px-8 py-3 text-base font-medium text-white border border-gray-500 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900"
                >
                    Contact us
                </Link>
            </div>
        </section>
    );
};

export default GlobalCTA;
