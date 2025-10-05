"use client";
import React from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
persistStore;

function AppProvider({ children }: { children: React.ReactNode }) {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>{children}</div>
      </PersistGate>
    </Provider>
  );
}

export default AppProvider;
