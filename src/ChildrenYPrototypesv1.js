import React, { Component } from 'react';
import PropTypes from 'prop-types'


// introduzcción de ejemplo: Blog donde necesitamos escribir articulos, crearemos el componente artículo
class PrototypeInsertedInChildrenYPrototypes extends Component {
    render() {
        return (
        <div style={{border:'1px solid red', padding:5, margin:5}}>
            {this.props.children}
        </div>
    )}
}

class Article extends Component { 
    //forma COOL de Proptypes
    // el isRequired hace que siempre esa propiedad sea requerida
    static propTypes = {
        author:PropTypes.string.isRequired
    }

    render() {
        // destructuración mejora de codigo
        const {article, author, date, children} = this.props
        return (
            <section>
                <h2>{article}</h2>
                <p>escrito por: {author}</p>
                {/* usamos el componente box para las fechas */}
                <PrototypeInsertedInChildrenYPrototypes>{date}</PrototypeInsertedInChildrenYPrototypes>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}

// las proptyopes que vamos a ver a continuación n os sirven para asegurarnos y cercionarnos
// sobre que tipo de dato le tenemos que pasar al componente
// son un dependencia externa y requiere de instalación npm :
// sirven para que luego un desarrollador no pueda pasarle al componente el tipo de dato a su libre elección
// Añadimos la pripiedad proptipes a la clase article

// Article.PropTypes = {
//     author:PropTypes.string
// }

// el ejemplo de arriba seria la forma NOCOOL, la forma COOL es hacerla en el componenta(la clase)
// justo antes del constructor

class Blog extends Component { 
    render() {
        return (
            <div>
                <Article
                author="miguel"
                date={new Date().toLocaleDateString()}
                title={"articulo sobre la prop children"}>
                {/* explicación en el texto */}
                <p>ESTE ES EL CONTENIDO QUE ENCIAMOS DENTRO DEL COMPONENTE ARTICLE QUE SE RENDERIZARÁ</p>
                <strong>PODEMOS UTILIZAR TODO TIPO DE ETIQUETAS esto se lo pasamos como prop children</strong>
                </Article>
            </div>
        )
    }
}

export default Blog;