You run mock on an exported module, then everywhere you import the module, it becomes mocked.

```ts
import db from './db'; // import db

jest.mock('./db', () => ({ // I think you want to return an object
  saveProduct: (product) => {
    //someLogic
    return
  },
  updateProduct: (product) => {
    //someLogic
    return
  }
}));


// assert
expect(db.updatePorduct).toHaveBeenCalledTimes(3);
```
