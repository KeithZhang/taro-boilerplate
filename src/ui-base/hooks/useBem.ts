export default function useBem(cn = {}) {
  var PREFIX = "van-";

  function join(name, mods) {
    name = PREFIX + name;
    mods = mods.map(function(mod) {
      return name + "--" + mod;
    });
    mods.unshift(name);
    mods = mods.map(mod => {
      return mod;
    });
    return mods.join(" ");
  }

  function traversing(mods, conf) {
    if (!conf) {
      return;
    }

    if (typeof conf === "string" || typeof conf === "number") {
      mods.push(conf);
    } else if (Array.isArray(conf)) {
      conf.forEach(function(item) {
        traversing(mods, item);
      });
    } else if (typeof conf === "object") {
      Object.keys(conf).forEach(function(key) {
        conf[key] && mods.push(key);
      });
    }
  }

  function bem(name, conf = {}) {
    var mods = [];
    traversing(mods, conf);
    return join(name, mods);
  }
  return {
    bem
  };
}
