import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Layers, Sparkles, Truck, Leaf, Shield, Clock } from 'lucide-react';
import { blogPosts } from './data';
import SEO from '../components/SEO';

type BlogCategory = 'all' | 'Design Trends' | 'Supply Chain' | 'Sustainability' | 'Compliance';

export default function BlogOverviewPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<BlogCategory>('all');

  const filteredPosts = blogPosts.filter((post) => {
    if (filter === 'all') return true;
    return post.category === filter;
  });

  const categories = [
    { id: 'all' as const, name: 'All Insights', icon: <Layers className="w-4 h-4" /> },
    { id: 'Design Trends' as const, name: 'Design Trends', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'Supply Chain' as const, name: 'Supply Chain', icon: <Truck className="w-4 h-4" /> },
    { id: 'Sustainability' as const, name: 'Sustainability', icon: <Leaf className="w-4 h-4" /> },
    { id: 'Compliance' as const, name: 'Compliance', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-28 pb-24">
      <SEO 
        title="Divine Perspectives | Hotel FF&E Blog" 
        description="Read the latest hospitality procurement insights, property improvement plan (PIP) advice, custom manufacturing strategies, and global logistics updates."
        keywords="hotel procurement blog, hotel PIP requirements, custom hotel furniture insights, hospitality logistics tips"
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Hero Section */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
            Our Blogs & Insights
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-brand-charcoal mb-6 leading-[1.2] md:leading-tight">
            Divine Perspectives.
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide leading-relaxed max-w-2xl">
            In-depth analysis, professional strategies, and industry perspectives on hospitality FF&E sourcing, hotel brand standards compliance, global logistics, and custom furniture manufacturing.
          </p>
        </div>

        {/* Interactive Filter Pill Row */}
        <div className="flex flex-wrap gap-3 mb-12 pb-6 border-b border-brand-charcoal/10 justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                filter === cat.id
                  ? 'bg-brand-charcoal border-brand-charcoal text-white shadow-md'
                  : 'bg-transparent border-brand-charcoal/10 text-brand-charcoal/75 hover:border-brand-plum/40 hover:text-brand-plum'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col text-left group cursor-pointer select-none"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                {/* Image Frame with hover transition */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/5 mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-xs border border-brand-charcoal/10 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-brand-plum">
                    {post.category}
                  </div>
                </div>

                {/* Details Footer */}
                <div className="px-1 flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-3 text-xxs text-brand-charcoal/50 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock size={10} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-light tracking-tight text-brand-charcoal mb-3 group-hover:text-brand-plum transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-charcoal/70 font-light max-w-md line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-brand-charcoal/5 group-hover:bg-brand-charcoal text-brand-charcoal group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0 mt-1">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
