import { inject, injectable } from "inversify";
import { USER_INTERFACE_TYPE } from "../utils/appConst";
import { IUserInteractor } from "../interfaces/IUser/IUserInteractor";
import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/IUser/IUserRepository";

@injectable()
export class UserInteractor implements IUserInteractor {
  private repository: IUserRepository;
 
  constructor(
    @inject(USER_INTERFACE_TYPE.UserRepository) repository: IUserRepository
  
  ) {
    this.repository = repository;
  }

  async createUser(details: User): Promise<User> {
    return this.repository.create(details);
  }

  async updateUser(id: number, details: User): Promise<User | null> {
    return this.repository.update(id, details);
  }
  async getAllUsers(condition: any): Promise<User[]> {
    return this.repository.findAll(condition);
  }

  async getUser(condition: any): Promise<User | null> {
    return this.repository.find(condition);
  }

  getUserBasedByInfo(condition: any): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
