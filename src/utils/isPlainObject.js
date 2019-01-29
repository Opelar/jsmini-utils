export default function isPlainObject(obj) {
  if (typeOf(obj) !== 'Object') {
    return false;
  }

  const ctor = obj.constructor;

  if (typeof ctor !== 'function') {
    return false;
  }

  const prot = ctor.prototype;

  if (typeOf(prot) !== 'Object') {
    return false;
  }

  return prot.hasOwnProperty('isPrototypeOf');
}