import React, { Component } from 'react';

//react ofrece eventos para controlar
// en la documentacion encontramos los diferentes eventos https://reactjs.org/docs/events.html

class Eventos extends Component {
    constructor() {
        super()
        this.state = {
            mouseX:0,
            mouseY:0,
            mouseXX:0,
            mouseYY:0
        }
    }

    alert = (e) => {
        console.log(e)
        alert('que pasa hermano')
    }

    showPosition (e) {
        // const { clientX, clientY } = e
        const clientX = e.clientX
        const clientY = e.clientY
        this.setState({mouseX:clientX,mouseY:clientY})
    }

    showPositionArrow = (e)=> {
        const { clientX, clientY } = e
        this.setState({mouseXX:clientX,mouseYY:clientY})
    }
    

    render(){
        return(
            <div>
                <h4>Eventos y formularios</h4>
                <button onClick={this.alert}>esto es un boton</button>

                <div 
                /* ejemplo 1 bindeando la funcion al scope  con bind */
                onMouseMove = {this.showPosition.bind(this)}
                style={{border:'1px solid #fff',marginTop:10, padding:10}}>
                <p>{this.state.mouseX},{this.state.mouseY}</p>
                </div>
                
                {/* ejemplo 2 bindeamos a una arrow function al scope de la funcion */}
                <div 
                /* ejemplo 2 bindeando con una arrow function ejemplo 2 */
                onMouseMove = {this.showPositionArrow}
                style={{border:'1px solid red',marginTop:10, padding:10}}>
                <p>{this.state.mouseXX},{this.state.mouseYY}</p>
                </div>
                
                

            </div>
        )
    }
}

export default Eventos;