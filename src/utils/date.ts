/**
 * Date formatting helpers in Indonesian locale.
 */
export function formatIndonesianDate(
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions
): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "-";

  const defaultOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("id-ID", options || defaultOptions).format(d);
}

export function formatShortDate(date: Date | string | number): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function formatTimeWIB(date: Date | string | number): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "-";
  return (
    new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(d) + " WIB"
  );
}
