export type Offering = { name: string; icon: string };

export type Property = {
  _id: string;
  hostawayId: number;
  name: string;
  price: number;
  guests: number;
  rating: number;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  cleaningFee: number;
  insuranceFee: number;
  description: string;
  isFeatured: boolean;
  offerings: Offering[];
  lodgingTaxPercent: number;
  salesTaxPercent: number;
  serviceFeePercent: number;
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
