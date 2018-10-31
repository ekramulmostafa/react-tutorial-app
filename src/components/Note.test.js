import React from 'react'
import { mount } from 'enzyme'
import Note from './Note'

const props = {note: {text: 'test note'} }

/* console.log({...props})

const triplePrint = (a, b, c) => {
    console.log(`${a} ${b} ${c}`)   
}

const message = ['react', 'is', 'not good']

triplePrint(...message) */

describe('Note', () => {
    // let note = mount(<Note note={ props.note } />)
    let note = mount(<Note {...props} />)

    it('renders the note text', () => {
        console.log(note.debug());

        expect(note.find('p').text()).toEqual(props.note.text)
    })
})
