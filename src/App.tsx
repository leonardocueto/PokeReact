import { Favorites, Home } from '@/pages/'
import { Navbar } from './components'
import { usePage } from '@/context/context'

function App() {
    const { currentPage } = usePage()
    return (
        <>
            <div className='layout'>
                <Navbar />
                <div className='main'>
                    {currentPage === '/' && <Home />}
                    {currentPage === '/favorites' && <Favorites />}
                </div>
            </div>
        </>
    )
}

export default App
