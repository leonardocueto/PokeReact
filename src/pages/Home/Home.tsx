import { useEffect, useState, useCallback } from 'react'
import { Card, CardLoading } from '@/components/'
import { usePokemon } from '@/hooks/'

export const Home = () => {
    const { pokemonDetails, loading, getPokemons } = usePokemon()
    const [isFetching, setIsFetching] = useState(true)

    //Función de scroll infinito
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
        <main
            className='home'
            role='main'
        >
            <header>
                <h1>
                    <span>Pokedex</span>
                </h1>
            </header>
            <section
                className='home-container'
                aria-label='Pokemon list'
            >
                {pokemonDetails.length > 0 &&
                    pokemonDetails.map(pokemon => (
                        <Card
                            data={pokemon}
                            loading={loading}
                            key={pokemon.id}
                        />
                    ))}

                {loading &&
                    Array.from({ length: 8 }).map((_, i) => (
                        <CardLoading key={i} />
                    ))}
                {isFetching && !loading && (
                    <p aria-live='polite'>Loading more Pokémon...</p>
                )}
            </section>
        </main>
    )
}
