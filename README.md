Dessert JS-YAML
============

This library is a clone of [js-yaml] implemented in Rust for WebAssembly.

*dessert-js-yaml* is a connector with the WASM core: [dessert-yaml-core]

For more information, refer to the [core]

[js-yaml]: https://github.com/nodeca/js-yaml
[dessert-yaml-core]: https://github.com/dessert-wasm/dessert-yaml-core
[core]: https://github.com/dessert-wasm/dessert-yaml-core#readme

To see how it performs compared to js-yaml, see [here]

[here]: https://github.com/dessert-wasm/dessert-yaml-core#performance

## Summary
* [Installation](#installation)
* [API](#api)


## Installation
```sh
npm install dessert-js-yaml
```

## API

The api should be the same as [js-yaml], but not all methods are supported yet

[js-yaml]: https://github.com/nodeca/js-yaml#api

``` javascript
yaml = require('dessert-js-yaml');
fs   = require('fs');

// Get document, or throw exception on error
try {
  let doc = yaml.load(fs.readFileSync('/home/ixti/example.yml', 'utf8'));
  console.log(doc);

  // Print the parsed object as a YAML stream
  let yaml_stream = yaml.dump(doc);
  console.log(yaml_stream);
} catch (e) {
  console.log(e);
}
```

### load(string, [, options])
Most simple way of parsing a document. Parses string as single YAML document. Returns a JavaScript object or throws YAMLException on error. options aren't used as for now.


### loadSafe(string, [, options])
Same as load()


### loadAll(string, [, options])
Same as safeLoad(), but understands multi-document sources. Applies iterator to each document if specified, or returns array of documents.
Currently same as load() because serde_yaml doesn't support multi document yet, and data structure from yaml-rust aren't serializable.


### dump(object, [, options])
Serializes object as a YAML document


### safeDump(objects, [, options])
Same as dump()