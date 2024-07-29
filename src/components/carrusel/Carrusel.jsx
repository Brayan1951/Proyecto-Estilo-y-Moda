import React, { useEffect, useState } from 'react'

import './carrusel.css'

import imagen1 from './../../assets/img/carrusel/Moda1.png'
import imagen2 from './../../assets/img/carrusel/Moda2.png'
import imagen3 from './../../assets/img/carrusel/Moda3.jpg'

export function Carrusel() {
    const imagenes = [{ src: imagen1, alt: "chica junto a polos" }, { src: imagen2, alt: "joven posando" }, { src: imagen3, alt: "tienda de ropa" }];
    const [imagenIndex, setImagenIndex] = useState(0)



    useEffect(() => {
        const interval = setInterval(() => {
            setImagenIndex((prevIndex) => {


                return (prevIndex + 1) % imagenes.length
            })
        }, 5000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <section>
            <img className='imagen' src={imagenes[imagenIndex].src} alt={imagenes[imagenIndex].alt} />
        </section>
    )
}
