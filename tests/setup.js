require('babel-register')
const {
    JSDOM
} = require('jsdom');
const {
    assert
} = require('chai')
const {
    mount, shallow
} = require('enzyme')
const sinon = require('sinon')
const React = require('React')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {
    window
} = jsdom;

global.window = window;
global.document = window.document;
// global.navigator = {
//   userAgent: 'node.js'
// };
global.assert = assert
global.shallow = shallow
global.mount = mount
global.React = React

global.sinon = sinon
sinon.stub(console, 'error').callsFake((warning) => {
    if (warning && warning.indexOf('Warning: Failed prop type:') > -1) {
        // process.nextTick(() => {
            // console.log('')
            throw new Error(warning);
        // });
    }
})


// require('babel-polyfill')

// global.document = require('jsdom').jsdom('<body></body>')
// global.window = document.defaultView
// global.navigator = window.navigator