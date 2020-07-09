//jshint esversion:6
import React from 'react';
import Note from './Note';
import Axios from 'axios';
import AddNote from './AddNote'

export class NodeList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
    }

    deleteNote = id =>{
        Axios.delete(`http://127.0.0.1:5000/${this.props.loggedUser}/notes/${id}`).then(res =>
            this.setState({
                notes: this.state.notes.filter(note => note.id !== id)
            })
        ).catch((err) =>{
            console.log(err.response)
        })
    }

    editNote = (id, newTitle) => {
        Axios.put(`http://127.0.0.1:5000/${this.props.loggedUser}/notes/${id}`, {
            editedNote: newTitle
        }).then(res =>{
            let newNotes = this.state.notes.slice();
            newNotes.forEach((note) =>{
                if(note.id === id){
                    note.title = newTitle;
                }
            })
            this.setState({notes: newNotes});
            }
        );
        
    }

    addNote = (newNote) =>{
        Axios.post(`http://127.0.0.1:5000/${this.props.loggedUser}/notes`, {
            newNote
        }).then(res =>
            this.setState({notes: this.state.notes.concat({id: res.data.id, title: newNote})})
        );
        
    }

    componentDidMount(){
        Axios.get(`http://127.0.0.1:5000/${this.props.loggedUser}/notes`)
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
                            <AddNote addNote={this.addNote}/>
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