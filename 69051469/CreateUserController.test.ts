import { mocked } from "ts-jest/utils";
import { Request, Response } from "express";
import { CreateUserController } from "./CreateUserController"
import { CreateUserService } from "./CreateUserService";

jest.mock('./CreateUserService');

describe('CreateUserController', () => {
  const name = 'name';
  const email = 'email';
  const admin = true;
  const password = 'password';

  let controller: CreateUserController;
  let service: jest.Mocked<CreateUserService>;

  let request: Request;
  let response: Response;

  beforeEach(() => {
    request = {
      body: { name, email, admin, password },
    } as Request;
    response = {
      send: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    } as any;

    service = {
      execute: jest.fn(),
    };
    mocked(CreateUserService).mockImplementation(() => {
      return service;
    });

    controller = new CreateUserController();
  });

  it('should response with user object when service returns the user', async () => {
    const user: any = 'user mocked';
    service.execute.mockResolvedValue(user);

    await controller.handle(request, response);

    expect(response.send).toHaveBeenCalledWith(user);
    expect(service.execute).toHaveBeenLastCalledWith({ name, email, admin, password });
  });

  it('should response with status 500 and error object when service throws a error', async () => {
    const error = new Error('Timed out!');
    service.execute.mockRejectedValue(error);

    await controller.handle(request, response);

    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.send).toHaveBeenCalledWith({ error });
    expect(service.execute).toHaveBeenLastCalledWith({ name, email, admin, password });
  });
});
