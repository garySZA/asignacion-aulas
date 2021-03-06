import React from 'react'
import { useState } from "react";
import './estilosFormularioReserva.css'


export const MateriasDocente = ({ data = [], selects, setSelects  }) => {

  const [values ] = useState({
    nombreMateria: '',
    id: ''

  });


  return (
      <select  
        name='materiaSolicitud'
        className="inputsSolicitud"
        //type='text' 
        placeholder="Elegir Materia.´"
        value={selects} 
        onChange={ e => setSelects(e.target.value)}
      > 
      <option>Seleccionar materia.</option>
      {
       data.map((mat) => (       
          <option key={mat.id} value={mat.nombreMateria}>{ mat.nombreMateria}</option> ))}
      </select>
      
    )
}
