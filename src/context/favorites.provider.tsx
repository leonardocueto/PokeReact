import { useState } from 'react'
import { FavoritesContext } from './favorites.context'
import { PokemonDetails } from '@/models'

export const FavoritesProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const storageData = localStorage.getItem('pokemons-like')
    const initialState = storageData ? JSON.parse(storageData) : []

    const [favorites, setFavorites] = useState<PokemonDetails[]>(initialState)

    const addFavorites = (pokemon: PokemonDetails) => {
        if (!favorites.some(p => p.id === pokemon.id)) {
            setFavorites(prev => [...prev, pokemon])
            localStorage.setItem(
                'pokemons-like',
                JSON.stringify([...favorites, pokemon])
            )
        }
    }
    const removeFavorites = (id: number) => {
        const filterPokemons = favorites.filter(p => p.id !== id)
        setFavorites(filterPokemons)
        localStorage.setItem('pokemons-like', JSON.stringify(filterPokemons))
    }

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorites, removeFavorites }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}
