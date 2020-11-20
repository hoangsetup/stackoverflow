`getISS` is a async function, you have call it as a async way (`await keyword/ Promise style`).

Promise style:

```html
<main>
  <h1>Where is the ISS?</h1>
  <p>Latitude: <span id="lat" type=text>""</span></p> <br>
  <p>Longitude: <span id="lon" type=text>""</span></p>
  <script src="js/script.js" type="text/javascript">
    getISS().then(coordinates => {
      setText('lat', coordinates.latitude);
      setText('lon', coordinates.longitude);
    });
  </script>
</main>
```

`async/await` style, use IIFE

```html
<main>
  <h1>Where is the ISS?</h1>
  <p>Latitude: <span id="lat" type=text>""</span></p> <br>
  <p>Longitude: <span id="lon" type=text>""</span></p>
  <script src="js/script.js" type="text/javascript">
    (async () => {
      const coordinates = await getISS(); // wait here
      setText('lat', coordinates.latitude);
      setText('lon', coordinates.longitude);
    })();
  </script>
</main>
```
