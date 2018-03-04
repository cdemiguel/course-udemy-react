import React, { Component } from 'react';
import logo from './logo.svg';
import Text from './Juegoconpropsv1';
import Textv2 from './Juegoconpropsv2';
import JuegoConEstadosV1 from './Juegoconestadosv1';
import RenderizadoCondicional from './Renderizadocondicional';
import MapconNumerosenRender from './MapconNumerosenRender';
import JugandoConJsonyProps from './JugandoConJsonyProps';
import Eventos from './Eventos';
import Formularios from './Formularios';
import FormulariosControlados from './Formularios_controlados_recomendado'
import ChildrenYPrototypes from './ChildrenYPrototypes.js'

import './App.css';

// 1. primer componente
// componentes de react son funciones javascript que aceptan parametros (props), y devuelven
// elementos de react, las props son parametros que se les pasa a las funciones de Javascript
// en este ejemplo definimos en la llamada del padre el texto y se la pasamos mediante 
// props al hijo props.text, por eso la funcion necesita que le entren las props

// Esto será un componente tonto
// function Bienvenida (props) {
//   return <h1 className="App-title">{props.text}</h1>
// }

// 1.1 este componente lo podemos definir también como una arrow function 
 
// const Bienvenida = (props) => <h1 className="App-title">{props.text}</h1>

// 1.2 también se pueden definir utilizando clases
// con clases necesitaremos llamar a las props con el parametro this,
// la funcion render no tiene parametros en este caso.

class Bienvenida extends Component {
  render() { 
    return(
      <h1 className="App-title">{this.props.text}</h1>
    )
  }
}

  //3.3 podemos meterle props por defecto
  Textv2.defaultProps =  { 
    textpordefecto:"que pasa tio? esto es prop por defecto"
  }


class App extends Component {

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Bienvenida text={"hello people WELCOME"} />
          
          {/* Juegoconpropsv1 */}
          <Text 
            objectWithItems = {
              {
                valor:"primer valor",
                nombre:"Juan"

              }
            }
            arrayofnumbers = {[2,3,4,5]}
            number={2} 
            text={"Es el texto del body"} 
            booleano={true} 
          />

          {/* Juegoconpropsv2 */}
          <Textv2 
            multiplicarPor5funcion= {(number) => number*5}
            arrayofnumbers = {[2,3,4,5]}
            /* 3.2 pasamos elemento propio de react como prop */
            text = {<h1>Hola que hase estoy pasando un elemento propio como h1</h1>} 
          />
          
          {/* Juegoconestadosv1 */}
          <JuegoConEstadosV1 contadorInicial={20} />

          {/* RenderizadoCondicional */}
          <RenderizadoCondicional />

          {/* hacemos un map con numeros en el render, propiedad key / index  */}
          <MapconNumerosenRender />

          {/* JugandoConJsonyProps, en este ejemplo recogemos info de un objeto JSON y tb lo pasamos como prop */}
          <JugandoConJsonyProps />

          {/* EventosYFormularios, en este ejemplo jugamos con diferentes tipos de evento click submit... mas formularios */}
          <Eventos />
          <Formularios />
          
          {/* formularios donde el valor de los input..... se setean en el estado y se modifican */}
          <FormulariosControlados />

          {/* es prop especial cuyo valor es el contenido que se encuentra entre las etiquetas de apertura y cierre dentro de nuestros componentes
          se utilizan para hacer layouts reutilizables */}
          {/* // esto sirve para crear PEQUEÑOS templates layout de nuestras aplicaciones */}
          <ChildrenYPrototypes />

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}






export default App;
