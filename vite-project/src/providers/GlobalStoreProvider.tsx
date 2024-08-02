import { StoreProvider as EasyPeasyStoreProvider } from "easy-peasy";
import { PropsWithChildren } from "react";
import { store } from "../Store/index";
import React from "react";


export default function GlobalStoreProvider({children}:PropsWithChildren<{}>){
    return <EasyPeasyStoreProvider store={store}>{children}</EasyPeasyStoreProvider>
}