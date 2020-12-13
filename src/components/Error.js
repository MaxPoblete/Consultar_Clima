import React from 'react';
import styled from '@emotion/styled';

const ErrorShow = styled.h5`
        width:100%;
        border-radius:5px;
        font-size:24px; 
        color:red; 
        text-align:center;
`;

const Error = ({mensaje}) =>{
    
    return(

    <ErrorShow>{mensaje}</ErrorShow> 
    );
}

export default Error;