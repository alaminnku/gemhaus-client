import { ServicesState } from 'types';

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

export const initialServicesState = services.reduce((acc, curr) => {
  acc[curr.id] = { isOpen: false };
  return acc;
}, {} as ServicesState);
