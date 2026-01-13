
const FounderSection = () => {
    return (
        <section id="founder" className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0 animate-slide-in">
                        <div className="founder-photo-wrapper">
                            <div className="founder-chip chip-1">
                                <i className="fas fa-shield-alt"></i> Trust & Integrity
                            </div>
                            <img
                                src="/images/Founder.JPG"
                                alt="Mr. Harshal B Thakre CEO"
                                className="img-fluid rounded shadow founder-photo w-full"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="founder-chip chip-2">
                                <i className="fas fa-bolt"></i> Tech Vision
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 px-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Meet Our Founder</h2>
                        <h4 className="text-xl font-semibold mb-1">Mr. Harshal B Thakre</h4>
                        <p className="text-gray-500 mb-3">Sr. Business Head  ThynkTech India</p>
                        <p className="founder-tagline mb-3">Visionary leadership driving innovation</p>
                        <p className="founder-bio lead mb-3">
                            A passionate technologist and entrepreneur who envisioned a platform that empowers businesses through intelligent, scalable, and human‑centric digital solutions.
                        </p>
                        <p className="mb-3 text-gray-600">
                            With a track record of building products and teams, Mr. Thakre champions a culture of craftsmanship, continuous learning, and customer-centric execution—turning bold ideas into reliable, growth-focused solutions.
                        </p>
                        <p className="mb-4 text-gray-600">
                            <em>"Innovation with empathy creates meaningful transformation."</em>
                        </p>
                        <div className="founder-highlights flex flex-wrap gap-3 mb-4">
                            <div className="highlight-item"><i className="fas fa-rocket"></i> 18+ Years Experience</div>
                            <div className="highlight-item"><i className="fas fa-lightbulb"></i> Product Strategist</div>
                            <div className="highlight-item"><i className="fas fa-users"></i> Team Mentor</div>
                            <div className="highlight-item"><i className="fas fa-award"></i> Industry Recognition</div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://www.linkedin.com/in/harshal-thakre-988a7bbb"
                                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin me-2"></i>Connect
                            </a>
                            <a
                                href="#"
                                className="border-2 border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-all flex items-center"
                            >
                                <i className="fas fa-quote-left me-2"></i>Read Story
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
