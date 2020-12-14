import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const ContenedorClima = styled.div`

    width:100%;
    margin:1rem;
    padding:1rem;
    color: #00bfff;

`;


const Clima = ({resultado}) => {

    const {name, main} = resultado; 

    if(!name) return null;
    
    //grados kevil
    const kelvin = 273.15;

    return(
        <Fragment>
        <ContenedorClima>
        <h3 className='text-center'>Resultados</h3><br/>
    <h4>Temperatura En ciudad de <strong>{name}</strong></h4>
            <table className="table table-dark table-striped">
                <thead>
                <tr>
                    <th>T° Actual</th>
                    <th>T° Maxima</th>
                    <th>T° Minima</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{parseFloat(main.temp -kelvin, 10).toFixed(2)}</th>
                        <th>{parseFloat(main.temp_max -kelvin, 10).toFixed(2)}</th>
                        <th>{parseFloat(main.temp_min -kelvin, 10).toFixed(2)}</th>
                    </tr>
                </tbody>
            </table>
        </ContenedorClima>

        </Fragment>
    );

}

export default Clima;