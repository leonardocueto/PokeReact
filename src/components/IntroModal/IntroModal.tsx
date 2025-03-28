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
                        ? 'In this app, you can view all the Pokémon from PokeAPI in an interactive way.'
                        : 'By clicking on the cards, you can see brief information about the Pokémon.'}
                </p>
                <div className='modal-card'>
                    <Card data={pokemon} />
                </div>

                <button
                    className='modal-next'
                    onClick={handleNext}
                >
                    {step === 0 ? 'Next' : 'Got it!'}
                </button>
            </div>
        </div>
    )
}
