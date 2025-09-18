"use client"

import { fatchCurrentUser } from "@/redux/slices/auth.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useAuth() {
    const { user, loading, initialLoad, error } = useSelector((state) => state.auth);

    return {
        user,
        loading,
        isAppLoading: initialLoad,
        error,
    }
}