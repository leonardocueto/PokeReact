import './style.css'
export const CardLoading = () => {
    return (
        <article
            className='card-loading'
            aria-label='Cargando información del Pokémon'
            role='status'
        >
            <header className='header '>
                <div
                    className='title loading'
                    aria-hidden='true'
                />
                <div
                    className='hp loading'
                    aria-hidden='true'
                />
            </header>
            <figure
                className='img loading'
                aria-hidden='true'
            />

            <section className='stats '>
                <div
                    className='bar loading '
                    aria-hidden='true'
                />
                <div
                    className='bar loading'
                    aria-hidden='true'
                />
            </section>
        </article>
    )
}
