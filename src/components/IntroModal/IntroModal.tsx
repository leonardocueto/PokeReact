import { useEffect, useState } from 'react'
import './style.css'
import { Card } from '@/components'
import { PokemonDetails } from '@/models'

interface IntroModalProps {
    pokemon: PokemonDetails
    onClose: () => void
}

export const IntroModal = ({ pokemon, onClose }: IntroModalProps) => {
    const [step, setStep] = useState(0)

    useEffect(() => {
        if (!localStorage.getItem('modal')) {
            localStorage.setItem('modal', 'true')
        } else {
            onClose()
        }
    }, [])

    const handleNext = () => {
        if (step === 0) {
            setStep(1)
        } else {
            onClose()
        }
    }

    return (
        <div
            className='modal-overlay'
            onClick={onClose}
        >
            <div
                className='modal-content'
                onClick={e => e.stopPropagation()}
            >
                <button
                    className='modal-close'
                    onClick={onClose}
                >
                    ✖
                </button>
                <h2>Bienvenido a la Pokédex</h2>
                <p
                    key={step}
                    className='modal-text'
                >
                    {step === 0
                        ? 'En esta app podrás ver todos los Pokémon de PokeAPI de una forma interactiva.'
                        : 'Al hacer clic en las cards, podrás ver una breve información del Pokémon.'}
                </p>
                <div className='modal-card'>
                    <Card data={pokemon} />
                </div>

                <button
                    className='modal-next'
                    onClick={handleNext}
                >
                    {step === 0 ? 'Siguiente' : '¡Entendido!'}
                </button>
            </div>
        </div>
    )
}
