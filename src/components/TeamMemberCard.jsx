import React from 'react';

const TeamMemberCard = ({
    name,
    role,
    image,
    isNetwork = false,
    isActive = false,
    hideNetworkButton = false
}) => {
    return (
        <div className={`engineer-card group transition-all duration-500 transform
             bg-white border-gray-100 shadow-sm
            w-full flex flex-col h-full`}
            style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
            <div className="engineer-photo-wrapper aspect-square relative overflow-hidden bg-[#cfd8e3]">
                <img
                    src={image}
                    className="engineer-photo"
                    alt={`${name} - ${role}`}
                    style={{
                        mixBlendMode: 'multiply',
                        filter: 'brightness(1.15) contrast(1.1) saturate(0.9)',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                    }}
                />
            </div>
            <div className="engineer-info p-3 md:p-4 text-center flex-grow flex flex-col justify-center transition-colors duration-500 bg-white">
                <h6 className="m-0 mb-1 font-bold text-[0.95rem] tracking-tight text-[#0f355a]">
                    {name}
                </h6>
                <p className="m-0 text-[0.8rem] font-medium uppercase tracking-wider text-[#6b7b8c]">
                    {role}
                </p>

                {isNetwork && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col items-center gap-3">
                        <div className="flex justify-center gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => (
                                <span key={s} className="text-yellow-400 text-[10px] md:text-[11px]">★</span>
                            ))}
                        </div>
                        {!hideNetworkButton && (
                            <button className="px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                                VIEW PROFILE
                            </button>
                        )}
                    </div>
                )}
            </div>

            <style jsx>{`
                .engineer-card:hover .engineer-photo {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default TeamMemberCard;
