#  web data frame (wdf) loader for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

The `wdf-loader` works like the `json-loader`, and return a
[wdf](https://github.com/walnutgeek/wdf).DataFrame .

``` javascript
var  df = require("./file.wdf");
// => DataFrame object containin all data from "file.wdf"
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)