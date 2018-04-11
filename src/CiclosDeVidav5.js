import React, { Component } from 'react';

class ComponenteADesmontar extends Component {
    state = { windowWidth: 0 }

    _updateStateWithWindowWidth = () => {
        this.setState({windowWidth : document.body.clientWidth})
    }

    componentDidMount() {
        this._updateStateWithWindowWidth()
        // cada vez que hay un resize se actualizara el estado! de ahí 
        // la actualización del estado en cuanto se modifica el tamaño de la pantalla
        window.addEventListener(
            "resize",
            this._updateStateWithWindowWidth
        )
    }

    // este ciclo de vida va bien cuando nos suscribimos a elementos del DOM y luego ya no la
    // necesitamos y debemos desuscribirnos manualmente
    componentWillUnmount () {
        console.log("componentWillUnmount")
        // eliminamos la suscripcion al evento resize
        window.removeEventListener(
            "resize",
            this._updateStateWithWindowWidth
        ) 

    }
    
    render() {
        return (
            <div>
                <p>componente a desmopntar</p>
                <p>ancho de pantalla: {this.state.windowWidth}</p>
            </div>
        )
    }
}

class CiclosDeVidav5 extends Component {

    render() {
        return (
            <div>
                <ComponenteADesmontar />
            </div>
        )
    }
}

export default CiclosDeVidav5