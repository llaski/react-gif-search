import GifList from '../../src/components/GifList'

describe('Components - GifList', () => {

    const gifData = {
        id: '1',
        images: {
            downsized: {
                url: 'https://media2.giphy.com/media/Zn7rsVqBTPAly/giphy-downsized.gif'
            }
        }
    }

    it('should ensure prop gifs is required ', () => {
        try {
            <GifList />
        } catch (e) {
            return
        }

        assert.fail(true, false, 'Expected an error for required prop gifs')
    })

    it('should ensure prop gifs is an array ', () => {
        try {
            <GifList gifs='not an array' />
        } catch (e) {
            return
        }

        assert.fail(true, false, 'Expected an error for prop gifs not being an array')
    })

    it('should render 1 GifItem component when prop gifs array has 1 item', () => {
        const gifs = [gifData]

        const wrapper = shallow(<GifList gifs={gifs} />)

        assert.equal(1, wrapper.find('GifItem').length)
        assert.equal('1', wrapper.find('GifItem').key())
    })

    it('should render 3 GifItem components when prop gifs array has 3 items', () => {
        const gifs = [Object.assign({}, gifData, { id: '1'}), Object.assign({}, gifData, { id: '2'}), Object.assign({}, gifData, { id: '3'})]

        const wrapper = shallow(<GifList gifs={gifs} />)

        assert.equal(3, wrapper.find('GifItem').length)
        assert.equal('1', wrapper.find('GifItem').at(0).key())
        assert.equal('2', wrapper.find('GifItem').at(1).key())
        assert.equal('3', wrapper.find('GifItem').at(2).key())
    })

})