
import { jobs } from '../data/careers';

const CareersSection = () => {
    return (
        <section id="careers" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Join Our Team</h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        We're always looking for talented individuals to join our mission of building innovative technology solutions. Explore current openings below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, index) => (
                        <div key={index} id={job.title.toLowerCase().replace(/\s+/g, '-')} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="job-card h-full flex flex-col p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="job-header flex justify-between items-start mb-6">
                                    <div className="job-icon w-14 h-14 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-md">
                                        <i className={job.icon}></i>
                                    </div>
                                    <span className="job-type bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                                        {job.type}
                                    </span>
                                </div>

                                <h4 className="job-title text-xl font-bold text-primary mb-2">{job.title}</h4>
                                <p className="job-location text-gray-500 text-sm mb-4">
                                    <i className="fas fa-map-marker-alt mr-2"></i>{job.location}
                                </p>

                                <p className="job-description text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {job.description}
                                </p>

                                <ul className="job-requirements text-sm text-gray-600 space-y-2 mb-6">
                                    {job.requirements.map((req, i) => (
                                        <li key={i} className="pl-6 relative">
                                            <span className="absolute left-0 text-blue-500 font-bold">✓</span>
                                            {req}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`mailto:campus@thynktech.ltd?subject=${job.emailSubject}`}
                                    className="btn bg-primary text-white w-full py-3 rounded-xl hover:bg-opacity-90 transition-colors flex items-center justify-center font-semibold mt-auto"
                                >
                                    <i className="fas fa-paper-plane mr-2"></i>Apply Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersSection;
