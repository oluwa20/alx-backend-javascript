export default function groceriesList() {
  const arry = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const map = new Map();
    for (const a of arry) {
    map.set(a[0], a[1]);
  }
  return map;
}
