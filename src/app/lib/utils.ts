export function extractMatchingProperty(
  data: object,
  matchingStr: string
): string[] {
  if (matchingStr.trim() === '') return [];

  return Object.entries(data)
    .filter(([key, val]) => key.includes(matchingStr) && val.trim() !== '')
    .map(([, val]) => val);
}
