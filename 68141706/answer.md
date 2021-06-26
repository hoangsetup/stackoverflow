You can create a type guard to make sure that an object is an `Error`.

```ts
function isError(pet: Person | Error): pet is Error {
  return (pet as Error).error !== undefined;
}
```

Then, just use this function to handle your function result:


```ts
function doSomething(typesToReturn: string): Person | Error { // avoid set name of a function is `function`
  if (typesToReturn == "1") {
    return { error: true, message: "i am error" } as Error
  }

  return { fname: "foo", lname: "bar" }
}

const result = doSomething("1");

if (isError(result)) {
  // now, result is a Error
  console.log(result.error);
} else {
  // now, result is a Person
  console.log(result.fname);
}
```
