"use client";

import { Grid3x3, LayoutPanelLeft } from "lucide-react";
import { useState } from "react";

import type { Photo } from "#/lib/photos";
import { PhotoGrid } from "./photo-grid";

type PhotoGalleryAllProps = {
  photos: Photo[];
};

export function PhotoGalleryAll({ photos }: PhotoGalleryAllProps) {
  const [galleryView, setGalleryView] = useState<"cover" | "contain">("cover");

  const toggleView = () => {
    setGalleryView(galleryView === "cover" ? "contain" : "cover");
  };

  return (
    <div>
      <div className="fixed top-20 left-6">
        <button
          type="button"
          onClick={toggleView}
          title="Switch view"
          className="cursor-pointer rounded-full p-2 opacity-20 hover:opacity-100 hover:bg-zinc-800 transition-opacity w-fit"
        >
          {galleryView === "cover" && <Grid3x3 />}
          {galleryView === "contain" && <LayoutPanelLeft />}
        </button>
      </div>

      <PhotoGrid photos={photos} view={galleryView} />
    </div>
  );
}
