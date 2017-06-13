import React, { Component } from 'react'
import { render } from 'react-dom'
import request from 'superagent';
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import GifModal from './components/GifModal';
import './styles/app.css'

class App extends Component {

    constructor(props) {
      super(props)

       this.state = {
            gifs: [],
            selectedGif: null,
            modalOpen: false
        }
    }

    openModal = (gif) => {
        this.setState({
            modalOpen: true,
            selectedGif: gif
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false,
            selectedGif: null
        })
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList
                    gifs={this.state.gifs}
                    onGifSelect={this.openModal}
                />
                <GifModal
                    modalOpen={this.state.modalOpen}
                    selectedGif={this.state.selectedGif}
                    onRequestClose={this.closeModal}
                />
            </div>
        )
    }

    handleTermChange = (term) => {
        term = term.replace(/\s/g, '+') //url friendly
        const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;

        request.get(url, (err, res) => {
            this.setState({
                gifs: res.body.data
            })
        });
    }

}

render(<App />, document.getElementById('app'))