export default function isArray(arrOrObj) {
  if (!arrOrObj || typeof arrOrObj !== "object") {
    throw new Error("arg is not an object");
  }
  return Object.prototype.toString.call(arrOrObj).slice(8, -1) === "Array";
}
