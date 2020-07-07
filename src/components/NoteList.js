import React from 'react'
import Note from './Note'
import Axios from 'axios'

export class NodeList extends React.Component{
    state = {
        notes: []
    }

    deleteNote = id =>{
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
            this.setState({
                notes: this.state.notes.filter(note => note.id !== id)
            })
        );
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({notes: res.data}))
    }


    render(){
        return (
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="note-list p-3 rounded shadow">
                            {
                                this.state.notes.map((note) =>(
                                    <Note key={note.id} content={note} deleteNote={this.deleteNote}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
        )
    }
}

export default NodeList