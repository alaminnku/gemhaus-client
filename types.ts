import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

type Role = 'ADMIN' | 'USER' | 'AGENT';

declare module 'next-auth' {
  interface Session {
    user: {
      role: Role;
      accessToken: string;
    } & DefaultSession;
  }
  interface User extends DefaultUser {
    role: Role;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: Role;
    accessToken: string;
  }
}

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
  availableDates: string[];
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

export type PropertiesView = 'singleColumn' | 'multipleColumns';

export type Agent = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  bio: string;
  image: string;
  qrCodeLink: string;
  file: File | undefined;
  properties: AgentProperty[];
  transactions: AgentTransaction[];
};

export type AgentProperty = {
  _id: string;
  isFeatured: boolean;
  price: number;
  address: string;
  city: string;
  state: string;
  images: string;
  description: string;
  file: File | undefined;
};

export type AgentTransaction = {
  _id: string;
  address: string;
  type: 'sold' | 'available';
};
