It seems the `onSuccess` function be called asynchronous, this means the assertion function is called before `onSuccess` function is called.

Let’s try to use [waitFor][1] helper to assert the callback function is called:

```js
userEvent.click(approveButton);
await waitFor(() => expect(onSuccess).toHaveBeenCalled());
```


  [1]: https://testing-library.com/docs/dom-testing-library/api-async/
