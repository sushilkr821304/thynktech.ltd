
import { salesTeam } from '../data/sales';

const SalesSection = () => {
    // Duplicate for infinite scroll
    const marqueeSales = [...salesTeam, ...salesTeam];

    return (
        <section id="sales" className="py-12 bg-white">
            <div className="container-fluid">
                <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Sales Team</h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        70 sales professionals driving growth and building strong customer relationships across regions.
                    </p>
                </div>

                <div className="sales-marquee">
                    <div className="sales-track">
                        {marqueeSales.map((member, index) => (
                            <div className="sales-card" key={`${member.name}-${index}`}>
                                <div className="sales-photo-wrapper">
                                    <img
                                        src={member.image}
                                        className="sales-photo"
                                        alt={`${member.name} - ${member.role}`}
                                    />
                                </div>
                                <div className="sales-info">
                                    <h6>{member.name}</h6>
                                    <p className="role">{member.role}</p>
                                    <p className="Division">Division: {member.division}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalesSection;
