import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
    let app = mount(<App />)

    it('renders the App title', () => {
        console.log(app.debug())
        expect(app.find('h2').text()).toEqual('Note to Self')
    })

    it('renders the clear button', ()=>{
        console.log(app.find('.btn').at(1).text())
        expect(app.find('.btn').at(1).text()).toEqual('Clear Data')
    })

    describe('when rendering the form', () => {
        it('creates a Form component', () => {
            expect(app.find('Form').exists()).toBe(true)
        })  

        it('renders a Formcontrol component', () => {
            expect(app.find('FormControl').exists()).toBe(true)
        })

        it('renders a submit button', () => {
            expect(app.find('.btn').at(0).text()).toEqual('Submit')
        })
    })
})