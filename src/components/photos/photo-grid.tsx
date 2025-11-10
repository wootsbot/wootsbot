/** biome-ignore-all lint/performance/noImgElement: <> */
"use client";

import { blurhashToGradientCssObject } from "@unpic/placeholder";
import type { Photo } from "#/lib/photos";
import { cn } from "#/lib/utils";

interface PhotoGridProps {
  photos: Photo[];
  view?: "cover" | "contain";
}

export function PhotoGrid({ photos, view }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-8xl mx-auto">
      {photos.map((photo, idx) => (
        <div key={photo.blurhash} className="overflow-hidden rounded-lg">
          <img
            src={photo.url}
            alt={photo.text || `Photo ${photo.blurhash}`}
            data-photo-index={idx}
            style={
              photo.blurhash && view !== "contain"
                ? (blurhashToGradientCssObject(photo.blurhash) as React.CSSProperties)
                : undefined
            }
            loading="lazy"
            className={cn(
              "w-full",
              view === "contain" ? "object-contain sm:aspect-square" : "object-cover aspect-square",
            )}
          />
        </div>
      ))}
    </div>
  );
}
