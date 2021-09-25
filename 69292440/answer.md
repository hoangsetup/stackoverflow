Use [describe][1] to group the validation rules, then use [test.each][2] or forEach to make the test.

```ts
describe('Full name must be >= 3 letters', () => {
  ['', 'a', 'ab', 'a ', 'a    ', '     a'].forEach((fullName) => {
    it(`should throw error when full name is "${fullName}"`, () => {
      expect(() => userBuilder.build({ fullName })).toThrowError();
    });
  });
});
```

Then, the fail message will look like this:

```shell
  Full name must be >= 3 letters
    ✓ should throw error when full name is "" (9 ms)
    ✓ should throw error when full name is "a" (1 ms)
    ✕ should throw error when full name is "ab" (1 ms)
    ✓ should throw error when full name is "a " (1 ms)
    ✓ should throw error when full name is "a    "
    ✓ should throw error when full name is "     a"

  ● Full name must be >= 3 letters › should throw error when full name is "ab"

    expect(received).toThrowError()

    Received function did not throw

      10 |   ['', 'a', 'ab', 'a ', 'a    ', '     a'].forEach((fullName) => {
      11 |     it(`should throw error when full name is "${fullName}"`, () => {
    > 12 |       expect(() => userBuilder.build({ fullName })).toThrowError();
         |                                                     ^
      13 |     });
      14 |   });
      15 | });

```




  [1]: https://jestjs.io/docs/api#describename-fn
  [2]: https://jestjs.io/docs/api#testeachtablename-fn-timeout
