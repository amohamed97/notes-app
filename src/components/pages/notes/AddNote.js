import React, {useState} from 'react'
import {Button, Modal,Form, Row, Col} from 'react-bootstrap'


function AddNote(props) {
    const [show, setShow] = useState(false);
    const [newNote, setNewNote] = useState("")

    const handleDiscard = () => {
        setShow(false)
        setNewNote("")
    };
    const handleAdd = () => {
        if(newNote){
            props.addNote(newNote)
            setShow(false)
        }else{
            alert("New note can not be empty")
        }
    };
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        setNewNote(e.target.value)
    }


    return(
        <>
            <Row className="mb-3">
                <Col>
                    <Button variant="success" block onClick={handleShow}>
                        <i className="fas fa-plus"></i> Add Note
                    </Button>
                </Col>
            </Row>
            <Modal show={show} onHide={handleDiscard}>
                <Modal.Header closeButton>
                <Modal.Title>Add a new note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control as="textarea" rows="3" placeholder="Enter note content" onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleDiscard}>
                    Discard
                </Button>
                <Button variant="success" onClick={handleAdd}>
                    Add
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddNote