import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({titulo}) =>{

    return (
        <Fragment>
            <h2 className='text-center' >{titulo}</h2>
        </Fragment>
    );

}

export default Header;


