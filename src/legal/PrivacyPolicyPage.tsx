import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Globe2, FileText, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const lastUpdated = "October 18, 2026";

  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal pt-28 pb-20">
      <SEO
        title="Privacy Policy | Divine Design & Procurement"
        description="Review the official Privacy Policy for Divine Design & Procurement LLC and our international hospitality sourcing operations. Learn how we handle project inquiries and protect your data."
        keywords="hospitality procurement privacy policy, Divine Design data protection, hotel procurement legal notice, FF&E privacy disclosures"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-medium uppercase tracking-wider text-brand-plum hover:text-brand-charcoal transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-brand-charcoal/15 pb-10 mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-plum/10 text-brand-plum rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield size={13} />
            <span>Regulatory & Data Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-charcoal">
            Privacy Policy
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-charcoal/60">
            <span><strong>Effective Date:</strong> {lastUpdated}</span>
            <span>&bull;</span>
            <span><strong>Operating Entity:</strong> Divine Design & Procurement LLC</span>
            <span>&bull;</span>
            <span><strong>Domains Covered:</strong> divineprocurement.com | hotelprocurement.net</span>
          </div>
        </motion.div>

        {/* Summary Card */}
        <div className="bg-white/70 border border-brand-charcoal/10 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm backdrop-blur-xs">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-plum mb-3 flex items-center space-x-2">
            <CheckCircle2 size={16} />
            <span>Executive Privacy Commitment</span>
          </h2>
          <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light">
            Divine Design &amp; Procurement LLC (&ldquo;Divine,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is dedicated to safeguarding the personal and commercial information submitted through our website and inquiry portals. We collect only the information required to evaluate, quote, and execute hospitality FF&amp;E procurement projects. We do not sell or rent personal information to external marketers.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-12 text-sm text-brand-charcoal/80 leading-relaxed font-light">

          {/* 1. Entity and Scope */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">01.</span>
              <span>Operating Entity &amp; Covered Services</span>
            </h2>
            <p>
              This Privacy Policy applies to personal and project information collected via <strong>divineprocurement.com</strong>, <strong>hotelprocurement.net</strong>, direct inquiry forms, and communications with Divine Design &amp; Procurement LLC.
            </p>
            <p>
              For international manufacturing, quality inspection, and export coordination, Divine coordinates with affiliated operational entities including <em>Akshar (Zhangzhou) Trading Co., Ltd.</em> (Fujian Province, China) and <em>Akshar Impex Trading Company</em> (Abu Dhabi, UAE). Inquiry processing and primary commercial data intake are overseen by Divine Design &amp; Procurement LLC.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">02.</span>
              <span>Information We Collect</span>
            </h2>
            <p>
              We collect information that you voluntarily provide to us when requesting procurement proposals, lookbooks, or consulting services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Full name, company or hotel ownership name, business email address, and telephone number.</li>
              <li><strong>Project Details:</strong> Hotel brand affiliation, property location, estimated key/room count, target installation schedule, architectural drawings, or custom FF&amp;E specifications.</li>
              <li><strong>Technical &amp; Usage Data:</strong> IP address, browser type, referral URLs, and pages visited, collected via standard server logs and analytical cookies for platform functionality and security.</li>
            </ul>
          </section>

          {/* 3. How We Use Collected Data */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">03.</span>
              <span>Purposes of Data Processing</span>
            </h2>
            <p>We use your information exclusively for legitimate commercial purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 rounded-xl bg-white/50 border border-brand-charcoal/10">
                <h3 className="font-medium text-brand-charcoal mb-1">Quote Preparation</h3>
                <p className="text-xs text-brand-charcoal/70">Evaluating bills of quantities (BOQ), shop drawings, and preparing accurate factory-direct FF&amp;E proposals.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-brand-charcoal/10">
                <h3 className="font-medium text-brand-charcoal mb-1">Project Execution</h3>
                <p className="text-xs text-brand-charcoal/70">Coordinating manufacturing schedules, prototype approvals, quality assurance audits, and freight delivery.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-brand-charcoal/10">
                <h3 className="font-medium text-brand-charcoal mb-1">Direct Communications</h3>
                <p className="text-xs text-brand-charcoal/70">Responding to inquiries, schedule updates, logistics notices, and project milestones.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-brand-charcoal/10">
                <h3 className="font-medium text-brand-charcoal mb-1">Compliance &amp; Security</h3>
                <p className="text-xs text-brand-charcoal/70">Verifying commercial legitimacy, preventing fraudulent inquiries, and satisfying regulatory and legal obligations.</p>
              </div>
            </div>
          </section>

          {/* 4. International Data Transfers */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">04.</span>
              <span>International Data Sharing &amp; Processing</span>
            </h2>
            <p>
              Hospitality FF&amp;E procurement inherently involves international collaboration across design, manufacturing, inspection, and ocean freight logistics. When you submit project specifications, relevant project data (such as architectural drawings, material preferences, and delivery schedules) may be accessed by our dedicated engineering, QA, and logistics personnel located in the United States, China, and the United Arab Emirates.
            </p>
            <p>
              All cross-border transfers are conducted over encrypted channels and restricted to vetted personnel and verified manufacturing partners under strict commercial confidentiality agreements.
            </p>
          </section>

          {/* 5. Data Sharing with Third Parties */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">05.</span>
              <span>Third-Party Service Providers</span>
            </h2>
            <p>
              We do not monetize, sell, or trade your personal data. We disclose limited information only to verified third-party service providers essential for executing project services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Freight Forwarders &amp; Customs Brokers:</strong> To calculate logistics, import clearance, and drayage to your project site.</li>
              <li><strong>Independent Testing Laboratories:</strong> To conduct flammability (e.g., CAL 133 / TB 117) or structural testing on approved prototypes when contracted.</li>
              <li><strong>Hosting &amp; Technical Infrastructure:</strong> Secure cloud web hosting and communication gateways supporting platform availability.</li>
            </ul>
          </section>

          {/* 6. Legal & State Disclosures (Texas Data Privacy & US Standards) */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">06.</span>
              <span>Consumer Privacy Rights &amp; State Regulations</span>
            </h2>
            <p>
              Depending on your jurisdiction—including under the <strong>Texas Data Privacy and Security Act (TDPSA)</strong> and applicable United States privacy regulations—you may have rights regarding the personal information we maintain, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Know / Access:</strong> Request confirmation of whether we process your personal data and obtain a summary of such data.</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate or incomplete contact or project records.</li>
              <li><strong>Right to Delete:</strong> Request the deletion of personal information provided by or obtained about you, subject to business record-retention duties.</li>
              <li><strong>Right to Opt-Out:</strong> We do not engage in targeted advertising sales or consumer profiling that results in legal or significant effects.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact our privacy compliance team via email at{' '}
              <a href="mailto:yogin@hotelprocurement.net" className="text-brand-plum font-medium underline hover:text-brand-charcoal">
                yogin@hotelprocurement.net
              </a>. We will respond promptly within the statutory response periods.
            </p>
          </section>

          {/* 7. Data Retention & Security */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">07.</span>
              <span>Data Retention &amp; Safeguards</span>
            </h2>
            <p>
              We maintain reasonable technical, administrative, and physical security measures designed to protect information from loss, unauthorized access, alteration, or disclosure. Inbound form submissions are transmitted via SSL/TLS encryption.
            </p>
            <p>
              We retain business contact information and project archives only for the duration required to fulfill project obligations, maintain warranty and replacement records, resolve disputes, and comply with commercial tax and accounting requirements.
            </p>
          </section>

          {/* 8. Cookies & Analytics */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">08.</span>
              <span>Cookies &amp; Tracking Technologies</span>
            </h2>
            <p>
              Our website uses basic functional cookies and standard analytics to assess site performance, understand visitor engagement, and optimize site navigation. You can configure your browser to decline or notify you before accepting cookies. Disabling cookies will not restrict your ability to browse our project portfolio or submit an inquiry.
            </p>
          </section>

          {/* 9. Contact & Inquiries */}
          <section className="space-y-4 border-t border-brand-charcoal/15 pt-8">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <Mail size={18} className="text-brand-plum" />
              <span>Compliance Contact &amp; Questions</span>
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:
            </p>
            <div className="bg-white/60 border border-brand-charcoal/10 rounded-xl p-5 text-xs space-y-1.5">
              <p className="font-semibold text-brand-charcoal">Divine Design &amp; Procurement LLC</p>
              <p>Attention: Yogin Patel / Compliance Officer</p>
              <p>
                Email:{' '}
                <a href="mailto:yogin@hotelprocurement.net" className="text-brand-plum underline">
                  yogin@hotelprocurement.net
                </a>
              </p>
              <p>Website: www.divineprocurement.com | www.hotelprocurement.net</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
