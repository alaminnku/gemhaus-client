import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

type Params = {
  params: { id: string };
};

export async function POST(req: NextRequest, { params }: Params) {
  const { id } = params;
  revalidateTag(`properties/${id}`);
  return Response.json({ message: 'Property revalidated' });
}
