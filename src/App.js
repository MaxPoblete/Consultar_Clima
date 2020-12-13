import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Clima from './components/Clima';
import Error from './components/Error';
import styled from '@emotion/styled';

const DivBody = styled.div`

  background-color:black;
  color:white;
  height:40rem;
  width:100%auto;
  font-family: 'Bebas Neue', cursive;
  font-size:25px;
`;

function App() {

  const[busqueda, guardarBusqueda]= useState({
    ciudad:'',
    pais:''
  });

  const {ciudad, pais} = busqueda;

  const [consultar, guardarConsulta] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  useEffect(()=>{

    const consultarApi = async () => {

      if(consultar){

        const appId = 'ccaba578d83dc6af56f9d389cbba659a';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsulta(false)

        //detecta si hubo resultados correctos en la comsulta
        if(resultado.cod === "404"){
          guardarError(true);

        }else{
          guardarError(false);
     
        }
      }


    }
    consultarApi();

  },[consultar]);


  let componente;

  if(error){
  
    componente = <Error mensaje='No Hay Resultados'/>
  }else{
    componente =  <Clima resultado={resultado}/>
  }

  return (

    <Fragment>
      <DivBody className='container-fluid'>
          <Header titulo = 'Informacion Metereologica' />
          <div className='row'>
              <div className='col-xs-12 col-lg-6'>
                  <Form 
                   busqueda={busqueda}
                   guardarBusqueda={guardarBusqueda}
                   guardarConsulta={guardarConsulta}
                  />
              </div>
              <div className='col-xs-12 col-lg-6'>
                {componente}
              </div>
          </div>
      </DivBody>
    </Fragment>
  );

}

export default App;
