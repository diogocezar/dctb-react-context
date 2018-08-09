import React, { Component, Fragment } from 'react';

import MyContext from '../../context'

class Person extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <Fragment>
                        <p>Name: {context.state.name}</p>
                        <p>Age: {context.state.age}</p>
                        <button onClick={context.growAYearOlder}>+Age</button>
                    </Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Person;