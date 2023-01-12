import React, { Component } from 'react';

const Buscador = ({search, setSearch}) => {
    return (
        <>
        <div className="col-lg-6">
          <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" className='form-control' placeholder='Busca por nombre o correo' />
        </div>
        </>
    );
}

export default Buscador;