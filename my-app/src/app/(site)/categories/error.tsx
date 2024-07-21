"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // reset関数を実行すると、コンポーネントのデータ取得を再試行できる
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
