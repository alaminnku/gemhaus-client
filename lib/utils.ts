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

// Get Hostaway data
export async function getHostawayData(path: string) {
  let data;
  let error;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTAWAY_API_URL}${path}`,
    {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${process.env.HOSTAWAY_ACCESS_TOKEN}`,
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

// Get ISO date
export const getISODate = (input: Date | string) =>
  new Date(input).toISOString().split('T')[0];
