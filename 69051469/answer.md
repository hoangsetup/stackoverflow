Unit test for the controller means another controller's dependencies work well. In your case, the controller only has one dependence - `CreateUserService`.

To test the controller, you can imagine that the service returns a user or throw an unexpected exception. And you expect that `.send` function will be called with the correct parameter. 

There are too many things that need to explain(I think so), you can try to investigate by yourself.

```ts
// CreateUserController.test.ts
import { mocked } from "ts-jest/utils";
import { Request, Response } from "express";
import { CreateUserController } from "./CreateUserController"
import { CreateUserService } from "./CreateUserService";

jest.mock('./CreateUserService'); // mock CreateUserService constructor

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
    }; // an instance of the service
    mocked(CreateUserService).mockImplementation(() => {
      return service;
    }); // mock the service constructor to return our mocked instance

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
```

It will fail in the second case because I expect that the controller has to respond with status 500, to make it pass, let update your controller:

```ts
...
    } catch (error) {
      return response.status(500).send({ error });
    }
...
```

