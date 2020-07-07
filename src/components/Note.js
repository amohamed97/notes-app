import React from 'react'

export class Note extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          showControls: false,
        };
      }

    enableControls = (e) =>{
        this.setState({showControls: true})
    }

    disableControls = (e) =>{
        this.setState({showControls: false})
    }

    render(){
        const renderControls = () =>{
            if (this.state.showControls){
                return <div className="row justify-content-end">
                            <div className="col-3 justify-content-end">
                                <button className="btn btn-success btn-sm mr-2">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => this.props.deleteNote(this.props.content.id)}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>

            }
        }


        return (
            <div className="card mb-3" onMouseOver={e => this.enableControls()} onMouseLeave={e => this.disableControls()} >
                <div className="card-body">
                    <p>{this.props.content.title}</p>
                    {renderControls()}
                </div>
            </div>
        )
    }
}

export default Note