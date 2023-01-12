import React, { Component } from 'react';

const Lista = ({slaves, search, handleEliminar}) => {
    return (
        <>
           <ul>
            {slaves.filter(({nombre, correo}) => {
              return search.toLowerCase() === '' ? nombre || correo :nombre.toLowerCase().includes(search) || correo.toLowerCase().includes(search); 
            }).map(({id, nombre, correo}) => {
              return <li key={id}>{nombre} - {correo} <button onClick={() => handleEliminar(id)}><i className="far fa-times-circle"></i></button> </li>
            })}
          </ul>
        </>
    );
}

export default Lista;