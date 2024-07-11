import { useEffect } from "react"
import { useSlug } from "../query-data/data.service"


export const MainProvider = ({children}) => {

    // const {data, refetch} = useSlug()

    // useEffect(() => {
    //     refetch()
    // }, [window.location.pathname])

    return  children
 
}
