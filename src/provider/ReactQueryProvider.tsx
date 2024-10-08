"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";

interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default ReactQueryProvider;
