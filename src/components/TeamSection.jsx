
const teamMembers = [
    {
        name: 'Rasika Sonawane',
        role: 'Human Resources Manager',
        image: '/images/team1.jpg',
        email: 'hr@thynktech.ltd'
    },
    {
        name: 'Hrushikesh Kakulte',
        role: 'Operations Manager',
        image: '/images/team2.jpg',
        email: 'operation@thynktech.ltd'
    },
    {
        name: 'Dhruvil Parekh',
        role: 'Training and Development Head',
        image: '/images/team3.JPG',
        email: 'recruiter@thynktech.ltd'
    },
    {
        name: 'Saumya Singh',
        role: 'Human Resources Executive',
        image: '/images/team4.jpg',
        email: 'campus@thynktech.ltd'
    },

    {
        name: 'Chandra Mohan Rao',
        role: 'Sales Manager',
        image: '/images/mohan.png',
        email: 'campus@thynktech.ltd'
    }
];

const TeamSection = () => {
    // Duplicate for infinite scroll
    const marqueeMembers = [...teamMembers, ...teamMembers];

    return (
        <section id="team" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Meet Our Leadership Team</h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        The talented minds turning vision into scalable, intelligent solutions. Passion, precision and purpose in every build.
                    </p>
                </div>

                <div className="team-marquee">
                    <div className="team-track">
                        {marqueeMembers.map((member, index) => (
                            <div className="team-card" key={`${member.name}-${index}`}>
                                <div className="team-photo-wrapper">
                                    <img
                                        src={member.image}
                                        className="team-photo"
                                        alt={`${member.name} - ${member.role}`}
                                    />
                                    <div className="team-overlay">
                                        <div className="social-links flex">
                                            {member.linkedin && (
                                                <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            )}
                                            <a href={`mailto:${member.email}`} aria-label="Email">
                                                <i className="fas fa-envelope"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h5>{member.name}</h5>
                                    <p className="role">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
