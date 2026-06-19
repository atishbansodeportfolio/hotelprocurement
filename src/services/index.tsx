import React, { useEffect } from 'react';
import { ServiceDetail } from './types';
import ServicesHero from './ServicesHero';
import ServicesDetailList from './ServicesDetailList';
import PremiumOfferingsList from './PremiumOfferingsList';
import ServicesCTA from './ServicesCTA';

export default function ServicesPage() {
  // Scroll to top of the page when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services: ServiceDetail[] = [
    {
      id: 0,
      title: 'Direct Global Sourcing',
      tagline: 'Direct partnerships, maximum efficiency, transparent pricing',
      description: 'We establish direct procurement channels with qualified, verified manufacturers across the US, UAE, and Asia. By removing brokers and middlemen, we offer full transparency on casegoods, soft seating, and decorative materials, passing significant cost reductions straight to your bottom line.',
      bullets: [
        'Direct manufacturing relationships bypassing agent commissions',
        'Fully transparent pricing models with complete margin disclosure',
        'Rigorous factory auditing for social responsibility and quality control'
      ],
      metric: '18% Average Cost Savings',
      image: '/services/direct-global-service.png'
    },
    {
      id: 1,
      title: 'Custom Furniture',
      tagline: 'Casegoods, soft seating, and millwork tailored to your brand directives',
      description: 'Collaborating with master artisans, we bring your vision to life. From custom millwork and custom stone top vanities to upholstered sofas, we manage structural shop drawings, fabric compliance, and mock-up reviews to secure approvals from design teams and owners.',
      bullets: [
        'Precise shop drawing development and engineer reviews',
        'Fabric selections meeting high-durability contract standards',
        'Prototype fabrications and mock-up room evaluations'
      ],
      metric: 'Bespoke Mock-up Fabrication',
      image: '/services/custom-furniture.png'
    },
    {
      id: 2,
      title: 'Brand Compliance',
      tagline: 'Certified compliance for Marriott, Hilton, IHG, and Choice Hotels',
      description: 'Navigating franchise guidelines can be complex. We ensure all specifications meet the rigorous compliance standards of major hoteliers including Marriott, Hilton, Hyatt, IHG, and Choice Hotels, verifying fire ratings (CAL 133), durability, and warranty requirements.',
      bullets: [
        'Franchise submittal coordination and design board compliance checks',
        'Rigorous material selections meeting contract wear requirements',
        'CAL 133 and international fire safety code certification checks'
      ],
      metric: '100% QA Inspection Pass Rate',
      image: '/images/Lounge_chair_beside_side_table_202606172336.jpeg'
    },
    {
      id: 3,
      title: 'Global Logistics & Freight',
      tagline: 'Cargo consolidation, customs clearance, and just-in-time logistics',
      description: 'We provide complete freight coordination, cargo consolidation at strategic ports, customs clearances, and warehousing. Our custom track-and-trace workflow ensures your FF&E is stored securely and delivered to site exactly on time to meet construction schedules.',
      bullets: [
        'Strategic warehouse consolidations close to major export hubs',
        'Customs brokerage services ensuring smooth imports and clearances',
        'Just-in-time site deliveries minimizing storage fees and double handling'
      ],
      metric: 'On-Time Logistical Guarantee',
      image: '/services/global-logistics.png'
    },
    {
      id: 4,
      title: 'Turnkey Project Execution',
      tagline: 'Project management from initial budgeting to final onsite check-off',
      description: 'From initial budgets and design review to final onsite check-off, we offer full project management. We work hand-in-hand with field installers, general contractors, and brand QA inspectors to guarantee a successful property opening.',
      bullets: [
        'Dedicated procurement manager assigned to your project lifecycle',
        'Direct coordination with onsite general contractors and installers',
        'Final walk-through and deficiency list resolution'
      ],
      metric: 'Zero-Deficiency Hand-off',
      image: '/images/turnkey-projection.jpeg'
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal">
      <ServicesHero />
      <ServicesDetailList services={services} />
      <PremiumOfferingsList />
      <ServicesCTA />
    </div>
  );
}
