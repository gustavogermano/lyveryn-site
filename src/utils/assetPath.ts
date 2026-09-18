export function assetPath(path: string) {
  const base = typeof process !== "undefined" ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "";
  if (!path) return path;
  if (path.startsWith("/")) {
    return `${base}${path}`;
  }
  return `${base}/${path}`;
}
