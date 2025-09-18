"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { fatchCurrentUser } from "@/redux/slices/auth.slice";
import Loader from "@/components/Loader/Loader";

function AppInit({ children }) {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    // user null hai to hi fetch karna
    if (!user) {
      dispatch(fatchCurrentUser());
    }
  }, [user, dispatch]);

  if (loading) {
    return <Loader />; // poore app ka loader
  }

  return children; // loader khatam → actual app
}

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <AppInit>{children}</AppInit>
    </Provider>
  );
}
