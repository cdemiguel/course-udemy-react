import React, { Component } from 'react';

class FormulariosControlados extends Component {
    constructor() {
        super()
        this.state = {
            nombre:"",
            twitter:"@",
            boolean:true
        }
    }

    handleClick = (e) =>{
        e.preventDefault()
        const name = document.getElementById("nombre").value
        console.log(name)
        // si quiero que el name me lo envie en un objeto podemos hacer
        console.log({name})
    }

    handleChangeUser = (e) =>{
        this.setState({nombre:e.target.value})
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
                            onChange={this.handleChangeUser}
                            id="nombre"
                            name="username"
                            placeholder="introduce tu nombre"
                            value={this.state.nombre}
                        />
                        <label>twitter</label>
                        <input 

                            /*la funcion change tb la podemos hacer en el elemento*/
                            onChange={(e)=>this.setState({twitter:e.target.value})}

                            id="twitter"
                            name="twitter"
                            placeholder="introduce tu twitter"
                            value={this.state.twitter}
                        />
                    </p>
                    <p>
                        <label>este checkbox</label>

                        <input onChange={this.handleChange} 
                        
                        state ={this.state.boolean.toString()} 
                        checked={this.state.boolean}
                        type="checkbox"/>
                    </p>
                    <button >Enviar</button>
                </form>
            </div>
        )
    }
}
export default FormulariosControlados;