export function paginate<T>(array: T[], perPage: number, currentPage: number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((currentPage - 1) * perPage, currentPage * perPage);
}
