`items.filters` looks like an object instead of an array, and I think your idea is loop thought all key of `GetAllUserFilter` and append them, their value to `query` array.

You can use `Object.keys` to get all keys of an object, then loop thought them to check their name and value object the object at the key.


```ts
async function GetAllUsersPaging(items: FilterViewModel<GetAllUserFilter>) {

  let query: any = [];

  Object.keys(items.filters).forEach(key  => {
    const value = items.filters[key as keyof GetAllUserFilter];
    if (key === 'phoneNumber' && value) {
      query.push({ phoneNumber: { $regex: `(.*)${value}(.*)` } });
    } else {
      query.push({ [key]: value }); // ex: { blocked: true }
    }
  });
}
```
