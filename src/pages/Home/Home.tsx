import { useEffect, useState, useCallback } from 'react'
import { Card, Search } from '@/components/'
import { usePokemon } from '@/hooks/'
import './style.css'

export const Home = () => {
    const { pokemonDetails, loading, getPokemons } = usePokemon()
    const [isFetching, setIsFetching] = useState(false)

    // Función de scroll infinito
    const handleScroll = useCallback(async () => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement
        if (
            scrollTop + clientHeight >= scrollHeight - 150 &&
            !loading &&
            !isFetching
        ) {
            setIsFetching(true)
            try {
                await getPokemons()
            } catch (error) {
                console.error('Error fetching Pokémon:', error)
            } finally {
                setIsFetching(false)
            }
        }
    }, [loading, isFetching, getPokemons])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true)
            try {
                await getPokemons()
            } catch (error) {
                console.log(error)
            } finally {
                setIsFetching(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='home'>
            <h1>Home</h1>
            <Search />
            <div className='home-container'>
                {pokemonDetails.length > 0 &&
                    pokemonDetails.map(pokemon => (
                        <Card
                            data={pokemon}
                            loading={loading}
                            key={pokemon.id}
                        />
                    ))}
            </div>
            {loading && <p>Loading...</p>}
            {isFetching && !loading && <p>Loading more Pokémon...</p>}
        </div>
    )
}
