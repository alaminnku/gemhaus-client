import { NextApiRequest } from 'next';
import { revalidateTag } from 'next/cache';

type Params = {
  params: { id: string };
};

export async function POST(req: NextApiRequest, { params }: Params) {
  const { id } = params;
  revalidateTag(`properties/${id}`);
  return Response.json({ message: 'Success' });
}
