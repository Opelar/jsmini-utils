const hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  let target = {};
  let idx = -1;
  let len = arguments.length;

  while (++idx < len) {
    let source = arguments[i];

    for (const key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
