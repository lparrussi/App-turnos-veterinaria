import React from 'react'


const Cita = ({cita, handleSubmit}) => (
    <div className= "cita">
        <p>Cliente: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button 
        className="button eliminar u-full-width"
        onClick={() => handleSubmit(cita.id)}
        >Cancelar turno</button>
    </div>
)

export default Cita;