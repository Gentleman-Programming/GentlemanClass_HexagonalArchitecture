import { describe, expect, it } from "vitest";
import { LoggerStubAdapter } from "../adapters/drivens";
import { Repository } from "./repository";

describe("Repository", () => {
  const monitorStub = new LoggerStubAdapter();
  const repositoryMock = new Repository(monitorStub);

  it.concurrent("should create user permissions", async () => {
    // GIVEN
    const mockedUserId = "1";
    const mockedPermissions = {
      admin: true,
      user: true
    }

    const expectedResult = {
      userId: '1',
      admin: true,
      user: true
    };

    // WHEN
    const result = await repositoryMock.createUserPermissions(mockedUserId, mockedPermissions);

    // THEN
    expect(result).toEqual(expect.objectContaining(expectedResult));
  });

  it.concurrent("should get user permissions", async () => {
    // GIVEN
    const mockedUserId = "1";

    const expectedResult = {
      userId: '1',
      admin: true,
      user: true
    };

    // WHEN
    const result = await repositoryMock.getUserPermissions(mockedUserId);

    // THEN
    expect(result).toEqual(expect.objectContaining(expectedResult));
  });

  it.concurrent(
    "should throw error when permissions does not exists for user",
    async () => {
      // GIVEN
      const mockUserId = "2";

      // WHEN

      // THEN
      await expect(
        repositoryMock.getUserPermissions(mockUserId)
      ).rejects.toThrowError("Permissions not found");
    }
  );
});
