export type FAQState = { [key: string]: { isOpen: boolean } };
export type ServiceState = { [key: string]: { isOpen: boolean } };

export type Property = {
  _id: string;
  hostawayId: number;
  name: string;
  price: number;
  images: string[];
  beds: number;
  baths: number;
  guests: number;
  rating: number;
  cleaningFee: number;
  insuranceFee: number;
  lodgingTaxPercent: number;
  salesTaxPercent: number;
  serviceFeePercent: number;
  description: string;
  isFeatured: boolean;
};

export type Article = {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
};

export type HostawayDate = {
  date: string;
  price: number;
  status: 'available';
};
