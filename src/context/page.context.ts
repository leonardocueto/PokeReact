import { createContext, useContext } from 'react'

type PageContext = {
    currentPage: string
    setCurrentPage: (page: string) => void
}

export const PageContext = createContext<PageContext | undefined>(undefined)

export const usePage = () => {
    const context = useContext(PageContext)
    if (!context) throw new Error('must be use a prover')
    return context
}
