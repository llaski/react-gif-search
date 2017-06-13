import React from 'react'
import PropTypes from 'prop-types';
import GifItem from './GifItem'

const GifList = (props) => {

    const gifItems = props.gifs.map((gif, index) => <GifItem key={gif.id} gif={gif} />)

    return (
        <div className="gif-list">
            {gifItems}
        </div>
    )
}

GifList.propTypes = {
    gifs: PropTypes.array.isRequired
}

export default GifList