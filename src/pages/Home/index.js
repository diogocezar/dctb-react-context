import React, { Component, Fragment } from 'react'

import MyProvider from '../../provider'
import Family from '../../components/Family'

class Home extends Component {
    render() {
        return (
            <MyProvider>
                <Fragment>
                    <h1>Testing Context API!</h1>
                    <Family />
                </Fragment>
            </MyProvider>
        );
    }
}

export default Home