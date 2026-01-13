import React from 'react';
import { useNavigate } from 'react-router-dom';
import earlyCareersImg from '../../assets/culture_coding.png';
import professionalImg from '../../assets/culture_meeting.png';

const CategoryCard = ({ title, image, type }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/careers/jobs?type=${type}`)}
            className="group relative h-80 md:h-[400px] w-full cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-3xl font-bold text-white mb-3 tracking-wide">
                    {title}
                </h3>
                <span className="text-[#3498DB] font-bold tracking-wider uppercase text-sm flex items-center group-hover:text-white transition-colors">
                    Explore Opportunities <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
            </div>
        </div>
    );
};

const CareerCategories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CategoryCard
                        title="Early Careers"
                        image={earlyCareersImg}
                        type="fresher"
                    />
                    <CategoryCard
                        title="Experienced Professionals"
                        image={professionalImg}
                        type="experienced"
                    />
                </div>
            </div>
        </section>
    );
};

export default CareerCategories;
