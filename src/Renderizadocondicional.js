import React, { Component } from 'react';


//5.1 hemos creado un componente padre donde llamamos a dos hijos que vamos a renderizar en base
// a una condición 
class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estadoParaElCondicional: true
        }

    }


    render() {

        // 5.1 creamos la funcion basica de renderizado condicional, no olvidar de los returns
        // que mostraran componente según la condicion del if, como no se evlua es true
        function usarCondiciondelRenderizado(valorCondicionalqueeselthisstateestadocondicional) {
            if (valorCondicionalqueeselthisstateestadocondicional) {
                return <ComponenteA />
            } else {
                return <ComponenteB />
            }
        }

        // 5.2 condicional ternario
        const mostradoComponenteBternario = !this.state.estadoParaElCondicional 
        ? <ComponenteA />
        : <ComponenteB />

        return (
            <div>
                <p>-----SE VIENE EL RENDERIZADO CONDICIONAL-----</p>

                {/* 5.1 primera forma de hacer el renderizado condicional */}
                {usarCondiciondelRenderizado(this.state.estadoParaElCondicional)}

                {/* lo pepino y viene en el 5.2 que podemos hacer el condicional en ternasrio para
                hacerlo más simplificado */}
                {mostradoComponenteBternario}

                {/* 5.3 mas pro aún podriamos hacer el condicional dentro del render
                en base a un estado hacemos el condicional en el render ahi a lo pro */}
                {
                    this.state.estadoParaElCondicional ? <ComponenteA />  : <ComponenteB />
                }


            </div>
        )
    }

}

// componente A
class ComponenteA extends Component {
    render() {
        return (
            <div>
                <p>este es el componente A</p>
            </div>
        )
    }

}

// componente B
class ComponenteB extends Component {
    render() {
        return (
            <div>
                <p>este es el componente B</p>
            </div>
        )
    }

}

export default RenderizadoCondicional;