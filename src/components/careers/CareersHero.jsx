import React from 'react';

const CareersHero = () => {
    return (
        <div className="relative h-[70vh] lg:h-[90vh] min-h-[500px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 scale-105"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/careers-hero.jpg')`
                }}
            >
            </div>

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <div className="max-w-4xl mx-auto" data-aos="fade-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Our reinvention starts with you.
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100/90 font-medium max-w-2xl mx-auto leading-relaxed">
                        Explore opportunities to build the future of enterprise technology with ThynkTech India.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CareersHero;
