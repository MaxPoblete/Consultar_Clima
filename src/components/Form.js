import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from '../components/Error';

  //--------Styles Componen------////

  const ContenedorForm = styled.form`

    margin: 1rem;
    padding:1rem;
    background-color:#7575a3;
    color:white;
    border-radius:5px;


    .input{
        width:100%;
        border-radius:5px;
        font-size:24px;
    }
    .label{
        width:100%;
        border-radius:5px;
        font-size:24px;  
    }

  `;
  const Boton = styled.button`

        width:100%;
        border-radius:5px;
        font-size:24px;  

  `;

const TutiloForm = styled.h3`
    color:#00bfff;
    text-align:center;
`;


const Form = ({busqueda, guardarBusqueda, guardarConsulta}) => {

    const {ciudad, pais} = busqueda;

    const handleChange = e => {

        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const[error, mostrarError] = useState(false);

    const SubmitForm = (e) => {

        e.preventDefault();

        if(ciudad.trim() === "" ){
            mostrarError(true);
            return;
        }else{
            console.log(pais);
            if(pais === ""){
                mostrarError(true);
                return;
            }else{
                mostrarError(false);
                guardarConsulta(true);
            }
        }

        console.log(pais);

    }

    return(

        <Fragment>
            <ContenedorForm
            onSubmit={SubmitForm}

            >
                 <TutiloForm>Ingrese Datos Para Pronostico</TutiloForm><br/>
                <label className='label'>Ciudad</label>
                <input 
                    type='text'
                    name='ciudad'
                    maxLength={30}
                    value={ciudad}
                    onChange={handleChange}
                    className='input'
                />
                <br/>
                <label className='label'>Pais</label>
                <select
                    name='pais'
                    value={pais}
                    id='pais'
                    onChange={handleChange}
                    className='input'
                >
                    <option value="0">--Selecciona--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                    <option value="CL">Chile</option>

                </select>
                <br/><br/>
                <Boton type='submit'> Buscar</Boton>
            </ContenedorForm>
            {error? <Error mensaje='todos los campos son requeridos'/> : null}
        </Fragment>

    );

}

export default Form;