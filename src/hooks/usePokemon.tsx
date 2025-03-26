import { useState } from 'react'
import { apiFetch } from '@/services'
import { PokemonDetails, PokemonResponse } from '@/models'

export function usePokemon() {
    const [nextPage, setNextPage] = useState<string | null>(
        'https://pokeapi.co/api/v2/pokemon'
    )
    const [loading, setLoading] = useState(false)
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([])

    const getPokemons = async () => {
        if (loading || !nextPage) return
        try {
            setLoading(true)
            const data: PokemonResponse = await apiFetch(nextPage)
            setNextPage(data.next)

            const detailedPokemons = await Promise.all(
                data.results.map(async pokemon => {
                    const pokemonDetails = await apiFetch(pokemon.url)
                    return pokemonDetails
                })
            )

            setPokemonDetails(prevDetails => [
                ...prevDetails,
                ...detailedPokemons
            ])
        } catch (error) {
            console.error('Error fetching Pokémon:', error)
        } finally {
            setLoading(false)
        }
    }

    return {
        pokemonDetails,
        loading,
        getPokemons
    }
}
