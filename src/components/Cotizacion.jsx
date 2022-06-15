import styled from "@emotion/styled"

const CotizacionCripto = styled.div`
    color: #fff;
    font-family: 'Montserrat', sans-serif;

`

const Precio = styled.p`
    font-size: 30px;
    font-weight: 500;
    span {
        font-weight: 600;
    }
`

const Texto = styled.p`
    font-size: 20px;
    font-weight: 500;
`


const Cotizacion = ({ cotizacion }) => {
    
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion

    return (
        <CotizacionCripto>
            <Precio>Precio: <span>{PRICE}</span></Precio>
            <Texto>Precio Mas Alto Del Dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio Mas Bajo Del Dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion Ultimas 24 Horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
        </CotizacionCripto>
    )
}

export default Cotizacion