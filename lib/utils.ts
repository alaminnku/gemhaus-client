import axios from 'axios';

type GetGemhausDataOptions = {
  cache?: 'no-cache';
  next?: { revalidate: number };
};

export const currentYear = new Date().getFullYear();

// Get Gemhaus data
export async function getGemhausData(
  path: string,
  options?: GetGemhausDataOptions
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
  const data = await response.json();
  return data.access_token;
}

// Get Hostaway data
export async function getHostawayData(path: string) {
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

// Mutate data
export const mutateData = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

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

// Get ISO date
export const getISODate = (input: Date | string) =>
  new Date(input).toISOString().split('T')[0];

// Format currency to USD
export const createUSD = (number: number) =>
  new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
