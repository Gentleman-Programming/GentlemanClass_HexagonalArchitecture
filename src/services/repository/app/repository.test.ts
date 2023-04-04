import { describe, expect, it } from "vitest";
import { LoggerStubAdapter } from "../adapters/drivens";
import { Repository } from "./repository";

describe("Repository", () => {
  const monitorStub = new LoggerStubAdapter();
  const repositoryMock = new Repository(monitorStub);

  it.concurrent("should control that the user does not exist", async () => {
    //GIVEN
    const mockedEmail = "samuelcito@gmail.com";

    const expectedResult = {
      id: "1",
      name: "Samuel",
      email: "samuelcito@gmail.com",
    };

    //WHEN
    let result;
    try {
      result = await repositoryMock.getUser(mockedEmail);
    } catch (error) {}

    //THEN
    expect(result).not.toEqual(expectedResult);
  });

  it.concurrent("should create a new user", async () => {
    //GIVEN
    const mockedUser = {
      name: "Samuel",
      email: "samuelcito@gmail.com",
      password: "password",
    };

    const expectedResult = {
      id: "1",
      name: mockedUser.name,
      email: mockedUser.email,
    };

    // WHEN
    let result;
    try {
      result = await repositoryMock.createUser(mockedUser);
    } catch (error) {}

    //THEN
    expect(result).toEqual(expectedResult);
  });

  it.concurrent("should control that the user already exists", async () => {
    //GIVEN
    const mockedUser = {
      name: "Samuel",
      email: "samuelcito@gmail.com",
      password: "password",
    };

    const expectedResult = {
      id: "1",
      name: mockedUser.name,
      email: mockedUser.email,
    };

    // WHEN
    let result;
    try {
      result = await repositoryMock.createUser(mockedUser);
    } catch (error) {}

    //THEN
    expect(result).not.toEqual(expectedResult);
  });

  it.concurrent("should get a user", async () => {
    //GIVEN
    const mockedEmail = "samuelcito@gmail.com";

    const expectedResult = {
      id: "1",
      name: "Samuel",
      email: "samuelcito@gmail.com",
    };

    //WHEN
    let result;
    try {
      result = await repositoryMock.getUser(mockedEmail);
    } catch (error) {}

    //THEN
    expect(result).toEqual(expectedResult);
  });
});
