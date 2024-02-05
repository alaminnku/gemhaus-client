import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('properties');
  return Response.json({ message: 'Success' });
}
