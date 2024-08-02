import { PropsWithChildren } from "react";
import { RouterProvider } from "./RouterProvider";
import GlobalStoreProvider from "./GlobalStoreProvider";

import React from "react";


export function AppProviders({children}:PropsWithChildren){
    return(
        <GlobalStoreProvider>
            <RouterProvider>
                {/* <IntlProvider> */}
                    {children}
                {/* </IntlProvider> */}
            </RouterProvider>
        </GlobalStoreProvider>
    )
}

