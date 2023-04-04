import { ExternalUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: ExternalUser = {
  id: "1",
  name: "John Doe",
  email: "john@gmail.com",
};

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(_email: string): Promise<ExternalUser> {
    return Promise.resolve(userMock);
  }

  createUser(_user: User): Promise<ExternalUser> {
    return Promise.resolve(userMock);
  }
}
