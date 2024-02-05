import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('offering');
  return Response.json({ message: 'Offerings revalidated' });
}
