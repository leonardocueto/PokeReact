import { useRef } from 'react'
import './style.css'
export const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if (inputRef.current) {
            const value = inputRef.current.value.trim()
            if (!value) return
            console.log(inputRef.current.value)
            inputRef.current.value = ''
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='search'
        >
            <input
                type='text'
                ref={inputRef}
                placeholder='Search...'
            />
        </form>
    )
}
