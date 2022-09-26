import { QueryClient } from "@tanstack/react-query";

export const queryService = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 4,
      cacheTime: 1000 * 60 * 5,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});
