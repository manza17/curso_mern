import { userEntity } from "../entities/user.entity";
import { Crud } from "../interfaces/crud.interface";
import { LogError, LogSuccess } from "./../../utils/logger";

//PETICIONES CRUD

/**
 * Method to obtain all user th Users
 */
export class UserORM implements Crud{
    constructor() { }
    getById(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteById(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    create(): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    updateById(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

   async getAll(): Promise<any[] | undefined> {
    try {
        let userModel = userEntity();
    
        return await userModel.find({ isDelete: false });
      } catch (error) {
        LogError(`[ORM ERROR]: Get all users ${error}`);
      }
   }
}
