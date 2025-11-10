import type { Metadata } from "next";

import { PhotoGalleryAll } from "#/components/photos/photo-gallery-all";

import raw from "#/lib/photos";

export default async function PhotosPage() {
  return <PhotoGalleryAll photos={raw} />;
}

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Photos",
    description: "Photos by wootsbot",
    creator: "Jorge Luis Calleja Alvarado",
    openGraph: {
      title: "Photos by wootsbot",
      description: "Photos by wootsbot",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Photos by wootsbot",
      description: "Photos by wootsbot",
      creator: "Jorge Luis Calleja Alvarado",
    },
  };
};
