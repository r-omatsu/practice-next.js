import { Photo } from "@/app/utils/type";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { photoId: string };
};

async function getPhoto(photoId: string) {
  const data: { photo: Photo } = await fetch(
    `http://localhost:8080/api/photos/${photoId}`
  ).then((res) => res.json());

  return data.photo;
}

// 動的メタデータの生成
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const photo = await getPhoto(params.photoId);
  const { title } = await parent;
  return {
    title: `${photo.title} | ${title?.absolute}`,
    description: photo.description,
  };
}

export default function Page({ params }: Props) {
  return <p>PhotoId: {params.photoId}</p>;
}
