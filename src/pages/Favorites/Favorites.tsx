import { Card } from '@/components'
import { useFavorites } from '@/context'

export const Favorites = () => {
    const { favorites } = useFavorites()
    return (
        <div className='home'>
            <h1>Favorites</h1>
            <div className='home-container'>
                {favorites.map(pokemon => (
                    <Card
                        data={pokemon}
                        key={pokemon.id}
                    />
                ))}
            </div>
        </div>
    )
}
