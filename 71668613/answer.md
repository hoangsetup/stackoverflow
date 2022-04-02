Wait until `getData` is done then execute the test cases.

`beforeAll` for getting data once for all tests.

`beforeEach` for re-fetch data for each `test`:

```ts
describe("My tests", () => {
  let testData: Array<MyDataStructure> = [];

  beforeAll(async () => { // async function
    testData = await getData(); // wait until getData is done 
  });

  describe("run tests", () => {
    test.each(testData)("this fails as testData  is empty array", (row: MyDataStructure) => console.log(row));
  });
});
```
