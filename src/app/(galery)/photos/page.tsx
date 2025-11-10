import { PhotoGalleryAll } from "#/components/photos/photo-gallery-all";

import raw from "#/lib/photos";

export default async function PhotosPage() {
  return <PhotoGalleryAll photos={raw} />;
}
