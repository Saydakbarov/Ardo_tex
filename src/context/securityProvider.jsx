import { createContext, useEffect } from "react"
import { useSecurity } from "../query-data/data.service"


export const SecurityProvider = ({children}) => {

    const {data, refetch} = useSecurity()

    useEffect(() => {
        refetch()
    }, [window.location.pathname])

    return data?.data?.value ? <p className="text-center py-[50px] text-3xl font-semibold">{"Page not found("}</p> : children
 
}
