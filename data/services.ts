import { ServiceState } from 'types';

export const services = [
  {
    id: 'strm',
    title: 'Short Term Rental Management',
    description:
      'Unlock the Power of Flexibility. We specialize in turning your property into a lucrative short-term rental, optimizing your returns without the long-term commitment. We specialize in delivering seamless and profitable short-term rental experiences for property owners and guests alike.',
  },
  {
    id: 'ltrm',
    title: 'Long Term Rental Management',
    description:
      'Unlock the Power of Flexibility. We specialize in turning your property into a lucrative short-term rental, optimizing your returns without the long-term commitment. We specialize in delivering seamless and profitable short-term rental experiences for property owners and guests alike.',
  },
  {
    id: 'b&s',
    title: 'Buy & Sell',
    description:
      'Unlock the Power of Flexibility. We specialize in turning your property into a lucrative short-term rental, optimizing your returns without the long-term commitment. We specialize in delivering seamless and profitable short-term rental experiences for property owners and guests alike.',
  },
  {
    id: 'bah',
    title: 'Become a Host',
    description:
      'Unlock the Power of Flexibility. We specialize in turning your property into a lucrative short-term rental, optimizing your returns without the long-term commitment. We specialize in delivering seamless and profitable short-term rental experiences for property owners and guests alike.',
  },
];

export const initialServiceState = services.reduce((acc, curr) => {
  acc[curr.id] = { isOpen: false };
  return acc;
}, {} as ServiceState);

export const shortTermServices = [
  {
    id: 1,
    icon: '/short-term-rental/listing-optimization-icon.png',
    title: 'Listing optimization',
    description:
      'We create eye-catching, high-converting listings on popular platforms like Airbnib and VRBO to attract more guests.',
  },
  {
    id: 2,
    icon: '/short-term-rental/property-management-icon.png',
    title: 'Property Management',
    description:
      'Our dedicated team takes care of maintenance, and restocking to keep your property in top condition.',
  },
  {
    id: 3,
    icon: '/short-term-rental/dynamic-pricing-icon.png',
    title: 'Dynamic Pricing',
    description:
      'Our data-driven pricing strategies maximize your rental income by adjusting rates based on demand, seasons, and local events.',
  },
  {
    id: 4,
    icon: '/short-term-rental/marketing-and-promotion-icon.png',
    title: 'Marketing and Promotion',
    description:
      "We employ effective marketing strategies to increase your property's visibility and bookings.",
  },
  {
    id: 5,
    icon: '/short-term-rental/guest-service-icon.png',
    title: 'Guest Services',
    description:
      'We handle all guest inquiries, bookings, and communication, ensuring a smooth and stress-free experience for both hosts and guests. 24/7 guest support Services.',
  },
  {
    id: 6,
    icon: '/short-term-rental/revenue-reporting-icon.png',
    title: 'Revenue Reporting',
    description:
      "Transparent financial reporting allows you to track your property's performance and revenue.",
  },
  {
    id: 7,
    icon: '/short-term-rental/house-keeping-icon.png',
    title: 'House Keeping',
    description: 'We handle all cleans, and make sure quality assurance.',
  },
  {
    id: 8,
    icon: '/short-term-rental/owner-portal-icon.png',
    title: 'Owner Portal',
    description:
      'All clients have their own dedicated portal to view calendar, bookings, and financial statements.',
  },
  {
    id: 9,
    icon: '/short-term-rental/property-analysis-icon.png',
    title: 'Property Analysis',
    description:
      'Expert property analysis provides you with valuable insights to make informed decisions.',
  },
  {
    id: 10,
    icon: '/short-term-rental/competitive-pricing-icon.png',
    title: 'Competitive Pricing',
    description:
      'We offer top-quality real estate services at competitive rates. Experience value and excellence without compromise.',
  },
];

export const longTermServices = [
  {
    id: 1,
    icon: '/long-term-rental/listing-and-marketing-icon.png',
    title: 'Listing and Marketing',
    description:
      'Strategic advertising, we utilize proven strategies to attract qualified tenants quickly.',
  },
  {
    id: 2,
    icon: '/long-term-rental/financial-reporting-icon.png',
    title: 'Financial Reporting',
    description:
      "Transparent financial reporting keeps you informed about your property's performance and cash flow.",
  },
  {
    id: 3,
    icon: '/long-term-rental/tenant-screening-icon.png',
    title: 'Tenant Screening',
    description:
      'We carefully screen prospective tenants to ensure they meet your criteria for a reliable, long-term rental experience.',
  },
  {
    id: 4,
    icon: '/long-term-rental/legal-compliance-icon.png',
    title: 'Legal Compliance',
    description:
      'We stay updated on local rental regulations to keep your property in compliance, minimizing legal risks.',
  },
  {
    id: 5,
    icon: '/long-term-rental/lease-management-icon.png',
    title: 'Lease Management',
    description:
      'We handle lease agreements, renewals, and rent collection, ensuring smooth landlord-tenant relationships.',
  },
  {
    id: 6,
    icon: '/long-term-rental/owner-and-tenant-portal-icon.png',
    title: "Owner & Tenant's Portal",
    description:
      'Easily access important information, easy online pay, and more.',
  },
  {
    id: 7,
    icon: '/long-term-rental/maintenance-and-repairs-icon.png',
    title: 'Maintenance and Repairs',
    description:
      'Our team oversees property maintenance and promptly addresses repair requests, keeping your investment in top condition.',
  },
  {
    id: 8,
    icon: '/long-term-rental/monthly-sales-tax-filing-icon.png',
    title: 'Monthly Sales Tax Filing',
    description:
      'Included in our services, we handle all the paperwork and deadlines for you.',
  },
  {
    id: 9,
    icon: '/long-term-rental/property-inspections-icon.png',
    title: 'Property Inspections',
    description:
      'Expert property analysis provides you with valuable insights to make informed decisions.',
  },
  {
    id: 10,
    icon: '/long-term-rental/competitive-pricing-icon.png',
    title: 'Competitive Pricing',
    description:
      'We offer top-quality real estate services at competitive rates. Experience value and excellence without compromise.',
  },
];

export const buyAndSellServices = [
  {
    id: 1,
    icon: '/buy-and-sell/market-analysis-icon.png',
    title: 'Market Analysis',
    description:
      'We provide in-depth market analysis to holp you make informed buying or selling decisions.',
  },
  {
    id: 2,
    icon: '/buy-and-sell/transaction-management-icon.png',
    title: 'Transaction Management',
    description:
      'We manage all the details of the buying or selling process, from offers and counter offers to inspections and closing.',
  },
  {
    id: 3,
    icon: '/buy-and-sell/property-search-icon.png',
    title: 'Property Search',
    description:
      'For buyers, we help you find the perfect property that meets your needs and budget. For sellers, we assist in pricing your property competitively.',
  },
  {
    id: 4,
    icon: '/buy-and-sell/marketing-icon.png',
    title: 'Marketing',
    description:
      'Our marketing strategies help sellers attract potential buyers, while buyers receive curated property listings.',
  },
  {
    id: 5,
    icon: '/buy-and-sell/negotiation-icon.png',
    title: 'Negotiation',
    description:
      'Our expert negotiators work to secure the best deals for both buyers and sellers, ensuring a win-win outcome.',
  },
  {
    id: 6,
    icon: '/buy-and-sell/legal-compliance-icon.png',
    title: 'Legal Compliance',
    description:
      'We ensure that all transactions adhere to legal and regulatory requirements, providing peace of mind.',
  },
];
