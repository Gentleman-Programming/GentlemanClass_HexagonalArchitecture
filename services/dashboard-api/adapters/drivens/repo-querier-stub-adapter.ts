import { User as RepoUser } from "../../../repository/app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
  id: "123123123",
  name: "John Doe",
  email: "john@gmail.com",
};

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(_email: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }

  createUser(_user: any, _password: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }
}
