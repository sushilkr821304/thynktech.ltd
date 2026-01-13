import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <section id="contact" className="pt-0 pb-12 relative overflow-hidden bg-gray-50">
            <div className="contact-background"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 animate-slide-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Let's Connect</h2>
                    <p className="text-xl text-gray-500">Have a project in mind? We'd love to hear from you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Visit Us */}
                    <div className="contact-info-card animate-slide-in" style={{ animationDelay: '100ms' }}>
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h5 className="text-xl font-bold text-primary mb-4">Visit Us</h5>
                        <p className="mb-2 font-bold">Head Office (Noida)</p>
                        <p className="text-gray-500 text-sm mb-4">
                            Plot No. 20, Block : H-1/A, Sector-63, Noida-201301, India
                        </p>
                        <p className="mb-2 font-bold mt-4">Corporate Office (Pune)</p>
                        <p className="text-gray-500 text-sm">
                            1041, Geras Imperium Rise, Opposite Wipro Circle, Rajiv Gandhi Infotech Park, Hinjewadi Phase 2, Pune - 411057 (MAH) India
                        </p>
                    </div>

                    {/* Call Us */}
                    <div className="contact-info-card animate-slide-in" style={{ animationDelay: '200ms' }}>
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h5 className="text-xl font-bold text-primary mb-4">Call Us</h5>
                        <p className="mb-2"><strong>Customer Care Number:</strong><br /><a href="tel:+918069640559" className="text-secondary hover:text-primary transition-colors">080696 40559</a></p>
                        <p className="mb-2"><strong>Sales Inquiries:</strong><br /><a href="tel:+918432507570" className="text-secondary hover:text-primary transition-colors">+91 84325 07570</a></p>
                        <p className="text-gray-500 text-sm mt-4">Mon - Fri: 06:00 AM - 10:00 PM</p>
                        <p className="text-gray-500 text-sm mt-2">Sat - Sun: 09:00 AM - 06:00 PM</p>
                    </div>

                    {/* Email Us */}
                    <div className="contact-info-card animate-slide-in" style={{ animationDelay: '300ms' }}>
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h5 className="text-xl font-bold text-primary mb-4">Email Us</h5>
                        <p className="mb-2"><strong>Support:</strong><br /><a href="mailto:support@thynktech.ltd" className="text-secondary hover:text-primary transition-colors">support@thynktech.ltd</a></p>
                        <p className="mb-2"><strong>HR:</strong><br /><a href="mailto:hr@thynktech.ltd" className="text-secondary hover:text-primary transition-colors">hr@thynktech.ltd</a></p>
                        <p className="mb-0"><strong>Interns Recruiter:</strong><br /><a href="mailto:campus@thynktech.ltd" className="text-secondary hover:text-primary transition-colors">campus@thynktech.ltd</a></p>
                        <p className="mb-0 mt-2"><strong>Operations:</strong><br /><a href="mailto:operation@thynktech.ltd" className="text-secondary hover:text-primary transition-colors">operation@thynktech.ltd</a></p>
                    </div>
                </div>

                {/* Google Map */}
                <div className="row mt-20 animate-slide-in" style={{ animationDelay: '500ms' }}>
                    <div className="w-full">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-primary mb-8">Find Us on Map</h3>
                            <div className="rounded-2xl overflow-hidden h-[450px] relative mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.016956783047!2d73.71530941491357!3d18.596165582547424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7a46de7f0433fb%3A0x2805f1d7f1553a5a!2sThynk%20Technology%20India!5e0!3m2!1sen!2sin!4v1731302400000!5m2!1sen!2sin"
                                    className="w-full h-full border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="text-center mt-4 mb-4">
                                <a href="https://www.google.com/maps/place/Thynk+Technology+India/@18.596185,73.717498,21z/data=!4m6!3m5!1s0x6b7a46de7f0433fb:0x2805f1d7f1553a5a!8m2!3d18.5961656!4d73.7175402!16s%2Fg%2F11xv32bggj?hl=en&entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-xl hover:bg-opacity-90 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    <i className="fas fa-map-marked-alt mr-2"></i>Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professional Enquiry Form Section */}
                <div className="mt-20">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
