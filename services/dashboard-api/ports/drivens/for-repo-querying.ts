import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";

export interface ForRepoQuerying {
  getUser(email: string): Promise<RepoUser>;
  createUser(user: User, password: string): Promise<RepoUser>;
}
