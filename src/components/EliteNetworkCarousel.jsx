import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TeamMemberCard from './TeamMemberCard';

const EliteNetworkCarousel = ({ items, title, subtitle }) => {
    // We create a very long track by repeating items multiple times.
    // This ensures that even for small item sets (like 3 or 4 devs), 
    // there is always enough content to fill the screen (6 cards) without gaps.
    const setsToRepeat = 8;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(6);
    const autoplayRef = useRef(null);
    const totalItems = items.length;

    // Duplicate the items array multiple times for a 'pseudo-infinite' track
    const infiniteItems = Array(setsToRepeat).fill(items).flat();

    // Calculate the "center" of our track to start the slider
    // We start in the middle sets so we can scroll far in either direction
    const centerIndex = Math.floor(setsToRepeat / 2) * totalItems;

    const updateDimensions = useCallback(() => {
        if (typeof window === 'undefined') return;
        const width = window.innerWidth;
        if (width < 768) setItemsPerView(1);
        else if (width < 1024) setItemsPerView(3);
        else setItemsPerView(6);
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        setCurrentIndex(centerIndex);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [centerIndex, updateDimensions]);

    const moveSlide = useCallback((direction) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + direction);
    }, [isTransitioning]);

    const nextSlide = useCallback(() => moveSlide(1), [moveSlide]);
    const prevSlide = useCallback(() => moveSlide(-1), [moveSlide]);

    // This is the CORE loop logic. 
    // When we move far enough from the center, we silently "teleport" back to the center 
    // at a point that looks exactly the same to the user.
    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);

                // If we've drifted too far from the center set (e.g., more than 1 set away),
                // teleport back to the equivalent position in the center set.
                const drift = currentIndex - centerIndex;
                if (Math.abs(drift) >= totalItems) {
                    const normalizedDrift = drift % totalItems;
                    setCurrentIndex(centerIndex + normalizedDrift);
                }
            }, 500); // Wait for transition animation to finish
            return () => clearTimeout(timer);
        }
    }, [isTransitioning, currentIndex, centerIndex, totalItems]);

    // FIXED: Autoplay logic that NEVER stops.
    // Each slide remains visible for 2 seconds.
    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, [nextSlide]);

    if (!items || items.length === 0) return null;

    return (
        <section className="py-24 bg-[#f4f9ff] border-t-2 border-blue-50/80 overflow-hidden relative w-full select-none">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-slide-in">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight tracking-tight">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium opacity-80">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="relative max-w-[1440px] mx-auto group/slider">
                    {/* Navigation - Always visible on desktop hover, high z-index */}
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-50 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-xl rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100 opacity-0 group-hover/slider:opacity-100 scale-90 hover:scale-100"
                    >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-50 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-xl rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100 opacity-0 group-hover/slider:opacity-100 scale-90 hover:scale-100"
                    >
                        <ChevronRight size={24} strokeWidth={2.5} />
                    </button>

                    <div className="overflow-hidden cursor-grab active:cursor-grabbing">
                        <div
                            className="flex"
                            style={{
                                transition: isTransitioning ? 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                width: '100%'
                            }}
                        >
                            {infiniteItems.map((talent, idx) => (
                                <div
                                    key={idx}
                                    className="px-6 py-4 md:p-4 flex-shrink-0 flex justify-center"
                                    style={{ width: `${100 / itemsPerView}%` }}
                                >
                                    <div className="w-full max-w-[220px] md:max-w-none">
                                        <TeamMemberCard
                                            {...talent}
                                            isNetwork={true}
                                            isActive={false}
                                            hideNetworkButton={true}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicators Synchronized to original items count */}
                    <div className="flex justify-center gap-3 mt-12">
                        {items.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-500 
                                    ${(currentIndex % totalItems) === idx ? 'w-10 bg-secondary' : 'w-2 bg-gray-200'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EliteNetworkCarousel;
