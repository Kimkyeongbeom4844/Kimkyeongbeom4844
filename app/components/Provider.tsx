"use client";
import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { store } from "../store";
import Backdrop from "./Backdrop";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider store={store}>
      {children}
      <Backdrop />
    </StoreProvider>
  );
}
