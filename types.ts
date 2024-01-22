export type FAQsState = { [key: string]: { isOpen: boolean } };

export type Property = {
  _id: string;
  hostawayId: string;
  name: string;
  price: string;
  images: string[];
  beds: string;
  baths: string;
  guests: string;
  rating: string;
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
