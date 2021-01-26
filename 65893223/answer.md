In you handler, you call `response.status(status).send(error);`, this mean `.status()` should return an object what include send function, but in your mock `status: jest.fn()` it will return `undefined`.

With express's `Response` object, it is using chain methods, this mean the function will return the object itself.

We can mock the same behavior with `.mockReturnThis()`.

I also update your expectations for your middleware:


```ts
describe("Error handler middleware", () => {
  const error: HttpException = {
    name: "error",
    statusCode: 500,
    status: 1,
    message: "string",
    error: "string"
  };
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  test("handle error when error includes statusCode", async () => {
    errorHandler(
      error as HttpException,
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith(error);
    expect(nextFunction).not.toHaveBeenCalled();
  });
});
```
