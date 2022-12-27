import React from 'react'

function Empleado(props) {
    return (
        <div className='card' style={{width: 200}}>
            <img 
                src={require(`../image/${props.imagen}.png`)} 
                className="card-img-top" 
                alt="Imágenes de empleados"
            />
            <div className="card-body">
                <h1 className="card-title text-center">{props.nombre}</h1>
                <h2 className="card-text text-center">{props.cargo}</h2> 
            </div>
        </div> 
    );
}

export default Empleado;