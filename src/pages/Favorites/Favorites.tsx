import { Card } from '@/components'
import { useFavorites } from '@/context'

export const Favorites = () => {
    const { favorites } = useFavorites()
    return (
        <main
            className='home'
            aria-label='Favorites pokemon page'
        >
            <header>
                <h1>
                    <span>Favorites</span>
                </h1>
            </header>
            <section
                className='home-container'
                aria-labelledby='favorites-heading'
            >
                {favorites.length > 0 ? (
                    favorites.map(pokemon => (
                        <Card
                            data={pokemon}
                            key={pokemon.id}
                        />
                    ))
                ) : (
                    <p
                        role='alert'
                        aria-live='polite'
                    >
                        You don't have any favorite Pokémon yet
                    </p>
                )}
            </section>
        </main>
    )
}
