import { useCallback, useState } from 'react'
import './style.css'
import { PokemonDetails, Ability } from '@/models'
import { Heart } from '@/components'
import { useFavorites } from '@/context'

interface CardProps {
    data: PokemonDetails
    loading?: boolean
}

export const Card = ({ data, loading }: CardProps) => {
    const [active, setActive] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const { addFavorites, removeFavorites } = useFavorites()

    const toggleActive = useCallback(() => setActive(prev => !prev), [])
    const getTypeClass = () => {
        const typeName = data.types?.[0]?.type?.name
        if (!typeName) return ''

        return `bg-${typeName.toLowerCase()}`
    }

    const typeUpperLetter =
        data.types[0].type.name.charAt(0).toUpperCase() +
        data.types[0].type.name.slice(1)

    const handleHeartClick = (e: React.MouseEvent) => {
        e.stopPropagation()

        if (!isFavorite) {
            addFavorites(data)
        } else {
            removeFavorites(data.id)
        }
        setIsFavorite(prev => !prev)
    }

    return (
        <>
            {loading ? (
                <div className='cards loading'>loading</div>
            ) : (
                <div
                    className={`cards ${
                        active ? 'cards-active' : ''
                    } ${getTypeClass()}`}
                    onClick={toggleActive}
                >
                    <main className='card-front'>
                        <div
                            className='favorite-heart'
                            onClick={handleHeartClick}
                        >
                            <Heart filled={isFavorite} />
                        </div>
                        <header className='card-header'>
                            <div className='card-header-title'>
                                <h1 className='card-title'>{data.name}</h1>
                                <p>{typeUpperLetter}</p>
                            </div>
                            <div className='bg-hp'>
                                HP {data.stats[0].base_stat}
                            </div>
                        </header>
                        <section className='card-img'>
                            <div className='card-bg-img'>
                                <img
                                    loading='lazy'
                                    src={data.sprites.front_default}
                                    alt={`img ${data.name}`}
                                />
                            </div>
                        </section>
                        <section className='card-stats'>
                            <div>
                                <div className='card-attack'>
                                    <div>Attack</div>
                                    <div>{data.stats[1].base_stat}</div>
                                </div>
                                <div className='card-attack-percent'>
                                    <div
                                        className='card-attack-percentage'
                                        style={{
                                            width: `${
                                                (data.stats[1].base_stat /
                                                    150) *
                                                100
                                            }%`
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='card-attack'>
                                    <div>Defense</div>
                                    <div>{data.stats[2].base_stat}</div>
                                </div>
                                <div className='card-attack-percent'>
                                    <div
                                        className='card-attack-percentage'
                                        style={{
                                            width: `${
                                                (data.stats[2].base_stat /
                                                    150) *
                                                100
                                            }%`
                                        }}
                                    />
                                </div>
                            </div>
                        </section>
                    </main>

                    <main className='card-back'>
                        <h1 className='card-subtitle'>Information</h1>
                        <div className='card-description'>
                            <div>Heigth: {data.height} Cm</div>
                            <div>Weigth: {data.weight} Kg</div>
                            <div className='card-abilities'>
                                <div>Abilities:</div>
                                <ul className='abilities-list'>
                                    {data.abilities.map(
                                        (ability: Ability, index: number) => (
                                            <li key={index}>
                                                {ability.ability.name}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </>
    )
}
