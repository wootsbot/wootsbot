import { readFileSync } from "node:fs";
import { join } from "node:path";

import fg from "fast-glob";

export interface PhotoMate {
  text?: string;
  lang?: string;
  blurhash?: string;
}

export interface Photo extends PhotoMate {
  name: string;
  url: string;
}

const photosDir = join(process.cwd(), "public/photos");
//const photosDir = fileURLToPath(new URL("../../public/photos", import.meta.url));

// Load metadata
const metaFiles = await fg("**/*.json", {
  cwd: photosDir,
  absolute: true,
});

const metaInfo = metaFiles.map((filePath) => {
  const name =
    filePath
      .replace(/\.\w+$/, "")
      .split("/")
      .pop() || "";
  const data = JSON.parse(readFileSync(filePath, "utf-8")) as PhotoMate;
  return { name, data };
});

// Load photos
const imageFiles = await fg("**/*.{jpg,png,JPG,PNG}", {
  cwd: photosDir,
  absolute: false,
});

const photos = imageFiles
  .map((filePath): Photo => {
    const name = filePath.replace(/\.\w+$/, "");
    const url = `/photos/${filePath}`;
    return {
      ...metaInfo.find((info) => info.name === name)?.data,
      name,
      url,
    };
  })
  .sort((a, b) => b.name.localeCompare(a.name));

export default photos;
