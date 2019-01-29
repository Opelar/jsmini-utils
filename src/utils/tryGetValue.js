export default function tryGetValue(fn, defaultValue) {
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
}