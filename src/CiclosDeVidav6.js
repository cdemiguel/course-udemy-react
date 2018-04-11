import React, { Component } from 'react';

class BotonQueLanzaError extends Component {
    state = {throwError:false}

    render() {
        if(this.state.throwError) {
            throw new Error("error lanzado por botón")
        }
        return (
            <div>
                <button onClick={()=>this.setState({throwError:true})}>botón que lanza error</button>
            </div>
        )
    }
}

class CiclosDeVidav6 extends Component {
    state = { hasError:false, errorMsg:""}
    //para solucionar que no pete la aplicacion y ea pantallazo en blanco
    // es IMPORTANTE controlar el error en el padre
    componentDidCatch (error, errorInfo) {
        console.log("componentDidCatch")
        console.log({error, errorInfo})
        // si entra aqui es que ha habido un error, entonces hacemos un setState a true del hasError
        this.setState({hasError:true, errorMsg:error.toString()})
    }
    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <p>
                        Ha dejado de funcionar el componente: {this.state.errorMsg}
                    </p>
                    {/* añadiremos un botón para que pueda recuperar la funcionalidad de la página,
                     "para volver atrás" */}
                     <button onClick={()=>{this.setState({hasError:false})}}>volver a la aplicacion</button>
                </div>
            )
        }
        return (
            <div>
                <p>ciclo de vida de componentDidCatch</p>
                <BotonQueLanzaError/>
            </div>
        )
    }
}

export default CiclosDeVidav6