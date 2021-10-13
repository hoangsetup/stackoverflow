Let's define the request response type. `axios.post` is a generic function, then you can define the response of the post request:

```ts
interface IPostResponse {
  someObject: { name: string };
  otherField: number;
}

axios.post<IPostResponse>(url, payload)
  .then(res => {
    // res.data is a IPostResponse
    const { someObject } = res.data; // someObject is a { name: string }
  })
```
