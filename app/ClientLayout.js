"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import AppInitializer from "./AppInitializer";


export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <AppInitializer>
        {children}
      </AppInitializer>
    </Provider>
  );
}


