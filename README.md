[![](https://user-images.githubusercontent.com/25987204/78205790-10b0c680-74d8-11ea-9767-5bb93e920044.png)](https://dessert.dev/)

Dessert JS-YAML
============

[![npm-badge]][npm-url]
[![license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/dessert-js-yaml.svg
[npm-url]: https://www.npmjs.org/package/dessert-js-yaml
[license-badge]: https://img.shields.io/github/license/dessert-wasm/dessert-js-yaml
[license]: LICENSE_MIT

> Clone of [js-yaml] implemented in Rust for WebAssembly.

*dessert-js-yaml* is a connector with the WASM core: [dessert-yaml-core]

For more information, refer to the [core]

[js-yaml]: https://github.com/nodeca/js-yaml
[dessert-yaml-core]: https://github.com/dessert-wasm/dessert-yaml-core
[core]: https://github.com/dessert-wasm/dessert-yaml-core#readme

To see how it performs compared to js-yaml, see [here]

[here]: https://github.com/dessert-wasm/dessert-yaml-core#performance

## Table of contents
* [Usage](#usage)
* [API](#api)
* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)


## Usage

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

## API

The api should be the same as [js-yaml], but not all methods are supported yet

[js-yaml]: https://github.com/nodeca/js-yaml#api

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


## Installation
```sh
npm install dessert-js-yaml
```

## License
This software is licensed under the MIT license (see [LICENSE](LICENSE_MIT)).


## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)
