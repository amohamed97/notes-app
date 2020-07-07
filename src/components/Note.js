import React from 'react'

export class Note extends React.Component{
    render(){
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <p>{this.props.content.title}</p>
                    <div className="row justify-content-end">
                        <div className="col-4">
                            <button className="btn btn-danger btn-sm" onClick={() => this.props.deleteNote(this.props.content.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Note