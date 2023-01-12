import React, { Component } from 'react';

const Input = ({newslave, setNewslave, emailslave, setEmailslave }) => {
    return (
        <>
            <input required onChange={e => setNewslave(e.target.value)} value={newslave} type="text" className="form-control mb-4" placeholder="Ingresar nombre"/>
            <input required onChange={e => setEmailslave(e.target.value)} value={emailslave} type="email" className="form-control" placeholder="Ingresar email"/>
            <button type='submit' className='btn btn-primary'>Agregar</button>
        </>
    );
}

export default Input;