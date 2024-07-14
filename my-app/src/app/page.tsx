import Link from "next/link";
import styles from "./page.module.css";
import { Photo } from "./utils/type";

async function getPhotos() {
  const data: { photos: Photo[] } = await fetch(
    "http://localhost:8080/api/photos",
    { cache: "no-store" }
  ).then((res) => res.json());

  return data.photos.map(({ id, title }) => ({ id, title }));
}

export default async function Page() {
  const photos = await getPhotos();
  return (
    <div className={styles.container}>
      <h1>トップ画面</h1>
      <ul>
        {photos.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/photos/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
