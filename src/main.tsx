import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PageProvider } from '@/context/context.tsx'

createRoot(document.getElementById('root')!).render(
    <PageProvider>
        <App />
    </PageProvider>
)
