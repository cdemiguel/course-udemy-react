import React, { Component } from 'react';

//3.1 podemos pasarle al componente funciones,
//en este caso la funcion que le pasamos multiplicara los numeros del array también pasadops al
// componente x 5
// ademas soy tan cool que voy a utilizar en este componente la desestructuracion para 
// no repetir this.props


//3.2 los elementos propios de react se los podemos pasar como props, vamos a crear una prop
// llamada title y vamos a pasarle un h1, uso la desestructuracion en la constante

//3.3 podemos meterle props por defecto, ver el padre
// esta claro que si definimos manualmente una prop, con el mismo nombre será mas restrictiva
// y se aplicara antes que default props

class Textv2 extends Component {

    render() { 

      const {
        arrayofnumbers,
        multiplicarPor5funcion,
        text,
      } = this.props

      const Numerosmultiplicadosx5 = arrayofnumbers.map(multiplicarPor5funcion)

      return(
        <div>
          <p>-------- JUEGO CON PROPS V2 ---------</p>

          <p>{Numerosmultiplicadosx5.join(', ')}</p>

          {text}

          {/* en el padre fuera de todo estamos añadiendo una prop por defecto que pueden tener todos sus hijos
          aquí en el hijo indicaremos como queremos que se muestre dicha prop por defecto */}
          <p>{this.props.textpordefecto}</p>


        </div>
      )
    }
  }




export default Textv2;
