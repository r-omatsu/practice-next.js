"use client";

import { getPage } from "@/app/utils";
import { notFound, useRouter } from "next/navigation";

type Props = {
  params: { categoryName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ params, searchParams }: Props) {
  const page = getPage(searchParams);
  // NOTE: NotFoundの挙動を確認するため、10ページ目以降ではnotFound()を返す
  if (page > 10) {
    notFound();
  }

  const router = useRouter();
  return (
    <div>
      <h1>カテゴリー別一覧画面</h1>
      <h2>カテゴリー「{params.categoryName}」</h2>
      <p>ページ番号: 「{page}」</p>
      <button
        onClick={() => {
          router.push("/categories");
        }}
      >
        カテゴリー一覧へ戻る
      </button>
    </div>
  );
}
