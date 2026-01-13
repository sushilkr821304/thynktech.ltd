import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        service: '',
        message: '',
        captcha: ''
    });

    const [captchaValue, setCaptchaValue] = useState({ a: 7, b: 8, result: 15 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        setCaptchaValue({ a, b, result: a + b });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Spam protection check
        if (parseInt(formData.captcha) !== captchaValue.result) {
            alert('Incorrect spam protection answer. Please try again.');
            generateCaptcha();
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // Get access key from environment
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL || 'india.thynktech@gmail.com';

        // Check if access key is configured
        if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
            console.error('Web3Forms access key not configured. Please update .env file.');
            alert('Form configuration error. Please contact support.');
            setIsSubmitting(false);
            setSubmitStatus('error');
            return;
        }

        // Prepare form data for Web3Forms
        const formDataToSend = new FormData();
        formDataToSend.append('access_key', accessKey);
        formDataToSend.append('name', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone || 'Not provided');
        formDataToSend.append('company', formData.company || 'Not provided');
        formDataToSend.append('country', formData.country);
        formDataToSend.append('service', formData.service);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('subject', `New Enquiry from ${formData.fullName}`);
        formDataToSend.append('from_name', formData.fullName);
        formDataToSend.append('to_email', recipientEmail);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    company: '',
                    country: '',
                    service: '',
                    message: '',
                    captcha: ''
                });
                generateCaptcha();
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('FAILED TO SEND EMAIL:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="enquiry" className="mt-12">
            <div className="mx-auto">
                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100">
                    {/* Left Panel - Information (UNCHANGED) */}
                    <div className="lg:w-5/12 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #002B5C 0%, #0047AB 100%)' }}>
                        <div className="relative z-10">
                            <div className="flex flex-wrap gap-6 mb-12">
                                <a href="tel:+917030730431" className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
                                    <i className="fas fa-phone-alt"></i> Book A Call
                                </a>
                                <a href="mailto:support@thynktech.ltd" className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
                                    <i className="fas fa-envelope"></i> Email us
                                </a>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold mb-10 leading-tight">Trusted by Agencies Worldwide</h2>

                            <div className="space-y-8 md:space-y-12">
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                                        <i className="fas fa-award text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold"> 50+ Awards Won </h4>
                                        <p className="text-white/70 text-sm mt-2 leading-relaxed">
                                            With a strong focus on technology innovation and execution excellence, ThynkTech India has received 50+ prestigious industry awards for empowering businesses through reliable software, digital transformation, and customer-centric solutions since 2007.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                                        <i className="fas fa-rocket text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold"> 29+ Own running Projects</h4>
                                        <p className="text-white/70 text-sm mt-2 leading-relaxed">
                                            Building and running 29+ in-house digital platforms that drive efficiency, scalability, and real business outcomes.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                                        <i className="fas fa-user-check text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold">700+ IT Experts</h4>
                                        <p className="text-white/70 text-sm mt-2 leading-relaxed">
                                            A strong team of skilled engineers, developers, analysts, and strategists delivering reliable, secure, and future-ready solutions tailored to client needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Branding Layout Elements */}
                        <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <img src="/images/logo12.png" alt="Logo" className="h-8 rounded" />
                                <span className="font-bold text-lg">Thynk Tech India</span>
                            </div>
                            <p className="text-xs text-white/50">Leading Enterprise Software & AI Solutions Provider</p>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>
                    </div>

                    {/* Right Panel - Improved Form */}
                    <div className="flex-1 bg-white p-8 md:p-12 lg:p-16">
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight"> Product Consultation</h2>
                            <p className="text-gray-500 font-medium">Guaranteed response within 8 business hours.</p>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mb-10 p-5 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-start gap-4 animate-slide-in">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg mb-1">Received!</h5>
                                    <p className="text-sm opacity-90">Thank you. Your request is with our Sr. Business Head. Expect a response shortly.</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-10 p-5 bg-red-50 border border-red-200 text-red-800 rounded-2xl flex items-start gap-4 animate-slide-in">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg mb-1">Submission Failed</h5>
                                    <p className="text-sm opacity-90">Please try again or contact support@thynktech.ltd directly.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                                        Full Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 placeholder:text-gray-400 font-medium"
                                    />
                                </div>

                                {/* Official Email */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                                        Official Email Address<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your work email"
                                        className="w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 placeholder:text-gray-400 font-medium"
                                    />
                                </div>

                                {/* Country */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                                        Country<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        required
                                        value={formData.country}
                                        onChange={handleChange}
                                        placeholder="e.g. India"
                                        className="w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 placeholder:text-gray-400 font-medium"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                                        Phone Number (Optional)
                                    </label>
                                    <div className="flex">
                                        <div className="bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl px-3 flex items-center justify-center text-gray-500 font-medium">
                                            <i className="fas fa-phone-alt text-xs"></i>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your phone number"
                                            className="flex-1 bg-gray-50 text-gray-900 px-4 py-3.5 rounded-r-xl border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 placeholder:text-gray-400 font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Company Name */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Enter company name"
                                        className="w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 placeholder:text-gray-400 font-medium"
                                    />
                                </div>

                                {/* Service Selection */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                                        Select Your Service<span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Choose a service</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile App">Mobile App Development</option>
                                            <option value="AI Solutions">AI & Machine Learning</option>
                                            <option value="Enterprise Software">Enterprise Software</option>
                                            <option value="Cloud">Cloud Solutions</option>
                                            <option value="Other">Other Services</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Brief */}
                            <div className="group">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                                    Message<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message..."
                                    rows="3"
                                    className="w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 placeholder:text-gray-400 font-medium resize-none"
                                ></textarea>
                            </div>

                            {/* Captcha & Submit */}
                            <div className="pt-2">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                    {/* Captcha */}
                                    <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 w-full sm:w-auto justify-center sm:justify-start">
                                        <span className="font-bold text-gray-600 select-none">{captchaValue.a} + {captchaValue.b} =</span>
                                        <input
                                            type="number"
                                            name="captcha"
                                            required
                                            value={formData.captcha}
                                            onChange={handleChange}
                                            placeholder="?"
                                            className="w-14 bg-white px-2 py-1.5 rounded-lg border border-gray-200 text-center font-bold text-primary focus:border-primary outline-none transition-colors"
                                        />
                                        <button
                                            type="button"
                                            onClick={generateCaptcha}
                                            className="text-gray-400 hover:text-primary transition-colors p-1"
                                            title="Refresh Captcha"
                                        >
                                            <i className="fas fa-sync-alt text-xs"></i>
                                        </button>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-[#003d82] text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(0,43,92,0.4)] hover:shadow-[0_15px_30px_-10px_rgba(0,43,92,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <i className="fas fa-circle-notch fa-spin"></i> Processing...
                                            </>
                                        ) : (
                                            <>
                                                Book a Fit Call <i className="fas fa-arrow-right"></i>
                                            </>
                                        )}
                                    </button>
                                </div>
                                <div className="mt-4 text-center sm:text-right">
                                    <p className="text-xs text-gray-400">
                                        <i className="fas fa-lock mr-1"></i> Your information is secure.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
