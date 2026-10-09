const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export type ImageSize = "w300" | "w500" | "w780" | "original";

export function getImageUrl(
  path: string | null,
  size: ImageSize = "w500"
): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}