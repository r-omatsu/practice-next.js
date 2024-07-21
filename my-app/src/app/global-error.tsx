"use client";

// NOTE: global-error.tsxによるエラーのキャッチは**本番環境のみ**でしか行われない
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong! -- global error --</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
