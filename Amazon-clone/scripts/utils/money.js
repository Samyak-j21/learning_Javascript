export function formatCurrency(priceRupees) {
  return (Math.round(priceRupees / 100)).toFixed(2);
}