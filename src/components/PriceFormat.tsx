export function priceFormat(indx) {
  return indx.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
