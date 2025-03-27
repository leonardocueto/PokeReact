import './style.css'
export const CardLoading = () => {
    return (
        <div className='card-loading'>
            <div className='header '>
                <div className='title loading' />
                <div className='hp loading' />
            </div>
            <div className='img loading' />

            <div className='stats '>
                <div className='bar loading ' />
                <div className='bar loading' />
            </div>
        </div>
    )
}
