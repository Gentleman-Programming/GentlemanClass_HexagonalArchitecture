import { RepoUser } from "../../../repository/app/schemas";
import { UserPermissions } from "../../app/schemas/auth";
import { ForRepoQuerying } from "../../ports/drivens";

export class RepoQuerierStubAdapter implements ForRepoQuerying {
  async getUser(_email: string): Promise<RepoUser> {
    return {
      id: "1",
      name: "John Doe",
      email: "john@gmail.com",
      password: "123",
    };
  }

  async getPermissions(_userId: string): Promise<UserPermissions> {
    return Promise.resolve({ id: "1", userId: "1", admin: true, user: true });
  }
}
