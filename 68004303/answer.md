You have to return something for `getMinData` function.

Currently, you call `return option.MinQuantity;`, but it is result for an anonymous function - `(option: SProductOptionComponent) => {`.

If you just want to find the first `option.MinQuantity`, try this function:

```ts
getMinData(rules: ConstraintRule[], id: string) {
  let minQuantity = 0;

  rules.forEach((rule) => {
    rule._metadata.productList.forEach(({ OptionGroups }) => {
      OptionGroups.forEach(({ Options }) => {
        const foundOption = Options.find((o) => o.ComponentProductId === id);
        minQuantity = foundOption ? foundOption.MinQuantity : 0; // Default min value is 0
      });
    });
  });

  return minQuantity; // return value
}
```



