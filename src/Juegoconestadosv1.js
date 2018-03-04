import React, { Component } from 'react';


//4.1 imprimimos un estado contador que va a ser estático y va a empezar por el 1,
// hemos añadido el componente en el pasdre <JuegoConEstadosV1 /> y aqui estamos definiendo
// el estado del contador, para imprimir dicho estado utilizamos this.state.contador

//4.2 vamos a hacer que el contadorv2 mute es decir que cambie el estado, para ello utilizaremos
// el setState, estos estados de los componentes no los podemos hacer directamente,
// este contador hara que cada segundo sume 1

class JuegoConEstadosV1 extends Component {

    // 4.3 para el contadorV3 necesitamos pasarle las props al constructos y al super
    // para que contenga el número
    constructor(props) {
        super(props)

        this.state = {
            contador: 1,
            contadorv2:2,
            // 4.3 ahora añadiremos el numero de inicio a traves de una prop extendida
            // para ello al constructor y a la clase le hemos de pasar el parámetro props
            contadorv3: this.props.contadorInicial
        }

        // para mutar el estado de los contadores lo haremos dentro del constructor

        setInterval(() => {this.setState(
            // en la key hacemos referencia al estado, en el this.state.contadorv2 hacemos referencia 
            // al valor y en el + +1 le  aplicamos al valor la suma de 1, todo esto
            // dentro de un interval que hace que cada segundo sume uno.
            {contadorv2: this.state.contadorv2 + 1}
        )}, 1000)
        setInterval(() => {this.setState(
            // en la key hacemos referencia al estado, en el this.state.contadorv2 hacemos referencia 
            // al valor y en el + +1 le  aplicamos al valor la suma de 1, todo esto
            // dentro de un interval que hace que cada segundo sume uno.
            {contadorv3: this.state.contadorv3 + 1}
        )}, 1000)
        }


    render() {

        // 4.2 cada vez que cambia el contador se actualiza el render!
        // console.log("render")

        // const contador = 0
        return (
        <div>
            <span>{this.state.contador}</span>
            <p></p>
            <span>{this.state.contadorv2}</span>
            <p>Ejemplo de pasarle el contador inicial por props</p>
            <span>{this.state.contadorv3}</span>
        </div>

        )
    }
}

export default JuegoConEstadosV1;