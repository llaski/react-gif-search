import React, { Component } from 'react'
import SearchBar from './SearchBar'
import GifList from './GifList'

class App extends Component {

    constructor() {
        super()

        this.state = {
            gifs: []
        }
    }

    render() {
        return (
            <div>
                <SearchBar />
                <GifList />
            </div>
        )
    }

}

export default App