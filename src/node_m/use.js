function define(obj, key, val) {
  Object.defineProperty(obj, key, {
    configurable: true,
    writable: true,
    value: val
  });
}

function base(app, options) {
  define(app, "use", use);

  define(app, "run", function (val) {
    let self = this || app;
    let fns = self[prop];
    let len = fns.length;
    let idx = -1;

    while (++idx < len) {
      val.use(fns[idx]);
    }
    return val;
  });

  function use(type, fn, options) {
    let offset = 1;

    if (typeof type === "string" || Array.isArray(type)) {
      fn = wrap(type, fn);
      offset++
    } else {
      options = fn;
      fn = type;
    }

    if (typeof fn !== "function") {
      throw new TypeError("expected a function");
    }

    let self = this || app;
    let fns = self[prop];

    let args = [].slice.call(arguments, offset);
    args.unshift(self);

    if (typeof opts.hook === "function") {
      opts.hook.apply(self, args);
    }

    let val = fn.apply(self, args);

    if (typeof val === "function" && fns.indexOf(val) === -1) {
      fns.push(val);
    }
    return self;
  }

  function wrap(type, fn) {
    return function plugin() {
      return this.type === type ? fn.apply(this, arguments) : plugin
    }
  }

  return app
}