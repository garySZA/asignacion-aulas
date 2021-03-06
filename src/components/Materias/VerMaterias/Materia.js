import React, { useState } from 'react'

import './estilos-ver-materias.css'
import { useModal } from '../../../hooks/useModal';
import { ModalGenerico } from '../../Modal/ModalGenerico';
import { FormRegistroMateria } from '../RegistroMateria/FormRegistroMateria';
import { NavLink } from 'react-router-dom';

export const Materia = ({data=[], setListaMateria}) => {

    const [values, setValues] = useState({
        codigoMat:'',
        nombreMat:'',
        id: '', 
    });

    const { codigoMat, nombreMat, id, estado } = values;
    const [ isOpen, openModalEdicion, closeModalEdicion ] = useModal(false);

    const actualizar = (item) => {
        setValues({
            codigoMat: item.codigoMateria,
            nombreMat: item.nombreMateria,
            id: item.id
        });
        openModalEdicion();
    }
    
    const guardarID  = (id) => {
        localStorage.setItem("id", id);
    }

    const editar = (item) => {

    }

    return (
            <>
            <div className='contenedor-tabla'>
                <table>
                    <thead>
                        <tr className='titulo-tabla'>
                            <th>#</th>
                            <th>Codigo SIS</th>
                            <th>Materia</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={item.id}>
                                    <td> { i+1 } </td>
                                    <td> { item.codigoMateria } </td>
                                    <td> { item.nombreMateria } </td>
                                    <td> { item.estadoMateria } </td>
                                    <td className='td-btns'>
                                        <section className='caja-btns'>
                                            <button 
                                                className='btn-editar editar-mat'
                                                onClick={ () => {actualizar(item)} }
                                            >
                                                Editar
                                            </button>
                                            <button 
                                                className='btn-editar editar-mat btn-ver-mat'
                                                onClick={() => (guardarID(item.id))}
                                                >
                                                    <NavLink exact='true' to='/vergrupos' >Detalles</NavLink>
                                            </button>
                                        </section>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                isOpen &&
                <ModalGenerico isOpen={ isOpen } closeModal={closeModalEdicion}>
                    <FormRegistroMateria 
                        codiSis={codigoMat} 
                        materi={nombreMat} 
                        closeModal={closeModalEdicion} 
                        titulo='Editar' 
                        idMat={id}
                        dataOptenida={data}
                        setListaMateria={setListaMateria}
                    />
                </ModalGenerico>
            }
            </>
    )
}
