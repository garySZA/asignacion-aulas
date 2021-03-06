import React from 'react'
import okImg from '../../../images/ok.svg'

export const Hecho = ({ cerrarModal }) => {
    return (
        <>
            <h2>Perfecto!</h2>
            <hr/>
            <div className='contenedor-advertencia'>
                <img
                    src={ okImg }
                    className='img-advertencia'
                />
                <p className='parrafo-advertencia'>
                    Los datos ingresados fueron guardados exitosamente.
                </p>
                <button
                    className='btn-entendido'
                    onClick={cerrarModal}
                >
                    Entendido
                </button>
            </div>
        </>
    )
}
