/**
 * Utility to format monetary values into Indonesian Rupiah (IDR).
 * Accepts number, bigint, or string (numeric) and outputs "Rp 1.000.000" style formatting.
 */
export function formatRupiah(amount: number | bigint | string, withPrefix: boolean = true): string {
  const numericVal = typeof amount === "bigint" ? Number(amount) : typeof amount === "string" ? Number(amount) : amount;
  
  if (isNaN(numericVal)) {
    return withPrefix ? "Rp 0" : "0";
  }

  const formatted = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(numericVal);

  return withPrefix ? `Rp ${formatted}` : formatted;
}
