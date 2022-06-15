import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import ImagenCripto from '../src/img/imagen-criptos.png'




const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #fff;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`



function App() {
  
  const [ monedas, setMonedas] = useState({})
  const [ cotizacion, setCotizacion] = useState({})

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCotizacion(resultado.DISPLAY[criptomoneda][moneda])
      }

      cotizarCripto()
    }
  },[monedas])

  return (
    
  <Contenedor>

    <Imagen 
      src={ImagenCripto}
      alt= 'Imagen Criptomoneda'
    />

    <div>
    <Heading>
      Cotizador de Criptomonedas al Instante
    </Heading>

    <Formulario 
      setMonedas={setMonedas}
    />
    {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion} />}
    
    </div>

  </Contenedor>
    )
}

export default App
