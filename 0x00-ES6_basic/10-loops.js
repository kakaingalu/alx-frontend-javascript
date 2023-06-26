export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const [key, value] of arr.entries()) {
    arr[key] = appendString + value;
  }

  return arr;
}
