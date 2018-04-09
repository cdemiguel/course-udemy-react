import React, { Component } from 'react';


class PrototypeInsertedInChildrenYPrototypes extends Component {
    render() {
        return (
        // hará de template y pasara la props para poder poner la variable/texto... depende de cuando se le llame
        // esto sirve para crear PEQUEÑOS templates layout de nuestras aplicaciones
        <div style={{border:'1px solid blue', padding:5, margin:5}}>
            {/* es importante llamar a this.props.children para que reconozca el contenido que se insertara en PrototypeInsertedInChildrenYPrototypes   */}
            {this.props.children}
        </div>
    )}
}

class ChildrenYPrototypes extends Component {
    render() {
        return (
        <div>
            <h2>Children y Prototypes </h2>
            {/* esto llama al contenedor prototypeinser.... y le enchufa en las props el hello y en el segundo aloja 
            esta reutilizando una template + código. Es necesario sentenciar en el que hace de base
            el this.props.children*/}
            <PrototypeInsertedInChildrenYPrototypes>Hello</PrototypeInsertedInChildrenYPrototypes>
            <PrototypeInsertedInChildrenYPrototypes>Aloha</PrototypeInsertedInChildrenYPrototypes>
        </div>
        )}
}

export default ChildrenYPrototypes;