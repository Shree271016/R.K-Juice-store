import { createContext } from "react"

export const MyContext = createContext()

export const MyContextProvider = (props) => {
    return (
        <MyContext.Provider value='This value is from My context.'>
            {props.children}
        </MyContext.Provider>
    )
}

