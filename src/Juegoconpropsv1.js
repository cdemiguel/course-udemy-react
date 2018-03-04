import React, { Component } from 'react';


//2. Vamos a parametrizar nuestros componentes, mas juego con props
// antes de todo como en el ejemplo uno en el main le pasamos un texto,
// 2.1 ahora vamos a pasar a este componente un número
// 2.2 tambien le podemos pasar un Booleano true/false pero no lo vamos a ver en pantalla 
// a no ser que este booleano lo pasemos a string con el metodo jsonStringify (asi no tiene mucho sentido)

// 2.3 usar booleanos como props es muy util para cambiar el comportamiento de nuestros componentes
// cuando indicamos el uso de una prop pero no le pasamos valor booleano será por defecto true (en padre)

// 2.4 añadimos la prop arrayofnumber, por defecto ya hace un join pero le indicaremos por coma y espacio
// antes de mostrar podemos transformar y mutar los elementos del array por ejemplo multiplicando cada 
// num del array por dos

// 2.5 a parte de arrays le podemos pasasr objetos
// pasar el objeto como props es muy util ya que recuperamos muchas veces informacion de apis
// que ya vienen con una estructura de datos que encajan con componentes (json)

// 2.7 TRICK QUE TE CAGAS, utilizamos la desestructuracion de JS6 para no estar escribiendo
// siempre this.props. (esto queda de pro)

class Text extends Component {
    render() { 

        // 2.7 solo hago el ejemplo con uno para también ver como se han pasado las props en
        // casos anteriores,
        const {arrayofnumbers} = this.props

        // 2.3
        const MostramosTextoSegunBooleano = this.props.booleano ? "QUE PASA TIO ES TRUE" : "ES FALSE"

        // 2.4
        const MultiplicamosCadaNumx2 = this.props.arrayofnumbers.map(n => n*2)

      return(
        <div>
        <h1 className="App-title">{this.props.text}</h1>
        {/* 2.1 */}
        <p>{this.props.number}</p>
        {/* 2.2 */}
        <p>{JSON.stringify(this.props.booleano)}</p>
        {/* 2.3  así vemos también que podemos renderizar variables en nuestros componentes
        no siempre han de ser props */}
        <p>{MostramosTextoSegunBooleano}</p>
        {/* 2.4 con desestructuracion hecha en el inicio para no usar en el hijo this.props */}
        <p>{arrayofnumbers.join(", ")}</p>
        {/* 2.4 map, tratando los elementos antes de ser renderizados */}
        <p>{MultiplicamosCadaNumx2.join(", ")}</p>
        {/* 2.5 le pasamos el objeto y accedemos al primer valor del objeto */}
        <p>{this.props.objectWithItems.valor}</p>
        </div>
      )
    }
  }

export default Text;