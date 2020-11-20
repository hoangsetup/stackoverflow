You can use [Partial][1] for `info` param.

> Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

```ts
const updatePerson: (person: Person, info: Partial<Person>) => Person = (person, info) => {
  return Object.assign(person, info)
} 
```

  [1]: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
