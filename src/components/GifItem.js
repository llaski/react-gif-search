import React from 'react'
import PropTypes from 'prop-types';

const GifItem = ({gif}) => {

    return (
        <div className="gif-item">
            <img src={gif.images.downsized.url} alt="" />
        </div>
    )

}

GifItem.propTypes = {
    gif: PropTypes.shape({
        id: PropTypes.string.isRequired,
        images: PropTypes.shape({
            downsized: PropTypes.shape({
                url: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
}

export default GifItem