import { AuthDetails, Permissions } from "../../app/shemas";
import { ForAuthenticating } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
  token: "it's a token",
  refreshToken: "it's a cool token",
};

interface userMock extends Permissions {
  email: string;
  password: string;
}

const users: userMock[] = [
  {
    user: true,
    admin: true,
    email: "JohnC@gmail.com",
    password: "It's John Cena",
  },
  {
    user: true,
    admin: false,
    email: "Mesirve@gmail.com",
    password: "123456",
  },
];

export class ControlAuthenticatorStub implements ForAuthenticating {
  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    const user = users.find(
      (curUser) => curUser.email == email && curUser.password == password
    );

    if (!user) {
      throw new Error("user does not authenticated");
    }

    return Promise.resolve(authDetailsMock);
  }

  async getPermissions(email: string, password: string): Promise<Permissions> {
    const user = users.find(
      (curUser) => curUser.email == email && curUser.password == password
    );

    if (!user) {
      throw new Error("user does not have permissions");
    }

    return Promise.resolve({ admin: user.admin, user: user.user });
  }
}
