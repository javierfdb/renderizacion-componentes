import { useState, useEffect } from 'react'
import Form from './components/Inputs'
import Lista from './components/Lista'
import Buscador from './components/Buscador'
import {BaseColaboradores} from './api/db.js'
// import useId from "react-id-generator";

const App = () => {

 const [slaves, setSlaves] = useState(JSON.parse(localStorage.getItem('esclavo')) || BaseColaboradores);
//  const [slaves, setSlaves] = useState(BaseColaboradores);
 const [newslave, setNewslave] = useState("");
 const [emailslave, setEmailslave] = useState("");
 const [search, setSearch] = useState("");

 useEffect(() => {
  localStorage.setItem('esclavo', JSON.stringify(slaves));
 },[slaves]);


 const handleSubmit = e => {
   e.preventDefault()

   const newBuenoWorker = {
    id: Date.now(),
    nombre: newslave,
    correo: emailslave,
   }

   setSlaves([...slaves, newBuenoWorker])
   setNewslave("");
   setEmailslave("");
   setSearch("");
 }

 const handleEliminar = (id) => {
    const newArraySlaves = slaves.filter((slave) => id !== slave.id)
    setSlaves(newArraySlaves);
 };

  return (
    <div className='container my-5'>
      <div className="row w-50-custom bg-dark text-white rounded">
        <div className="col-lg-6">
          <h4>Buscar trabajador</h4>
        </div>
        <Buscador
        search={search}
        setSearch={setSearch}
        ></Buscador>
      </div>
      <div className="row">
        <div className='col-lg-6 my-3'>
        <form onSubmit={handleSubmit}>
          <Form
          newslave={newslave}
          setNewslave={setNewslave}
          setEmailslave={setEmailslave}
          emailslave={emailslave}
          >
          </Form>
          </form>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Lista
            slaves={slaves}
            search={search}
            handleEliminar={handleEliminar}
            >
            </Lista>
          
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <p><small><i>*Desafío 03 Unidad React - Array de colaboradores se guarda en Local Storage</i></small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

