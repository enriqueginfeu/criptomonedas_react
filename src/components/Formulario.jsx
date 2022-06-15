import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas' 

const InputSubmit = styled.input`
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #457ad6;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
    padding: 10px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #4d95c8;
        cursor: pointer;
    }
`



const Formulario = ({setMonedas}) => {

    const [ criptos, setCriptos] = useState([])
    const [ error, setError] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige Una Moneda', monedas)
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige Una Criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
            

            const arrayCriptos = resultado.Data.map( cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

            setCriptos(arrayCriptos)
        }
        consultarAPI();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if([moneda, criptomoneda].includes('')) {
            setError(true)

            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
    <>
        {error && <Error>{'Se Requieren Ambos Campos'}</Error>}
        <form
            onSubmit={handleSubmit}
        >

            <SelectMonedas />
            <SelectCriptomoneda />

            <InputSubmit 
                type='submit' 
                value='Cotizar' 
            />

        </form>
    </>
    )
}

export default Formulario