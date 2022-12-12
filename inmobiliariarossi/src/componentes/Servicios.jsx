import React from 'react';

import Head from "../componentes/head/Head"
import Footer from "../componentes/footer/Footer"

function Servicios() {
  return (
    <div >
     <Head />
      <h3 className='secSubtitle' id='servicios'>Servicios</h3>
    <h2 className='secTitle'>¿Qué ofrecemos?</h2>
    <p className='description'>Nuestras soluciones están acorde a lo que necesitas junto con la asesoría personalizada.</p>
    <Footer />
    </div>
  )
}

export default Servicios;