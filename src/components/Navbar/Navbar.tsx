import { usePage } from '@/context/page.context'
import './style.css'

export const Navbar = () => {
    const { currentPage, setCurrentPage } = usePage()

    const handleNavigation = (path: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentPage(path)
    }

    return (
        <nav
            className='navbar'
            aria-label='Main navigation'
        >
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <a
                        href='/'
                        className={`navbar-link ${
                            currentPage === '/' ? 'active' : ''
                        }`}
                        onClick={handleNavigation('/')}
                        aria-current={currentPage === '/' ? 'page' : undefined}
                    >
                        Pokedex
                        <span
                            className='navbar-link-decoration'
                            aria-hidden='true'
                        />
                    </a>
                </li>
                <li className='navbar-item'>
                    <a
                        href='/favorites'
                        className={`navbar-link ${
                            currentPage === '/favorites' ? 'active' : ''
                        }`}
                        onClick={handleNavigation('/favorites')}
                        aria-current={
                            currentPage === '/favorites' ? 'page' : undefined
                        }
                    >
                        Favorites
                        <span
                            className='navbar-link-decoration'
                            aria-hidden='true'
                        />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
