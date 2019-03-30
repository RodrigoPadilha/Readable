import React, { Component } from "react";
import { connect } from 'react-redux'

import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import { v4 } from 'uuid'

import { loadAllComents, addNewComment, updateComment } from '../actions/ComentAction'

class CommentDetailModal extends Component {

    state={
        name:'',
        text:'',
    }

    updateNameComment = (name) => this.setState({ name: name });
    updateTextComment = (text) => this.setState({ text: text });

    saveComment(commentId){                  
        if(typeof commentId === 'undefined'){                      
            let newComment = { 
                id: v4(), 
                timestamp: Date.now(), 
                body: this.state.text, 
                author: this.state.name, 
                voteScore: 1,
                parentId: this.props.data.parentId 
            }
            this.props.addCommentAPI(newComment)
        } else {                             
            let commentEdited = { 
                timestamp: Date.now(), 
                body: this.state.text 
            }            
            this.props.editCommentAPI(commentId, commentEdited)            
        }
    }

    render() {
        const { data } = this.props    
        return (        
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comentário</Modal.Title>
                </Modal.Header>

                <Modal.Body>                    
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Autor" 
                                defaultValue={data.author} 
                                onChange={(event) => this.updateNameComment(event.target.value)} 
                                disabled={this.props.data.id ? true: false}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comentário</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows="3" 
                                defaultValue={data.body}  
                                onChange={(event) => this.updateTextComment(event.target.value)}/>
                        </Form.Group>

                    </Form>                   
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.saveComment(data.id)}>
                        Save Changes
                    </Button>                    
                </Modal.Footer>
            </Modal>   
        );
    }
}

const mapDispatchToProps = (dispatch) => ({ 
    commentsReceivedFromAPI: (idPost) => dispatch(loadAllComents(idPost)),
    addCommentAPI: (comment) =>  dispatch(addNewComment(comment)),
    editCommentAPI: (idComment, commentEdited) =>  dispatch(updateComment(idComment, commentEdited))
})

export default connect(null,mapDispatchToProps)(CommentDetailModal);
