function apply(fn, thisArg, args) {
  switch (args.length) {
    case 0: return fn.call(thisArg);
    case 1: return fn.call(thisArg, args[0]);
    case 2: return fn.call(thisArg, args[0], args[1]);
    case 3: return fn.call(thisArg, args[0], args[1], args[2]);
  }
  return fn.apply(thisArg, args);
}