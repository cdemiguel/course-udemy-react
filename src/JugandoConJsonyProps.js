import React, { Component } from 'react';
import squads from './json/info.json';

// 7.1 en este ejemplo hemos importado un Json de información donde le daremos un nombre
// a la importacion "squads" y podremos acceder mediante este nombre que se lo damos en la
// importacion a las diferentes propiedades del json importado ejemplo: {squads.squadName} 
class JugandoConJsonyProps extends Component {
    render() {
        return (

            <div>
            <p>recorremos lista de objetos con un JSON</p>
               {
                squads.map((squad, index) => {
                    return <p key={index}>{squad.squadName}</p>
                })
               }
               
               {/* 7.2 en este caso hemos extraido el codigo de dentro del map del padre */}
               {
                squads.map((squad, index) => {
                    return <ExtracciondeListItemAOtroComponenteReact squad={squad} key={index} />
                })
               }
            
            </div>
        )
    }

}

// 7.2 extraemos un list item a otro componente de react
class ExtracciondeListItemAOtroComponenteReact extends Component {
    render() {

        // destructuring
        const {squad} = this.props

        return (
            <div>
                {/*7.2 en este ejemplo no soy cool y no utilizo destructuring */}
                {/* <li>{this.props.squad.secretBase}</li> */}

                {/*7.2 en este ejemplo que aplico utilizo destructurin para no poner this.props. */}
                <li>{squad.secretBase}</li>

            </div>
        )
    }

}



export default JugandoConJsonyProps;