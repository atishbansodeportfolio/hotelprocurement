import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag, ChevronDown, User } from 'lucide-react';
import { blogPosts } from './data';
import SEO from '../components/SEO';

export default function BlogDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <h1 className="text-3xl font-light text-brand-charcoal mb-4">Article Not Found</h1>
        <p className="text-sm text-brand-charcoal/60 mb-8">The requested blog post could not be located.</p>
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 bg-brand-charcoal hover:bg-brand-plum text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
        >
          <ArrowLeft size={14} />
          <span>Back to Blogs</span>
        </Link>
      </div>
    );
  }

  const keywordList = post.keywords ? post.keywords.split(',').map((k) => k.trim()) : [];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="bg-brand-cream min-h-screen pt-28 pb-24"
    >
      <SEO 
        title={post.seoTitle || post.title} 
        description={post.metaDescription || post.description}
        keywords={post.keywords}
        image={post.image}
        type="article"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Navigation Breadcrumb */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-brand-charcoal/60 hover:text-brand-plum text-xs font-semibold uppercase tracking-widest mb-10 transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          <span>Back to Insights</span>
        </Link>

        {/* Hero Header */}
        <header className="max-w-4xl mb-12 text-left">
          <span className="inline-block bg-brand-plum/10 text-brand-plum text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-brand-charcoal mb-8 leading-[1.15] md:leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-xs text-brand-charcoal/60 border-t border-brand-charcoal/10 pt-6">
            {post.author && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-charcoal/5 border border-brand-charcoal/10 flex items-center justify-center overflow-hidden">
                  {post.author.avatar ? (
                    <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={14} className="text-brand-charcoal/60" />
                  )}
                </div>
                <div>
                  <span className="font-semibold text-brand-charcoal block leading-none mb-0.5">{post.author.name}</span>
                  <span className="text-[10px] text-brand-charcoal/50 font-light">{post.author.role}</span>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-sm border border-brand-charcoal/10 bg-brand-charcoal/5 mb-16">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column (Sticky Sidebar) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-10 border-t lg:border-t-0 lg:border-r border-brand-charcoal/10 pt-8 lg:pt-0 lg:pr-10 text-left">
            
            {/* AI Search Answer / Featured Snippet summary */}
            {post.featuredSnippet && (
              <div className="bg-brand-charcoal text-white rounded-2xl p-6 shadow-sm border border-white/5">
                <h4 className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center">
                  <span>AI Search / Quick Summary</span>
                </h4>
                <p className="text-xs font-light text-white/85 leading-relaxed italic">
                  "{post.featuredSnippet}"
                </p>
              </div>
            )}

            {/* Keyword tags */}
            {keywordList.length > 0 && (
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4 flex items-center space-x-2">
                  <Tag size={12} />
                  <span>Topics Covered</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {keywordList.map((keyword, i) => (
                    <span 
                      key={i}
                      className="bg-brand-charcoal/5 border border-brand-charcoal/10 px-3 py-1.5 rounded-md text-[10px] text-brand-charcoal/80 font-light"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Internal Resources */}
            {post.internalLinks && post.internalLinks.length > 0 && (
              <div className="border-t border-brand-charcoal/10 pt-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">
                  Recommended Resources
                </h4>
                <ul className="space-y-3">
                  {post.internalLinks.map((link, i) => (
                    <li key={i}>
                      {link.href.startsWith('#') ? (
                        <a 
                          href={link.href}
                          className="text-xs text-brand-charcoal/80 hover:text-brand-plum hover:underline transition-colors block font-medium"
                        >
                          {link.label} &rarr;
                        </a>
                      ) : (
                        <Link 
                          to={link.href}
                          className="text-xs text-brand-charcoal/80 hover:text-brand-plum hover:underline transition-colors block font-medium"
                        >
                          {link.label} &rarr;
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </aside>

          {/* Right Column (Article Body) */}
          <article className="lg:col-span-8 text-left">
            {/* Main content with class based HTML styling */}
            <div 
              className="
                [&_p]:mb-6 [&_p]:font-light [&_p]:text-brand-charcoal/80 [&_p]:leading-relaxed [&_p]:text-sm [&_p]:md:text-base
                [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-light [&_h2]:text-brand-charcoal [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:tracking-tight
                [&_h3]:text-xl [&_h3]:font-normal [&_h3]:text-brand-charcoal [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:tracking-tight
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:font-light [&_ul]:text-brand-charcoal/80 [&_ul]:space-y-2 [&_ul]:text-sm [&_ul]:md:text-base
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:font-light [&_ol]:text-brand-charcoal/80 [&_ol]:space-y-2 [&_ol]:text-sm [&_ol]:md:text-base
                [&_li]:leading-relaxed
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Accordion FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="border-t border-brand-charcoal/10 pt-16 mt-16">
                <h3 className="text-2xl md:text-3xl font-light text-brand-charcoal mb-8 tracking-tight">
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4">
                  {post.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index}
                        className="bg-white border border-brand-charcoal/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-xxs hover:shadow-xs"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left font-medium text-brand-charcoal hover:text-brand-plum focus:outline-none transition-colors cursor-pointer select-none"
                        >
                          <span className="text-sm md:text-base leading-tight pr-4">{faq.question}</span>
                          <ChevronDown 
                            size={18} 
                            className={`text-brand-charcoal/30 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'transform rotate-180 text-brand-plum' : ''
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-brand-charcoal/70 font-light leading-relaxed border-t border-brand-charcoal/5 bg-brand-cream/10">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </article>

        </div>
      </div>
    </motion.div>
  );
}
