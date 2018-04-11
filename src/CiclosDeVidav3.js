import React, { Component } from 'react';
import PropTypes from 'prop-types'

const ANIMAL_NAMES = {
    cat:"persa",
    dolphin:"ballena",
    bear:"panda"
}
const ANIMALS = Object.keys(ANIMAL_NAMES)

class Animal extends Component {
    state = {animal: ANIMAL_NAMES[this.props.animal]}


    componentWillReceiveProps (nextProps) {
        console.log("1.componentWillReceiveProps")
        if(this.props.animal !== nextProps.animal) {
            this.setState({animal:ANIMAL_NAMES[nextProps.animal]})
        }
    }

    // hacer mencion a en vez de utilizar react component utilizar pureComponent, devuelve false como norma general
    // hace comparación superficial, solo usar props states simples, siempre que use un should preguntar si podemos usarlo
    shouldComponentUpdate (nextProps) {
        console.log("2.shouldComponentUpdate")
        console.log(nextProps)

        // ahora consoles.log sobre cuando sabremos que devolver true o false, props antiguas vs props nuevas
        // al estar con + codigo debugar !! para ver que llega
        console.log(this.props.animal)
        console.log(nextProps.animal)

        // este componente ha de devolver un booleano
        // si no existe es true por defecto

        // cuando sean las props distintas devolverá true, así evitamos el reRender cuando sea un mismo cambio
        // no veremos el console.log de render
        return this.props.animal !== nextProps.animal
    }

    render() {
        console.log("---> 1. al montar //// 3.render al actualizar")
        return (
            <div>
                <p>{this.state.animal}</p>
            </div>
        )
    }
} 

Animal.propTypes = {
    animal: PropTypes.oneOf(["cat" , "dolphin" , "bear"])
}

Animal.defaultProps = {
    animal : "cat"
}


class CiclosDeVidav3 extends Component {

    state = {animal:"bear"}

    _renderAnimalButton = (animal) => {
        return (
            <button 
            // disabled = {animal === this.state.animal} deshabilitamos esta linea de codigo para que siempre haga render
            // aunque se haga click en el mismo animal
            key={animal} 
            onClick= {()=> this.setState({animal})}>{animal}</button>
        )
    }

    render() {
        return (
            <div>
                <Animal 
                    animal = {this.state.animal}
                />
                {ANIMALS.map(this._renderAnimalButton)} 
            </div>
        )
    }
}

export default CiclosDeVidav3;