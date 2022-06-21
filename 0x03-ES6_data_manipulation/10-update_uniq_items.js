// Defines a function that returns an updated map for all items
// with an initial quantity at 1
export default function updateUniqueItems(map) {
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
