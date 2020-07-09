//jshint esversion:6
import React from 'react';
import Note from './Note';
import Axios from 'axios';

export class NodeList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
    }

    deleteNote = id =>{
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
            this.setState({
                notes: this.state.notes.filter(note => note.id !== id)
            })
        );
    }

    editNote = (id, newTitle) => {
        let newNotes = this.state.notes.slice();
        newNotes.forEach((note) =>{
            if(note.id === id){
                note.title = newTitle;
            }
        })
        this.setState({notes: newNotes});
    }

    componentDidMount(){
        Axios.get('http://127.0.0.1:5000/notes')
        .then(res => {
            this.setState({notes: res.data})
        }).catch(err => {
            console.log(err)
        });
    }


    render(){
        return (
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card shadow">
                            <div className="card-header text-center"><h3>My Notes</h3></div>
                            <div className="card-body">
                            {
                                this.state.notes.map((note) =>(
                                    <Note key={note.id} content={note} deleteNote={this.deleteNote} editNote={this.editNote}/>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default NodeList