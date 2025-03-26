import { useCallback, useState } from 'react'
import './style.css'
import { PokemonDetails, Ability } from '@/models'

interface CardProps {
    data: PokemonDetails
    loading: boolean
}

export const Card = ({ data, loading }: CardProps) => {
    const [active, setActive] = useState(false)

    const toggleActive = useCallback(() => setActive(prev => !prev), [])

    return (
        <>
            {loading ? (
                <div className='cards loading'>loading</div>
            ) : (
                <div
                    className={`cards ${active ? 'cards-active' : ''} ${
                        data.types?.[0]?.type?.name
                            ? `bg-${data.types[0].type.name}`
                            : ''
                    }`}
                    onClick={toggleActive}
                >
                    <div className='card-front'>
                        <h1>{data.name}</h1>
                        <img
                            loading='lazy'
                            src={data.sprites.front_default}
                            alt={`img ${data.name}`}
                        />
                    </div>

                    <div className='card-back'>
                        <h2>Información</h2>
                        <p>Altura: {data.height} Cm</p>
                        <p>Peso: {data.weight} Kg</p>
                        <p>Habilidades:</p>
                        <ul>
                            {data.abilities.map(
                                (ability: Ability, index: number) => (
                                    <li key={index}>{ability.ability.name}</li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
