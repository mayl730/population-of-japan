export function formatPopulation(value: number): string {
  return (value / 10000).toFixed(0) + "万";
}
