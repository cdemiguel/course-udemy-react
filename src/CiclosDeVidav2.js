import React, { Component } from 'react';
import PropTypes from 'prop-types'

// definimos una constante que es un objeto,
// haremos aparecer un animal por props, usaremos proptypes
const ANIMAL_NAMES = {
    cat:"persa",
    dolphin:"ballena",
    bear:"panda"
}

class Animal extends Component {
    state = {animal: ANIMAL_NAMES[this.props.animal]}

    // usamos este metodo para recibir las props y setearlas en el estado para hacer el refresco render
    // explicado en el render
    componentWillReceiveProps (nextProps) {
        console.log(nextProps) // el resultado es el objeto animal:"animalClickado", depende el boton clicado
        //para evitar el setState este if es prop que tenemos actualmente contra la que nos va a llegar
        // pero volvera a renderizar sea cual sea la prop como si es repetida

        // !!UTILIDAD IMPORTANTE DEL METODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // con servicio externo: !!!!!IMPORTANTE!!!!! llamada a api: peticion a servicio externo al recibir nuevas props !!!!!!

        if(this.props.animal !== nextProps.animal) {
            this.setState({animal:ANIMAL_NAMES[nextProps.animal]}) //.animal porque nos interesa el resultado del objeto animal:---resultado
        }
    }

    render() {
        console.log("---> render")
        return (
            <div>
                {/* si fuesen props si que cambiarian pero como es un 
                estado lo que hacemos cambiar no modifica ya que el estado no se 
                actualiza cada vez que te viene una nueva prop para ello usamos el metodo componentWillRecieveProps
                que cuando llegan props y afectan al estado -- actualiza el stado y luego render*/}
                <p>{this.state.animal}</p>
            </div>
        )
    }
} 
// definimos las proptypes para decir que animal serám uno de esos 3 tipos y asegurarnos
Animal.propTypes = {
    animal: PropTypes.oneOf(["cat" , "dolphin" , "bear"])
}
// añadimos un default para ya que en el primer render mueste almenos un tipo de animal y n deje de funcionar el component
// como vemos las proptypes se enlazan con el componente a travez del nombre del componente .  "propTypes o defaultProps"
// así le etamos pasando por props a ese componente información
Animal.defaultProps = {
    animal : "cat"
}


class CiclosDeVidav2 extends Component {
    // para dinamizar el cambio de tipo de animal haremos que este componente tenga un state
    // donde iremos seteando el animal que queremos mostras
    state = {animal:"bear"}

    render() {
        return (
            <div>
                <Animal 
                    // para pasarle unas props a saco sin y prescindir del default props podemos hacer
                    // animal = {"bear"}
                    animal = {this.state.animal}
                />
                {/*  ahora hacemos unos botones donde cambiaremos el estado por animales 
                que hara que se pase al componente hijo por props */}
                <button onClick= {()=> this.setState({animal:"cat"})}>tipo gato</button>
                <button onClick= {()=> this.setState({animal:"dolphin"})}>tipo delphin</button>
                <button onClick= {()=> this.setState({animal:"bear"})}>tipo de oso</button>

            </div>
        )
    }
}

export default CiclosDeVidav2;