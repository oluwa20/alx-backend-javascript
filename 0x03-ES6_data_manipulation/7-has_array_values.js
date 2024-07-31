export default function hasValuesFromArray(set, arry) {
  for (const a of arry) {
    if (!set.has(a)) return false;
  }
  return true;
}
