import { propertyOfferings } from '@data/offerings';

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
  offerings: typeof propertyOfferings;
};

export type Article = {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
};

export type HostawayCalendar = {
  listingMapId: number;
  date: string;
  price: number;
  status: 'available';
}[];

export type Dates = [string, string];

export type Alert = {
  message: string;
  type: 'success' | 'failed';
};
