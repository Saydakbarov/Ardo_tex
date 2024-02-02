import { useEffect } from "react"
import { useSlug } from "../query-data/data.service"


export const MainProvider = ({children}) => {

    const {data, refetch} = useSlug()

    useEffect(() => {
        refetch()
    }, [window.location.pathname])

    return data?.data?.value ? <p className="text-center py-[50px] text-3xl font-semibold">{"Page not found("}</p> : children
 
}
