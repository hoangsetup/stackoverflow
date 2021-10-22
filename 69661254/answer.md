You can [omit][1] `render` definition in the express's Response type. Then, redefine your render function:

```ts
interface ProductListResponse extends Omit<Response, 'render'> {
  render: (view: string, options?: { products: Product[] }) => void;
}
```


  [1]: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
