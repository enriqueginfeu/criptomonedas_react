import React from 'react'
import styled from '@emotion/styled'

const MensajeError = styled.div`
    background-color: red;
    color: #fff;
    padding: 12px;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: center;
    box-shadow: -3px 1px 36px 12px #e02b2b60;
    -webkit-box-shadow: -3px 1px 36px 12px #d82b2b60;
    -moz-box-shadow: -3px 1px 36px 12px #e2171760;
`

const Error = ({children}) => {
    return (
        <MensajeError>
                {children}
        </MensajeError>
    )
}

export default Error