`myMongooseModel` is a dependency, just create a spy object
and inject it to `ExampleService`.


Example:

```ts
describe("ExampleService", () => {
  let service: ExampleService;

  let exampleModelMock;
  let myMongooseModelMock;

  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log'); // spy log function
    exampleModelMock = {}; // mock it
    myMongooseModelMock = {
      query: jest.fn(), // mock query function
    };

    service = new ExampleService(exampleModelMock, myMongooseModelMock); // inject dependencies
  });

  it("should NOT call query when name too short", async () => {
    await service.addToCollection("");

    expect(logSpy).toHaveBeenCalledWith('no name entered');
    expect(myMongooseModelMock.query).not.toHaveBeenCalled();
  });

  it("should call query when name is NOT too short", async () => {
    await service.addToCollection("long_name");

    expect(logSpy).not.toHaveBeenCalled();
    expect(myMongooseModelMock.query).toHaveBeenCalled();
  });
});
```
