import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PageProvider, FavoritesProvider } from '@/context/'

createRoot(document.getElementById('root')!).render(
    <PageProvider>
        <FavoritesProvider>
            <App />
        </FavoritesProvider>
    </PageProvider>
)
