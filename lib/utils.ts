import { Inter, Manrope } from 'next/font/google';
import { Dispatch, SetStateAction } from 'react';
import { Alert } from 'types';

type FetchGemhausDataOptions = {
  body?: FormData;
  next?: { tags: string[] };
  cache?: 'no-store';
  method?: 'POST' | 'DELETE';
};

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

// Fonts
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Get month abbreviation
export const getMonthAbbr = (date: Date) =>
  new Intl.DateTimeFormat('en', { month: 'short' }).format(date);

export const getDate = (date: string) => new Date(date).getDate();

// Success alert
export function showSuccessAlert(
  data: { message: string },
  setAlerts: Dispatch<SetStateAction<Alert[]>>
) {
  setAlerts((prevState) => [
    ...prevState,
    { message: data.message, type: 'success' },
  ]);
}

// Error alert
export function showErrorAlert(
  err: { message: string } | string,
  setAlerts: Dispatch<SetStateAction<Alert[]>>
) {
  const type = 'failed';

  setAlerts((prevState) =>
    typeof err === 'string'
      ? [...prevState, { message: err, type }]
      : err.message
      ? [...prevState, { message: err.message, type }]
      : [...prevState, { message: "Something wen't wrong", type }]
  );
}
