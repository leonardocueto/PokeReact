import { useState } from 'react'
import { FavoritesContext } from './favorites.context'
import { PokemonDetails } from '@/models'

export const FavoritesProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [favorites, setFavorites] = useState<PokemonDetails[]>([])

    const addFavorites = (pokemon: PokemonDetails) => {
        if (!favorites.some(p => p.id === pokemon.id)) {
            setFavorites(prev => [...prev, pokemon])
        }
    }
    const removeFavorites = (id: number) => {
        const filterPokemons = favorites.filter(p => p.id !== id)
        setFavorites(filterPokemons)
    }

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorites, removeFavorites }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}
