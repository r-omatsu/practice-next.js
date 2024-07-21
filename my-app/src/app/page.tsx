import Link from "next/link";
import styles from "./page.module.css";
import { Photo } from "./utils/type";

async function getPhotos() {
  const data: { photos: Photo[] } = await fetch(
    "http://localhost:8080/api/photos"
    // NOTE: キャッシュを利用しない設定のためこのページは動的レンダリングになる
    // NOTE: ここをコメントアウトすると静的レンダリングになる
    // NOTE: 静的レンダリングにした場合、APIサーバーが立ち上がっていないとnpm run clean-buildに失敗する（npm run buildだとキャッシュを利用するので、成功することもあるので注意）
    // { cache: "no-store" }
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
