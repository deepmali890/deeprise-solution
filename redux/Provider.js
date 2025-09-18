"use client"

import { Provider } from "react-redux"
import { store } from "./store"

export function ReduxProvider({childern}){
    return (
        <Provider store={store}>
            {childern}
        </Provider>
    )
}