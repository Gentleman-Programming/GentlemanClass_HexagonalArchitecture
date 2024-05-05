import { RepoUser } from "../../../repository/app/schemas";
import { Permissions } from "../../app/schemas/auth";

export interface ForRepoQuerying {
  getUser(email: string): Promise<RepoUser>;
  getPermissions(userId: string): Promise<Permissions>;
}
