import React, { Component } from 'react';
import { collection } from '../services/elements';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            table: [],
            asd: 123,
            fdsa: 324
        };
    }

    componentDidMount() {
        const me = this;
        return collection().then(function(response) {
            me.setState({
                table: response.collection
            })
        })
    }

  render() {
    const {table} = this.state;

    return (
        <div className="card__container">
            {table.map((element, index) => {
                return (
                    <div key={index} className="card">
                        <h2>{element.name}</h2>
                        <h3>{element.chemical}</h3>
                        <h3>{element.type}</h3>
                        <h3>{element.value}</h3>
                        <div className={'card__background ' + element.type}></div>
                    </div>
                );
            })}
        </div>
    );
  }
}

export default App;
