import React, { Component } from 'react';
import { collection } from '../services/elements';
import map from 'lodash/map';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            table: {}
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

    console.log(table);

    return (
        <div>
            {table.map((element, index) => {
                return (
                    <h1 key={index}>{element.name}</h1>
                );
            })}
        </div>
    );
  }
}

export default App;
