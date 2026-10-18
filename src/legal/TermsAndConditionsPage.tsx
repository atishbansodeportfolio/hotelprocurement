import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, FileCheck, AlertCircle, Building2, Truck, ShieldCheck, Mail, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const lastUpdated = "October 18, 2026";

  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal pt-28 pb-20">
      <SEO
        title="Terms & Conditions | Commercial Disclosures | Divine Design & Procurement"
        description="Official Terms and Conditions and Commercial Disclosures for Divine Design & Procurement LLC, covering hotel project FF&E sourcing, quotes, brand disclaimers, and tax provisions."
        keywords="hotel procurement terms of service, FF&E procurement contract terms, Divine Design commercial terms, hospitality sourcing disclosures"
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
            <Scale size={13} />
            <span>Commercial Terms &amp; Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-charcoal">
            Terms &amp; Conditions
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-charcoal/60">
            <span><strong>Effective Date:</strong> {lastUpdated}</span>
            <span>&bull;</span>
            <span><strong>Contracting Entity:</strong> Divine Design &amp; Procurement LLC</span>
            <span>&bull;</span>
            <span><strong>Domains:</strong> divineprocurement.com | hotelprocurement.net</span>
          </div>
        </motion.div>

        {/* Mandatory Tax Callout Box (as required by Compliance Review) */}
        <div className="bg-brand-plum/5 border border-brand-plum/20 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-brand-plum shrink-0 mt-0.5" size={18} />
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-plum mb-2">
                Mandatory Commercial Tax Disclosure
              </h2>
              <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                &ldquo;Applicable state sales and use taxes are the responsibility of the recipient or project site, except where the seller is legally required to collect and remit them.&rdquo;
              </p>
              <p className="text-xs text-brand-charcoal/70 mt-2 font-light">
                All price quotes, bills of quantities, and pro-forma proposals issued by Divine Design &amp; Procurement LLC reflect product and contracted logistics scope unless expressly identified as tax-inclusive under statutory collection duties.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12 text-sm text-brand-charcoal/80 leading-relaxed font-light">

          {/* 1. Acceptance of Terms */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">01.</span>
              <span>Acceptance of Terms</span>
            </h2>
            <p>
              Welcome to Divine Design &amp; Procurement LLC (&ldquo;Divine,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing our website, browsing our portfolio, requesting a proposal, or entering into a procurement purchase order, you agree to comply with and be bound by these Terms and Conditions (&ldquo;Terms&rdquo;).
            </p>
            <p>
              These Terms govern your use of <strong>divineprocurement.com</strong> and <strong>hotelprocurement.net</strong>, as well as the commercial framework for all FF&amp;E procurement inquiries and resulting agreements.
            </p>
          </section>

          {/* 2. Hotel Brand & Trademark Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">02.</span>
              <span>Hotel Brand Projects &amp; Trademark Disclaimer</span>
            </h2>
            <div className="p-5 rounded-xl bg-white/70 border border-brand-charcoal/10 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                <Building2 size={15} className="text-brand-plum" />
                <span>Selected Hotel Projects &amp; Brand Clarification</span>
              </div>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                Divine Design &amp; Procurement LLC manufactures and sources custom FF&amp;E for independent hotel franchise properties, developers, owner-operators, and hospitality management firms. References on this site to major hotel brands, franchisors, or chain names (including but not limited to Marriott&reg;, Hilton&reg;, IHG&reg;, Hyatt&reg;, Choice Hotels&reg;, Wyndham&reg;, and Best Western&reg;) identify specific individual property projects for which our team or manufacturing partners were contracted to furnish goods.
              </p>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                All brand names, trademarks, and registered logos remain the sole intellectual property of their respective corporate owners. Unless explicitly stated under an executed corporate vendor agreement, Divine Design &amp; Procurement LLC acts as an independent contractor, and no direct corporate endorsement, sponsorship, or affiliation is expressed or implied.
              </p>
            </div>
          </section>

          {/* 3. Direct Sourcing & Pricing Scope */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">03.</span>
              <span>Direct Manufacturer Sourcing &amp; Pricing Scope</span>
            </h2>
            <p>
              Divine provides direct manufacturer sourcing with clearly defined project pricing and scope. Inbound proposals, estimates, and bills of quantities (BOQ) are tailored to the exact specifications, volumes, and material finishes approved by the client.
            </p>
            <p>
              Quotations are valid for the period specified on the formal proposal (typically 30 calendar days) and are subject to adjustment based on material market fluctuations, currency exchange rates, freight market indexes, or client revisions to architectural specifications prior to contract execution.
            </p>
          </section>

          {/* 4. Timelines, Delivery & Lead Time Disclosures */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">04.</span>
              <span>Estimated Schedules &amp; Delivery Commitments</span>
            </h2>
            <p>
              Procurement timelines—including shop drawing engineering, prototype approval, mass fabrication, ocean transit, customs clearance, and job-site delivery—are provided as documented project estimates based on current capacity and shipping dynamics.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Milestone Schedules:</strong> Formal production begins only upon receipt of signed shop drawing approvals, approved material swatches, and contractual deposit payment.</li>
              <li><strong>Logistics &amp; Port Clearances:</strong> Ocean freight transit times, customs inspections, and terminal availability are subject to carrier schedules and external regulatory processes.</li>
              <li><strong>Job-Site Readiness:</strong> Client or general contractor must ensure that the installation site, elevators, and loading docks are cleared and accessible for scheduled delivery.</li>
            </ul>
          </section>

          {/* 5. Standards, Fire Safety & ADA Compliance */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">05.</span>
              <span>Safety Standards, Fire Codes &amp; ADA Specifications</span>
            </h2>
            <p>
              We engineer and manufacture furniture adhering to specified commercial standards based on contractual project requirements and local jurisdiction codes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fire &amp; Flammability Standards:</strong> Where contracted, upholstered goods and foam materials are engineered to meet applicable flammability standards, including CAL 133 or TB 117-2013, supported by accredited third-party test reports where ordered.</li>
              <li><strong>ADA Accessibility:</strong> Accessible guestroom casegoods, vanity heights, and clearances are manufactured in accordance with contracted architectural plans and ADA guidelines approved by the project&rsquo;s architect of record.</li>
              <li><strong>Franchise Brand Standards:</strong> Custom FF&amp;E is manufactured according to brand submittal packets and approved finish swatches submitted to the client&rsquo;s brand design director.</li>
            </ul>
          </section>

          {/* 6. Prototypes, Inspection & Quality Assurance */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">06.</span>
              <span>Prototypes &amp; Multi-Stage Quality Assurance</span>
            </h2>
            <p>
              To ensure compliance and craftsmanship integrity, projects undergo multi-stage quality inspections:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-xs">
              <div className="p-3.5 bg-white/60 border border-brand-charcoal/10 rounded-xl">
                <span className="font-semibold text-brand-charcoal block mb-1">1. Prototype Review</span>
                Sample pieces or model room suites are evaluated and approved prior to full production runs.
              </div>
              <div className="p-3.5 bg-white/60 border border-brand-charcoal/10 rounded-xl">
                <span className="font-semibold text-brand-charcoal block mb-1">2. In-Line Inspection</span>
                Carpentry joinery, structural hardware, moisture content, and finish consistency are monitored during manufacturing.
              </div>
              <div className="p-3.5 bg-white/60 border border-brand-charcoal/10 rounded-xl">
                <span className="font-semibold text-brand-charcoal block mb-1">3. Pre-Shipment Audit</span>
                100% pre-crating assembly checks, drop-packaging standards, and barcode container-loading manifests.
              </div>
            </div>
          </section>

          {/* 7. Freight, Tariffs & Customs Duties */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">07.</span>
              <span>Freight, Tariffs &amp; Import Duties</span>
            </h2>
            <p>
              Unless explicitly specified under DDP (Delivered Duty Paid) contractual terms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Applicable tariffs, customs duties, port congestion fees, demurrage, or governmental border fees imposed after quote issuance are billed in accordance with the executed purchase agreement.</li>
              <li>Receiving and offloading at the destination property are the responsibility of the client&rsquo;s on-site installation team unless white-glove inside placement has been contracted.</li>
            </ul>
          </section>

          {/* 8. Warranty & Claims Process */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">08.</span>
              <span>Commercial Warranty &amp; Claims</span>
            </h2>
            <p>
              Divine Design &amp; Procurement LLC warrants that delivered goods conform to contracted shop drawings and are free from structural manufacturing defects for a period of one (1) year from the date of substantial delivery.
            </p>
            <p>
              Claims for visible transit damage must be noted on the freight delivery bill of lading (BOL) upon receipt. Latent manufacturing defects must be reported in writing within ten (10) business days of unboxing, accompanied by photographic and video evidence.
            </p>
          </section>

          {/* 9. Governing Law */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <span className="text-brand-plum font-mono text-base">09.</span>
              <span>Governing Law &amp; Dispute Resolution</span>
            </h2>
            <p>
              These Terms and any procurement contracts executed by Divine Design &amp; Procurement LLC shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any dispute arising out of or relating to these terms shall be resolved through good-faith commercial negotiation, followed if necessary by binding arbitration.
            </p>
          </section>

          {/* 10. Inquiries and Contact */}
          <section className="space-y-4 border-t border-brand-charcoal/15 pt-8">
            <h2 className="text-xl font-normal text-brand-charcoal tracking-tight flex items-center space-x-2">
              <Mail size={18} className="text-brand-plum" />
              <span>Commercial Terms Inquiries</span>
            </h2>
            <p>
              For questions concerning contract terms, project proposals, or tax certificates, please contact:
            </p>
            <div className="bg-white/60 border border-brand-charcoal/10 rounded-xl p-5 text-xs space-y-1.5">
              <p className="font-semibold text-brand-charcoal">Divine Design &amp; Procurement LLC</p>
              <p>Commercial Contracting &amp; Procurement Division</p>
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
