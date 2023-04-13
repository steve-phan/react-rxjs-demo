import { ReactNode } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { CityProvider } from "./CityProvider/CityProvider";

const queryClient = new QueryClient();

export const GlobalProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CityProvider>{children}</CityProvider>
    </QueryClientProvider>
  );
};
