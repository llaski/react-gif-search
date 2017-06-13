import App from '../../src/components/App'

describe('Components - App', () => {

    it('initial state for gifs is an empty array', () => {
        const wrapper = mount(<App />)

        assert.isArray(wrapper.state().gifs)
        assert.isEmpty(wrapper.state().gifs)
    })

})