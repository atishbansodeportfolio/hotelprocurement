import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What are your typical project timelines for hotel FF&E procurement?',
      answer: 'Timelines depend on the project scope. Generally, the manufacturing and logistics cycle takes 12 to 16 weeks from approved shop drawings to on-site delivery. We recommend engaging our team during the early schematic design phase to optimize project schedules and avoid construction delays.',
    },
    {
      id: 2,
      question: 'How do you ensure compliance with hotel brand standards?',
      answer: 'We maintain deep familiarity with Hilton, IHG, Marriott, and Choice brand standards. We cross-reference every custom shop drawing with franchise design guidelines and submit technical details for brand approval. In addition, our field QA/QC agents inspect factories before and during production to verify standards.',
    },
    {
      id: 3,
      question: 'Do you have a minimum order size or project requirement?',
      answer: 'We specialize in commercial-scale hospitality operations, generally focusing on properties with 60+ keys, PIP renovations, or new constructions. However, we review projects on an individual basis to determine how we can best support your portfolio. Please reach out to discuss your specific needs.',
    },
    {
      id: 4,
      question: 'How does your direct global sourcing model work?',
      answer: 'By operating direct manufacturing partnerships in key international production hubs (including Zhangzhou, China and Abu Dhabi, UAE), we remove wholesalers and brokers. This enables transparent pricing, direct oversight of materials, and values-engineered production tailored to your budget.',
    },
    {
      id: 5,
      question: 'Can you handle customs clearance and end-to-end logistics?',
      answer: 'Yes, we provide full turnkey logistics coordination. This includes ocean/land freight, customs clearance, duty management, and secure local warehousing. We coordinate closely with your general contractor to schedule timed white-glove site delivery.',
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 md:py-36 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
            Common Inquiries
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="border-b border-brand-charcoal/10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-t border-brand-charcoal/10 py-6 md:py-8 cursor-pointer group"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex items-center justify-between space-x-4">
                  <h3 className="text-lg md:text-xl font-light tracking-tight text-brand-charcoal group-hover:text-brand-plum transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-charcoal/10 group-hover:border-brand-plum flex items-center justify-center text-brand-charcoal/40 group-hover:text-brand-plum transition-all duration-300">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-5 text-xs md:text-sm text-brand-charcoal/70 font-light leading-relaxed tracking-wide max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
