import React, { Component } from 'react'

class ApiFetch extends Component {
    constructor() {
        super()
        this.state = {
            bpi : {}
        }
    }

    // perfecto para recuperar datos el componentDidMount (llamadas a API)
    componentDidMount() {
        // método fetch que nos ayuda a recuperar data, devuelve una promesa
        // especificamos su endpoint, nos devuelve metodos y parseamos a json! que es como queremos el data
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        // parseamos los métodos a Json, para extraer data (promesa)
        .then(res => res.json())
        .then(data => {
            const bpi = data.bpi
            this.setState({ bpi })
        })
    }

    // vamos a hace run metodo que mostrara la información en el state del bpi

    _renderCurrencies = () => {
        const { bpi } = this.state 
        // IMPORTANTE: para recorrer las keys de un objeto podemos utilizar el método
        // Object.keys que devuelve un array del objeto con las keys asociadas a bpis
            return Object.keys(bpi) 
                .map(currency => (
                        <div key={currency}>
                        1BTC is {bpi[currency].rate}
                            <span>{currency}</span>
                        </div>
                    )
                )
    }

    render() {
        return (
        // Api Fetch
        <div>
            {this._renderCurrencies()}
        </div>
    )}
}

export default ApiFetch