import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section
            id="home"
            className="
        relative
        min-h-[100svh]
        flex
        items-center
        pt-16
        pb-12
        bg-cover
        bg-center
        overflow-hidden
      "
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/90"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">

                    {/* LEFT TEXT */}
                    <div className="w-full lg:w-[52%] lg:-mt-12">

                        {/* Badge */}
                        <div className="mb-3">
                            <span className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full font-semibold text-sm border border-white/20">
                                <i className="fas fa-star mr-2 text-yellow-300"></i>
                                Award-Winning Solutions
                            </span>
                        </div>

                        {/* Heading (SLIGHTLY BIGGER) */}
                        <h1 className="
              text-[36px]
              sm:text-4xl
              md:text-5xl
              lg:text-[64px]
              font-extrabold
              text-white
              leading-[1.1]
              mb-3
            ">
                            Transforming Ideas Into <br />
                            <span className="text-yellow-400">Digital Excellence</span>
                        </h1>

                        {/* Subtitle (slightly bigger) */}
                        <p className="text-[18px] md:text-lg text-blue-100 max-w-xl mb-6">
                            Building innovative software solutions that empower businesses
                            to thrive in the digital era
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 lg:gap-12 mb-6">
                            <div className="flex items-center gap-3">
                                <i className="fas fa-users text-3xl text-white"></i>
                                <div>
                                    <h3 className="text-3xl font-bold text-white leading-none">700+</h3>
                                    <p className="text-blue-100 text-sm mt-1">Happy Employees</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fas fa-project-diagram text-3xl text-white"></i>
                                <div>
                                    <h3 className="text-3xl font-bold text-white leading-none">29+</h3>
                                    <p className="text-blue-100 text-sm mt-1">Own running Projects</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fas fa-certificate text-3xl text-white"></i>
                                <div>
                                    <h3 className="text-3xl font-bold text-white leading-none">50+</h3>
                                    <p className="text-blue-100 text-sm mt-1">Awards Won</p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => navigate('/products')}
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#002B5C] font-bold text-base rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <i className="fas fa-rocket mr-2.5 text-[#3498DB]"></i>
                                EXPLORE PRODUCTS
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-bold text-base rounded-full hover:bg-white hover:text-[#002B5C] transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <i className="fas fa-paper-plane mr-2.5"></i>
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-[48%] flex justify-end relative">
                        <div
                            className="
                relative
                max-w-xl
                lg:max-w-2xl
                lg:translate-x-10   /* 👉 image aur RIGHT shift */
                scale-103           /* 👉 image thodi BADI */
              "
                        >
                            {/* Soft Glow */}
                            <div className="absolute inset-0 m-auto w-[88%] h-[88%] bg-blue-500/20 blur-2xl rounded-full"></div>

                            <img
                                src="/images/services-illustration.svg"
                                alt="ThynkTech Digital Solutions"
                                className="relative z-10 w-full h-auto"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
