import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { name, email, admin, password } = request.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({ name, email, admin, password });

      return response.send(user);
    } catch (error) {
      return response.status(500).send({ error });
    }
  }
}

export { CreateUserController };
