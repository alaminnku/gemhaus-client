import { revalidateTag } from 'next/cache';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.secret || data.secret !== process.env.WEBHOOK_SECRET) {
      return Response.json({ message: 'Valid secret required' });
    }
    if (!data.tag) {
      return Response.json({ message: 'Revalidate tag required' });
    }

    revalidateTag(data.tag);
    return Response.json({ message: `${data.tag} revalidated` });
  } catch {
    return Response.json({ message: 'Invalid body data' });
  }
}
