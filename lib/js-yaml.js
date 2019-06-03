// var loader = require('./js-yaml/loader');
// var dumper = require('./js-yaml/dumper');
let wasm = require('dessert-yaml/dessert_yaml_core');

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

// module.exports.Type                = require('./js-yaml/type');
// module.exports.Schema              = require('./js-yaml/schema');
// module.exports.FAILSAFE_SCHEMA     = require('./js-yaml/schema/failsafe');
// module.exports.JSON_SCHEMA         = require('./js-yaml/schema/json');
// module.exports.CORE_SCHEMA         = require('./js-yaml/schema/core');
// module.exports.DEFAULT_SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
// module.exports.DEFAULT_FULL_SCHEMA = require('./js-yaml/schema/default_full');
module.exports.load                = wasm.load;
module.exports.loadAll             = loadAll;
module.exports.safeLoad            = wasm.safeLoad;
module.exports.safeLoadAll         = loadAll;
module.exports.dump                = wasm.dump;
module.exports.safeDump            = wasm.safeDump;
// module.exports.YAMLException       = require('./js-yaml/exception');

// // Deprecated schema names from JS-YAML 2.0.x
// module.exports.MINIMAL_SCHEMA = require('./js-yaml/schema/failsafe');
// module.exports.SAFE_SCHEMA    = require('./js-yaml/schema/default_safe');
// module.exports.DEFAULT_SCHEMA = require('./js-yaml/schema/default_full');

// Deprecated functions from JS-YAML 1.x.x
module.exports.scan           = deprecated('scan');
module.exports.parse          = deprecated('parse');
module.exports.compose        = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');
