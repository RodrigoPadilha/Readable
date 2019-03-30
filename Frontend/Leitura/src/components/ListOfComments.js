import React, { Component } from 'react';
import { connect } from 'react-redux'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import CommentDetailModal from './CommentDetailModal';

import { convertTimestampToDateAndHour} from '../DateUtils';
import { loadAllComents, deleteComment, changeCommentVote } from '../actions/ComentAction'

class ListOfComments extends Component{

    constructor(props, context){
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {    
            show: false,
            modalData:{}
        };        
    }

    componentDidMount() {        
        this.props.commentsReceivedFromAPI(this.props.postId);
    }

    handleClose = () => this.setState({ show: false });
    handleShow = (commentData) => this.setState({ show: true, modalData: commentData});
    deleteComment = (commentId) => this.props.deleteCommentAPI(commentId)
    updateVotos = (commentId, vote) => this.props.chageVote(commentId, vote)

    render(){         
        const{ allComents } = this.props.objAllComents      
        return(
            <div>
                <h3>Comentários</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Autor</th><th>Comentário</th><th>Nota</th><th>Data</th><th><Button variant="secondary" onClick={() => this.handleShow({parentId: this.props.postId})}>Add Post</Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allComents.map((comment) =>                              
                            <tr key={comment.id}>
                                <td>{comment.author}</td>
                                <td>{comment.body}</td>
                                <td>{comment.voteScore}</td>
                                <td>{convertTimestampToDateAndHour(comment.timestamp)}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button variant="success" onClick={() => this.updateVotos(comment.id,{option:"upVote"})} >+</Button>
                                        <Button variant="dark"    onClick={() => this.updateVotos(comment.id,{option:"downVote"})} >-</Button>
                                        <Button variant="primary" onClick={() => this.handleShow(comment)}>Edit</Button>   
                                        <Button variant="danger"  onClick={() => this.deleteComment(comment.id)}>Deletar</Button> 
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                <CommentDetailModal 
                    show={this.state.show}
                    handleClose={this.handleClose}
                    data={this.state.modalData}/>

            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({    
    objAllComents: state.storeComents,
});

const mapDispatchToProps = (dispatch) => ({ 
    commentsReceivedFromAPI: (idPost) => dispatch(loadAllComents(idPost)), 
    deleteCommentAPI: (commentId) => dispatch(deleteComment(commentId)),
    chageVote: (commentId, vote) => dispatch(changeCommentVote(commentId, vote))  
})

export default connect(mapStateToProps,mapDispatchToProps)(ListOfComments);
