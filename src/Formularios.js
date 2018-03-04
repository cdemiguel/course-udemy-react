import React, { Component } from 'react';

class Formularios extends Component {
    constructor() {
        super()
        this.state = {
            boolean:true,
        }
    }

    handleClick = (e) =>{
        e.preventDefault()
        const name = document.getElementById("nombre").value
        console.log(name)
        // si quiero que el name me lo envie en un objeto podemos hacer
        console.log({name})
    }

    handleChange = (e) => {
        this.setState({boolean: !this.state.boolean})
    }

    render(){

        return(
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleClick}>
                    <p>
                        {/* para activar el input a traves del for etiqueta de html necesitaremos
                        el parametro htmlFor, no podemos usar for ya que for es una palabra
                        reservada de javacript */}
                        <label>nombre</label>
                        <input 
                            id="nombre"
                            name="username"
                            placeholder="introduce tu nombre"
                        />
                    </p>
                    <p>
                        <label>este checkbox</label>
                        <input onChange={this.handleChange} state ={this.state.boolean.toString()} type="checkbox"/>
                    </p>
                    <button >Enviar</button>
                </form>
            </div>
        )
    }
}
export default Formularios;