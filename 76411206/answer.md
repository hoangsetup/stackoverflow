Instead of converting your chart to a buffer, you can convert the chart to a URL object.

```js
    const svgString = scatterChartRef.current.chart.getSVG();

    // Use DOMParser to parse new svg element from svgString
    const parser = new DOMParser(); 
    const svgElem = parser.parseFromString(svgString, "image/svg+xml").documentElement;

    // Use toDataURL extension to generate Base64 string
    const b64 = svgElem.toDataURL();

    return <Image src={b64} debug={false} />
```
