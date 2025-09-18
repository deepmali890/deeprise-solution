"use client"

import { fatchCurrentUser } from "@/redux/slices/auth.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useAuth() {
    const dispatch =  useDispatch();
    const { user, loading } = useSelector((state) => state.auth);

    useEffect(()=>{
        if(!user){
            dispatch(fatchCurrentUser());
        }
    },[user,dispatch])
    
    return {
        user,
        loading,
    }
}