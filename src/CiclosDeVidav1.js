import React, { Component } from 'react';

class CiclosDeVidav1 extends Component {
    constructor(props) {
        console.log("ejecución constructor")
        super(props)
        this.state = {
            mensajeInicial : "Hola que tal!!?",
            scroll : 0
        }
        //EL METODO CONSTRUCTOR SIEMPRE SE EJECUTA ANTES DEL RENDERIZADO DE COMPONENTE -- ComponentWillMount también
        // dentro del constructor la forma NOCOOL nos ayuda a bindear en el SCOPE que queremos las funciones
        // Con las arrow function nos ayuda a hacerlo de una forma COOL sin tener que hacer este paso
        this.changeState = this.changeState.bind(this)
    }

    //forma NOCOOL (dejo activa la forma NOCOOL ya que es la que menos uso y se ha de saber)
    changeState() {
        this.setState({mensajeInicial:"muy bien aqui estamos"})
    }

    //forma COOL
    // changeState = () => {
    //     this.setState({mensajeInicial:"muy bien aqui estamos"})
    // }

    // componentWillMount
    // Se ejecuta antes del render por lo tanto cualquier acceso a 
    // elementos de dom, a refs o a propiedad children nos dartá error
    // prepara la configuración componente y el state para su primer renderizado
    // Con console.log en los diferentes elementos v eremos cuando se renderiza
    componentWillMount() {
        console.log("renderizado de componentWillMount")
    }


    // componentDidMount,
    // Cuando se ejecuta ya existe una representacion de nuestros elementos en el nom, 
    // perfecto para realizar llamadas para recuperar datos,
    // suscribirnos a eventos navegador, como el scroll que se realiza (borrar suscripcion en componentWillUnmount)
    componentDidMount() {
        console.log("renderizado de componentDidMount")
        // un ejemplo sobre suscripcion a eventos de navegador
        // mostrar en consola los pixeles que hacemos scrool
        document.addEventListener("scroll", () => {
            console.log(window.scrollY)
            this.setState({scroll: window.scrollY})
        })
        //si cambiasemos un state debemos saber que cada vez que cambiamos un state el componente se renderiza     
    }

    //componentWillUnmount
    //al suscribirse a un evento deberemos eliminar dicha suscripcion en el componentWillUnmount, 
    //evitaremos memory-leak, o que falle la aplicacion por dejar un evento escuchando en un componente ya no montado en nuestra aplicación


    render() {
        console.log("ejecución render")

        //sobre el render tenemos diferentes conceptos
        // el no renderizar nada es posible haciendo un return de null return null, puede valer para componentes como el scroll
        // el renderizado condicional dependiendo de un state mostrar el div si el componente de vuelve true n mostrar si es false condicion ? componente : null
        // fragmentos (array, añadir KEY) podemos devolver con un map una lista de elementos



        return (
            <div>
                <h3>CICLOS DE VIDA DE LOS COMPONENTES</h3>
                <p>{this.state.mensajeInicial}</p>
                <button 
                onClick={this.changeState}
                >Cambia estado</button>
                <p>{this.state.scroll}</p>
            </div>
        )
    }
}

export default CiclosDeVidav1;