import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0;
    
`
const Select = styled.select`
    width: 100%;
    border: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    padding: 5px;
`

const useSelectMonedas = (label, opciones) => {
    
    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState( e.target.value )}
            >
                <option value=''>Seleccionar</option>

                {opciones.map( opcion =>(
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                    {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )
    return [ state, SelectMonedas ]
}

export default useSelectMonedas