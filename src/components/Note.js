import React from 'react'

export class Note extends React.Component{
    render(){
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <p>{this.props.content.title}</p>
                </div>
            </div>
        )
    }
}

export default Note