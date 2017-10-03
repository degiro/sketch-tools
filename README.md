# sketch-tools
## Sketch Color

```js
const {msColorToRgba, rgbaToMSColor} = require('./sketch-color.js');

rgbaToMSColor(41, 61, 74, 100); 
/*
Output:
{ 
  red: 0.1607843137254902,
  green: 0.23921568627450981,
  blue: 0.2901960784313726,
  alpha: 0.39215686274509803
}
*/

msColorToRgba({ 
  red: 0.1607843137254902,
  green: 0.23921568627450981,
  blue: 0.2901960784313726,
  alpha: 0.39215686274509803
});
/*
Output:
[41, 61, 74, 100]
*/
```
