import Loader from "@/components/Loader/Loader";
import { fatchCurrentUser } from "@/redux/slices/auth.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AppInitializer({ children }) {
    const dispatch = useDispatch();
    const { initialLoad } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fatchCurrentUser())
    }, [dispatch])

    if (initialLoad) {
        return <Loader />;
    }
    return children;
}

