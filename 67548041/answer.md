You can define `Response` as a "common" type, that supports all types of API json response.

```ts
interface IResponse {
  [key: string]: any
}
```

Now, you can type `response.name` without the "red line", also `response.not_exist_property` is valid.

My recommendation is to define all types for all API response type:


```ts
interface GetUserResponse {
  name: string,
  age: number,
}
```


for `GET /users/:id` (example)

You can use [this tool][1] to convert a json response to Typescript type.


  [1]: https://jvilk.com/MakeTypes/
