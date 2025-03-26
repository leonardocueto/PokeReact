import { createContext, useContext, useState, useEffect } from 'react'

type PageContext = {
    currentPage: string
    setCurrentPage: (page: string) => void
}

const PageContext = createContext<PageContext | undefined>(undefined)

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentPage, setCurrentPage] = useState(window.location.pathname)

    const handlePageChange = (page: string) => {
        setCurrentPage(page)
        window.history.pushState({}, '', page)
    }
    useEffect(() => {
        const handlePopState = () => {
            setCurrentPage(window.location.pathname)
        }

        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, [currentPage])

    return (
        <PageContext.Provider
            value={{ currentPage, setCurrentPage: handlePageChange }}
        >
            {children}
        </PageContext.Provider>
    )
}

export const usePage = () => {
    const context = useContext(PageContext)
    if (!context) throw new Error('must be use a prover')
    return context
}
