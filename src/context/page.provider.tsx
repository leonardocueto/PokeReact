import { useEffect, useState } from 'react'
import { PageContext } from './page.context'

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
