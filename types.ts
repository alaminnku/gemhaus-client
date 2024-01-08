export type FAQsState = { [key: string]: { isOpen: boolean } };

export type Property = {
  _id: string;
  name: string;
  price: string;
  images: string[];
  beds: string;
  baths: string;
  guests: string;
  rating: string;
  description: string;
  isFeatured: boolean;
};
