import App from '../../src/components/App'

describe('View Gif Results On Search', () => {

    it('displays a list of results when a user types "a" into the search bar', () => {
        //Setup
        const wrapper = mount(<App />)

        //Act
        wrapper.find('SearchBar').find('input').simulate('change', {
                target: {
                    value: 'a'
                }
            })

        //Assert
        const gifList = wrapper.find('GifList')

        assert.isAtLeast(gifList.find('GifItem').length, 3)
    })

})