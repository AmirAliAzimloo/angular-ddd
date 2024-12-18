import { IUserAggregateRepository } from "./repositories/users/user-repository.interface";

export interface IUnitOfWork{
    getUserRepository(): IUserAggregateRepository;
}