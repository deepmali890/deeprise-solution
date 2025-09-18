"use client";

import Loader from "@/components/Loader/Loader";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function ProtectRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <Loader />; // tumhari loader file
  }

  if (!user) {
    router.push("/"); // not logged in, redirect
    return null;
  }

  return children; // logged in, show page
}
