import { createTRPCReact, httpLink } from "@trpc/react-query";
import { appRouter } from "./services/dashboard-api/app/composition-root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const trpc = createTRPCReact<typeof appRouter>();
export const queryClient = new QueryClient();
export const trpcClient = trpc.createClient({
  links: [
    httpLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});

interface Props {
  children: React.ReactNode;
}

function TrpcProvider({ children }: Props) {
  const [trpcClientInstance] = useState(() => trpcClient);

  return (
    <trpc.Provider
      client={trpcClientInstance}
      queryClient={queryClient}
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default TrpcProvider;