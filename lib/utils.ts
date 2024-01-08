type FetchOptions = {
  cache?: 'no-cache';
  body?: string | FormData;
  next?: { tags: [string] };
  method?: 'POST' | 'PATCH' | 'DELETE';
};

export const currentYear = new Date().getFullYear();

// Fetch instance
export async function fetchInstance(path: string, options?: FetchOptions) {
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

// Convert date to text
export const dateToText = (input: Date | string | number | undefined) => {
  if (!input) return;

  const date = new Date(input);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};
