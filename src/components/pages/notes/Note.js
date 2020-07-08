import React from 'react'
import { render } from 'react-dom';

export class Note extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          showControls: false,
          editing: false,
          editedTitle: ""
        };
      }

    enableControls = (e) =>{
        this.setState({showControls: true})
    }

    disableControls = (e) =>{
        this.setState({showControls: false})
    }

    enableEditing= () =>{
        this.setState({editing:true})
        this.setState({editedTitle: this.props.content.title})
    }

    editContent = (e) =>{
        this.setState({editedTitle: e.target.value})
    }

    saveEdit = () =>{
        this.props.editNote(this.props.content.id, this.state.editedTitle)
        this.setState({editing: false})
    }

    cancelEdit = () => {
        this.setState({editing:false, editedTitle: ""})
    }




    render(){
        // const renderControls = () =>{
        //     if (this.state.showControls){
        //         return <div className="row justify-content-end">
        //                     <div className="col-3 justify-content-end">
        //                         <button className="btn btn-success btn-sm mr-2">
        //                             <i className="fas fa-edit"></i>
        //                         </button>
        //                         <button className="btn btn-danger btn-sm" onClick={() => this.props.deleteNote(this.props.content.id)}>
        //                             <i className="fas fa-trash"></i>
        //                         </button>
        //                     </div>
        //                 </div>

        //     }
        // }

        const renderControls = () =>{
            if (this.state.showControls && !this.state.editing){
                return <div className="col-3">
                            <button className="btn btn-success btn-sm mr-2"
                             onClick={() => this.enableEditing()} 
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-danger btn-sm" onClick={() => this.props.deleteNote(this.props.content.id)}>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>

            }else if(this.state.editing){
                return <div className="col-3">
                            <button className="btn btn-success btn-sm mr-2"
                            onClick={() => this.saveEdit()}>
                                <i className="fas fa-check"></i>
                            </button>
                            <button className="btn btn-danger btn-sm"
                            onClick={() => this.cancelEdit()}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
            }
        }

        const renderContent = () => {
            if (this.state.editing){
                return (
                    <input autoFocus className="form-control" 
                    value={this.state.editedTitle}
                    onChange={this.editContent}
                    type="text"/>
                )
            }else{
                return (<p>{this.props.content.title}</p>)
            }
        }

        


        return (
            <div className="card mb-3" onMouseOver={e => this.enableControls()} onMouseLeave={e => this.disableControls()} >
                <div className="card-body">
                    <div className="row">
                        <div className="col-9">
                            {renderContent()}
                        </div>
                        {renderControls()}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Note