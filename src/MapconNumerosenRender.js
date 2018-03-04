import React, { Component } from 'react';

// 6.1 MapconNumerosenRender vamos a hacer un map para replicar el item tantas veces como queramos,
// en este ejemplo definimos una array que mapearemos para pponerle el literal de yo soy el numero
// y ademas multiplicaremos por dos casda numero
class MapconNumerosenRender extends Component {
    render() {
        const arrayDeNumerosEnRender = [1,1,2,3,4]
        return (
            <div>
                {arrayDeNumerosEnRender.map((number, index) => {
                    // a tener en cuenta ¡utilizar el index como propiedad key
                    // react se quejsa con warning cuando lso elementos mapeados no tienen key
                    // para saber distinguir sus diferencias
                    // podriamos utilizar la misma number como key pero el 1 no notaría diferencisas y no lo imprimiria
                    // por eso utulizadmo el index que nos ofrece la high order function map
                    // como key se pueden utilizasr otros elementos comok ids que nos vengan¡ de json ....etc
                    return <p key={index}>yo soy el numero 
                        {number * 2}
                    </p>
                })}
            </div>
        )
    }

}


export default MapconNumerosenRender;