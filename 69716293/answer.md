At first, let's convert your image to `RGBA8` format, then create a `Uint8ClampedArray` - Input of `jsQR`.

```js
// ...
const rgba8 = upng.toRGBA8(imgInfo)[0]; // convert to RGBA8
const qrArray = new Uint8ClampedArray(rgba8); // create Uint8ClampedArray array

const code = jsQR(qrArray, imgInfo.width, imgInfo.height);
console.log(code);
```

The output of your QR code will look like this (on my laptop):

```log
{
  binaryData: [
    104, 116, 116, 112,  58,  47,  47, 116, 120, 122,  46,
    113, 113,  46,  99, 111, 109,  47, 112,  63, 107,  61,
     88,  87, 114, 102,  49, 105, 116,  45,  72, 105, 108,
    113, 101, 119, 121,  52,  71,  85,  51, 118, 119,  84,
     90,  77,  51,  70, 108,  57,  53,  49, 116, 116,  38,
    102,  61,  50,  49,  48,  48,  48,  53,  48,  49
  ],
  data: 'http://txz.qq.com/p?k=XWrf1it-Hilqewy4GU3vwTZM3Fl951tt&f=21000501',
  chunks: [
    {
      type: 'byte',
      bytes: [Array],
      text: 'http://txz.qq.com/p?k=XWrf1it-Hilqewy4GU3vwTZM3Fl951tt&f='
    },
    { type: 'numeric', text: '21000501' }
  ],
  version: 4,
  location: {
    topRightCorner: { x: 104.99999999999999, y: 6.0000000000000036 },
    topLeftCorner: { x: 6.000000000000003, y: 6.000000000000003 },
    bottomRightCorner: { x: 104.99999999999997, y: 104.99999999999997 },
    bottomLeftCorner: { x: 6.0000000000000036, y: 104.99999999999999 },
    topRightFinderPattern: { x: 94.5, y: 16.5 },
    topLeftFinderPattern: { x: 16.5, y: 16.5 },
    bottomLeftFinderPattern: { x: 16.5, y: 94.5 },
    bottomRightAlignmentPattern: { x: 85.5, y: 85.5 }
  }
}
```
