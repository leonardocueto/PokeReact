import { createContext, useContext } from "react";
import { PokemonDetails } from "@/models"

interface FavoritesContextType{
    favorites: PokemonDetails[],
    addFavorites: (pokemon: PokemonDetails) => void;
    removeFavorites: (id: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const useFavorites = () =>{
    const favorites = useContext(FavoritesContext)
    if(!favorites) throw new Error("must be use a provider favorites")
    return favorites
}