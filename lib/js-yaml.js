let wasm = require('dessert-yaml-core/dessert_yaml_core');

function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}

function loadAll(input, iterator, options) {
  var documents = wasm.loadAll(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  documents.forEach(e => {
    iterator(e);
  });
}

module.exports.load                = wasm.load;
module.exports.loadAll             = loadAll;
module.exports.safeLoad            = wasm.safeLoad;
module.exports.safeLoadAll         = loadAll;
module.exports.dump                = wasm.dump;
module.exports.safeDump            = wasm.safeDump;

// // Deprecated schema names from JS-YAML 2.0.x
// module.exports.MINIMAL_SCHEMA = require('./js-yaml/schema/failsafe');
// module.exports.SAFE_SCHEMA    = require('./js-yaml/schema/default_safe');
// module.exports.DEFAULT_SCHEMA = require('./js-yaml/schema/default_full');

// Deprecated functions from JS-YAML 1.x.x
module.exports.scan           = deprecated('scan');
module.exports.parse          = deprecated('parse');
module.exports.compose        = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');
