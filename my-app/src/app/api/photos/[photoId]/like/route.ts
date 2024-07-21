export async function POST(
  _: Request,
  { params }: { params: { photoId: string } }
) {
  console.log(`photoID ${params.photoId} が「いいじゃーん」されました`);
  return Response.json({ liked: true });
}
