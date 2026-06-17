import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'New Construction',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setFormData((prev) => ({
        ...prev,
        message: customEvent.detail,
      }));
    };
    window.addEventListener('prefillProject', handlePrefill);
    return () => {
      window.removeEventListener('prefillProject', handlePrefill);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', projectType: 'New Construction', message: '' });
      setSubmitted(false);
    }, 4000);
  };



  return (
    <section id="contact" className="py-24 md:py-36 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Elegant Contact Form */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-6">
              Let's Discuss Your Project.
            </h2>
            <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide mb-12">
              Have a PIP renovation, new build, or custom sourcing inquiry? Send us your requirements and our procurement specialists will contact you.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-brand-plum/5 border border-brand-plum/20 flex flex-col items-center text-center space-y-4"
              >
                <CheckCircle className="w-12 h-12 text-brand-plum" />
                <h3 className="text-xl font-medium text-brand-charcoal">Thank You</h3>
                <p className="text-xs md:text-sm text-brand-charcoal/70 max-w-sm">
                  Your request has been sent successfully. One of our project coordinators will review the details and respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-brand-charcoal/20 pb-2.5 text-sm font-light text-brand-charcoal focus:outline-none focus:border-brand-plum transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-b border-brand-charcoal/20 pb-2.5 text-sm font-light text-brand-charcoal focus:outline-none focus:border-brand-plum transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Project Type */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="projectType" className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-transparent border-b border-brand-charcoal/20 pb-2.5 text-sm font-light text-brand-charcoal focus:outline-none focus:border-brand-plum cursor-pointer transition-colors"
                    >
                      <option className="bg-brand-cream text-brand-charcoal" value="New Construction">New Construction</option>
                      <option className="bg-brand-cream text-brand-charcoal" value="PIP Renovation">PIP Renovation</option>
                      <option className="bg-brand-cream text-brand-charcoal" value="Custom FF&E Sourcing">Custom FF&E Sourcing</option>
                      <option className="bg-brand-cream text-brand-charcoal" value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about keys count, timelines, and design specs..."
                    className="w-full bg-transparent border-b border-brand-charcoal/20 pb-2.5 text-sm font-light text-brand-charcoal focus:outline-none focus:border-brand-plum resize-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-brand-charcoal rounded-full hover:bg-brand-plum hover:scale-103 transition-all duration-300 shadow-sm"
                  >
                    <span>Send Message</span>
                    <Send size={12} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Featured Sourcing Image */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-stretch">
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full min-h-[350px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-md border border-brand-charcoal/10">
              <img
                src="/images/form-right.jpeg"
                alt="Hospitality FF&E Procurement"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
