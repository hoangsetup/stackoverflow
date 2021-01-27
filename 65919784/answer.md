Your function `blockme` execute in a `iframe`, this mean `document ` is document content of `iframe` only, the iframe not include element with id is `blackout`. It belong to `parent` document.

Let's try:

```html
    <script type="text/javascript">
        function blockme() {
            parent.document.getElementById('blackout').style.display = 'block';
        }
    </script>
```
