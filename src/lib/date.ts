export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDateShort(date: string) {
  return new Date(date).toLocaleDateString("es-MX", {
    month: "short",
    day: "numeric",
  });
}
