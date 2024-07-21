"use client";

export function LikeButton({ photoId }: { photoId: string }) {
  return (
    <button
      onClick={() => {
        fetch(`/api/photos/${photoId}/like`, { method: "POST" });
      }}
    >
      いいじゃーん
    </button>
  );
}
