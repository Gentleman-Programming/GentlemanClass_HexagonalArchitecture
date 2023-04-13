import { initTRPC } from "@trpc/server";
import { AuthenticatedUserSchema, RegisterSchema } from "../../app/schemas";
import { DashboardApi } from "./../../app/dashboard-api";

export function authTRPCAdapter(
  dashboardApi: DashboardApi,
  t: ReturnType<typeof initTRPC.create>
) {
  return t.router({
    login: t.procedure
      .input(RegisterSchema.pick({ email: true, password: true }))
      .output(AuthenticatedUserSchema)
      .mutation(({ input }) => dashboardApi.login(input.email, input.password)),
    register: t.procedure
      .input(RegisterSchema)
      .output(AuthenticatedUserSchema)
      .mutation(({ input }) => dashboardApi.register(input)),
  });
}
