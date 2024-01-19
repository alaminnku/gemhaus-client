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
  lodgingTax: number;
  salesTax: number;
  serviceFee: number;
  description: string;
  isFeatured: boolean;
};

export type Article = {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
};
