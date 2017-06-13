import GifItem from '../../src/components/GifItem'

describe('Components - GifItem', () => {

    it('should render an image tag with the downsized url', () => {
        const gif = {
            id: '1',
            images: {
                downsized: {
                    url: 'https://media2.giphy.com/media/Zn7rsVqBTPAly/giphy-downsized.gif'
                }
            }
        }

        const wrapper = shallow(<GifItem gif={gif}/>)

        assert.equal(1, wrapper.find('img').length)
        assert.equal('https://media2.giphy.com/media/Zn7rsVqBTPAly/giphy-downsized.gif', wrapper.find('img').props().src)
    })

    it('should ensure prop gif is required', () => {
        try {
            <GifItem />
        } catch (e) {
            return
        }

        assert.fail(true, false, 'Expected an error for required prop gif')
    })

    it('should ensure prop gif has the correct object shape', () => {
        try {
            <GifItem gif='not an object' />
        } catch (e) {
            return
        }

        assert.fail(true, false, 'Expected an error for prop gif not having the correct object shape')

        try {
            <GifItem gif={{ test: 'wrong shape' }} />
        } catch (e) {
            return
        }

        assert.fail(true, false, 'Expected an error for prop gif not having the correct object shape')

        try {
            <GifItem gif={{ images: { downsized: {} } }} />
        } catch (e) {
            return
        }

        assert.fail(true, false, 'Expected an error for prop gif not having the correct object shape')

        try {
            <GifItem gif={{ images: { downsized: { url: 'still invalid'} } }} />
        } catch (e) {
            return
        }

        assert.fail(true, false, 'Expected an error for prop gif not having the correct object shape')

        try {
            <GifItem gif={{ id: null, images: { downsized: { url: 'https://media2.giphy.com/media/Zn7rsVqBTPAly/giphy-downsized.gif' } } }} />
        } catch (e) {
            return
        }

        assert.fail(true, false, 'Expected an error for prop gif not having the correct object shape')
    })

})