import React, {
    Component
} from 'react'

class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Enter text to search for gifs!" onChange={this.handleOnChange} />
            </div>
        )
    }

    handleOnChange = (evt) => {
        const term = evt.target.value

        this.setState({
            term
        })

        this.props.onTermChange(term)
    }
}

export default SearchBar