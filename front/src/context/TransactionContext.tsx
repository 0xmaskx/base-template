import React, {useContext, useState} from "react"
import {TransactionContextType} from "../types/TransactionContextType";

export const TransactionContext = React.createContext<TransactionContextType | null>(null)

export const TransactionsProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return (
        <TransactionContext.Provider
            value={{

            } as TransactionContextType}
        >
            {children}
        </TransactionContext.Provider>
    )
}

// Define a hook to make it easier to consume the context in functional components
export const useTransactionsContext = () => useContext(TransactionContext)
