import React, { useEffect, useState } from 'react'



import './inicio.css'
import { Carrusel } from '../../components'


export function InicioPage() {








  return (
    <main>

      <Carrusel />

      <div className="container text-center mt-5">
        <div className="row">
          <h2 className='my-4'>Videos publicitarios de nuestras Marcas</h2>
          <div className="col-md-4 mb-4">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/sWwKVDgCW08?si=CclRTqGjFBJcgM3z" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="col-md-4 mb-4">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Pdb3ro77j8Y?si=7fQQWFLrN69l1C8v" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="col-md-4 mb-4">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/g971aorJa6U?si=UkLzHeddfLWRJjLG" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>

    </main>
  )
}
