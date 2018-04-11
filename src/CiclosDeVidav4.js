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

    shouldComponentUpdate (nextProps) {
        console.log("2.shouldComponentUpdate")
        console.log(nextProps)
        console.log(this.props.animal)
        console.log(nextProps.animal)
        return this.props.animal !== nextProps.animal
    }

    // explicación de componentWillUpdate
    // nunca cambiar el estado en este componente se pueden hacer bucles infinitos
    // se utiliza para realizar algunas animaciones ... (que se pueden hacer tb con clases)
    componentDidUpdate (nextProps, nextState) {
        console.log("2.componentWillUpdate" ,nextProps ,nextState)
        // animaciones en el cambio de texto, WEB ANIMATIONS API
        const text = document.getElementById("animalId")
        text.animate([
            {
                filter: "blur(0px)"
            },
            {
                filter: "blur(2px)"
            },
        ],{
            duration:2000,
            easing:"ease"
        })
    }

    render() {
        console.log("---> 1. al montar //// 3.render al actualizar")
        return (
            <div>
                <p id="animalId">{this.state.animal}</p>
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


class CiclosDeVidav4 extends Component {

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

export default CiclosDeVidav4;