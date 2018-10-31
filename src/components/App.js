import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

/* const roar = (message) => {
    console.log(message)
}

roar('peeep') */

class App extends Component {
    state = {
        text: '',
        notes: []
    }
    submit() {

        const { notes, text } = this.state; // const notes = this.state.notes;
        // const newNote = { text }
        // const newNote = { text: this.state.text }
        notes.push({ text })
        this.setState({ notes })
        // this.setState({ notes: notes })
        
    }

    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl onChange={event => this.setState({ text: event.target.value })} />
                    {' '}
                    <Button onClick={() => this.submit()}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, index) => {
                        return (
                            <div key={index}> {note.text} </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default App;