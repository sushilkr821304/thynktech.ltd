import React from 'react';

const WhyWeDoIt = () => {
    return (
        <section className="py-24 bg-[#002B5C] text-white"> {/* Restored Original Primary Color */}
            <div className="container mx-auto px-4 text-center max-w-5xl">
                <h2 className="text-5xl font-bold mb-6 tracking-tight">Why We Do It</h2>
                <h3 className="text-2xl text-[#3498DB] mb-8 font-light italic">Because we care deeply.</h3>
                <p className="text-xl leading-relaxed text-blue-100 font-light max-w-4xl mx-auto">
                    At <span className="font-semibold text-white">ThynkTech India</span>, we believe that technology is more than just code—it's about creating
                    meaningful impact. We are driven by a shared passion to solve complex problems and
                    empower businesses to thrive in a digital-first world. Our culture is built on
                    integrity, innovation, and an unwavering commitment to excellence. We don't just
                    build software; we build the future, one solution at a time.
                </p>
            </div>
        </section>
    );
};

export default WhyWeDoIt;
