"use client";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

type Props = {
  children?: React.ReactNode;
};

export function Provider({ children }: Props) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
