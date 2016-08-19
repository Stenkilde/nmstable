import React, { Component } from 'react';
import {
  GatewayDest,
  GatewayProvider
} from 'react-gateway';
import { collection } from '../services/elements';
import ElementCard from './components/card';
import Help from './components/help';
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
        <GatewayProvider>
            <div className="wrapper">
                <Help />
                <div className="card__container">
                    {table.map((element, index) => {
                        return (
                            <ElementCard element={element} key={index} />
                        );
                    })}
                    <GatewayDest name="global"/>
                </div>
            </div>
        </GatewayProvider>
    );
  }
}

export default App;
