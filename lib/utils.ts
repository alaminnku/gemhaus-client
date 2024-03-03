import { Manrope } from 'next/font/google';
import { sign } from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

type FetchGemhausDataOptions = {
  body?: FormData;
  cache?: 'no-store';
  method?: 'POST' | 'DELETE';
  next?: { tags?: string[]; revalidate: number };
  headers?: {
    Authorization: string;
  };
};

export const revalidateIn = 300;

export const currentYear = new Date().getFullYear();

// Fetch Gemhaus data
export async function fetchGemhausData(
  path: string,
  options?: FetchGemhausDataOptions
) {
  let data;
  let error;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...options,
    cache: 'no-store',
    credentials: 'include',
  });
  const result = await response.json();

  if (!response.ok) {
    error = { ...result, status: response.status };
  } else {
    data = result;
  }
  return { data, error };
}

// Get Hostaway access token
async function getHostawayAccessToken() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTAWAY_API_URL}/accessTokens`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        scope: 'general',
        grant_type: 'client_credentials',
        client_id: process.env.HOSTAWAY_ACCOUNT_ID as string,
        client_secret: process.env.HOSTAWAY_API_KEY as string,
      }),
    }
  );
  const result = await response.json();
  return result.access_token;
}

// Fetch Hostaway data
export async function fetchHostawayData(path: string) {
  let data;
  let error;

  const accessToken = await getHostawayAccessToken();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTAWAY_API_URL}${path}`,
    {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const result = await response.json();

  if (!response.ok) {
    error = { ...result, status: response.status };
  } else {
    data = result;
  }
  return { data, error };
}

// Convert date to text
export const dateToText = (input: Date | string | number) => {
  const date = new Date(input);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};

// Convert date to milliseconds
export const dateToMS = (input: Date | string) => new Date(input).getTime();

// Format date 2024-02-11
export function formatDate(input: string | Date) {
  const date = new Date(input);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Format currency to USD
export const createUSD = (number: number) =>
  new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(number);

export const manrope = Manrope({
  subsets: ['latin'],
});

// Get month abbreviation
export const getMonthAbbr = (date: Date) =>
  new Intl.DateTimeFormat('en', { month: 'short' }).format(date);

export const getDate = (date: string) => new Date(date).getDate();

export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getFirstName = (name: string) => name.split(' ')[0].trim();
