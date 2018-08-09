import React, { Component } from 'react';

import MyContext from '../context'

class MyProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'Diogo Cezar',
            age  : 32
        }
    }
    render() {
        return (
            <MyContext.Provider value={{
                state : this.state,
                growAYearOlder: () => this.setState({
                    age: this.state.age + 1
                })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;