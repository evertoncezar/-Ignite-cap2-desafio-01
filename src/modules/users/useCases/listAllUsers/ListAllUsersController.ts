/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
import { Request, Response } from "express";
import { IRequest, ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const  { user_id } = request.headers;
    
    let allUsers;
    
    try {
       allUsers = this.listAllUsersUseCase.execute( { user_id } as IRequest);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    
    return response.json(allUsers);
  }
}

export { ListAllUsersController };

