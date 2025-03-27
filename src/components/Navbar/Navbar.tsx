import { usePage } from '@/context/page.context'
import './style.css'
export const Navbar = () => {
    const { currentPage, setCurrentPage } = usePage()
    return (
        <nav className='navbar'>
            <a
                className={currentPage === '/' ? 'active' : ''}
                onClick={e => {
                    e.preventDefault()
                    setCurrentPage('/')
                }}
            >
                Home
            </a>
            <a
                className={currentPage === '/favorites' ? 'active' : ''}
                onClick={e => {
                    e.preventDefault()
                    setCurrentPage('/favorites')
                }}
            >
                Favorites
            </a>
        </nav>
    )
}
