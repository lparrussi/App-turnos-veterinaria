import React from 'react'


const Cita = ({cita, handleSubmit}) => (
    <div className= "cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>fecha: <span>{cita.fecha}</span></p>
        <p>hora: <span>{cita.hora}</span></p>
        <p>sintomas: <span>{cita.sintomas}</span></p>

        <button 
        className="button eliminar u-full-width"
        onClick={() => handleSubmit(cita.id)}
        >Eliminar</button>
    </div>
)

export default Cita;