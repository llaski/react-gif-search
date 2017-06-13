import React, { Component } from 'react'
import { render } from 'react-dom'
import './styles/app.css'

class App extends Component {

    render() {
        return (
            <div>
                <p>Hello</p>
            </div>
        )
    }

}

render(<App />, document.getElementById('app'))