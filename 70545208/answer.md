Busboy just requires `content-type` (lowercase) as the header field. Just provide the express request content type for busboy:

```ts
import * as Busboy from 'busboy';

    const busboy = new Busboy({
        headers: {
            'content-type': event.headers['content-type'] || event.headers['Content-Type'],
        }
    });
```
