import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('articles');
  return Response.json({ message: 'Articles revalidated' });
}
