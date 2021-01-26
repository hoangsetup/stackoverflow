import HttpException from "./http-exception";
import { NextFunction, Request, Response, response } from "express";
import { errorHandler } from "./";

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
