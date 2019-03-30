import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { v4 } from 'uuid'

import * as ServerAPI from '../ServerAPI'

class EditPostForm extends Component {
    state = {
        edit: typeof this.props.id === 'undefined',
        title: this.props.title,
        text: this.props.text, 
        author: this.props.author,
        category: this.props.category,       
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.title !== prevProps.title || this.props.text !== prevProps.text) {        
            this.setState({ 
                edit: false,
                title: this.props.title,
                text: this.props.text,
                author: this.props.author,
                category: this.props.category,
            });
        }
    }

    changeMode(status){
        this.setState({      
            edit: status            
        });
    }

    setTitlePost = (title) => this.setState({ title: title });
    setTextPost = (text) => this.setState({ text: text });    
    setAuthorPost = (author) => this.setState({ author: author });    
    setCategoryPost = (category) => this.setState({ category: category });  
    
    envia = () =>{                  
        if(typeof this.props.id === 'undefined'){
            let newPost = {
                id: v4(), 
                timestamp: Date.now(), 
                title: this.state.title, 
                body: this.state.text, 
                author: this.state.author, 
                category: this.state.category
            }
            ServerAPI.addNewPost(newPost)
        } else {
            let postEdited = {
                title: this.state.title, 
                body: this.state.text
            }            
            ServerAPI.updatePost(this.props.id, postEdited)      
        }
    }  

    deletePost = () => ServerAPI.deletePost(this.props.id)  

    render(){
        const {edit} = this.state  
        const {objAllCategories} = this.props                      
        return(
            <div>            
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Título</Form.Label>                                
                    <Form.Control 
                        placeholder="Titulo" 
                        value={this.state.title}
                        onChange={(event) => this.setTitlePost(event.target.value)}
                        disabled={edit ? false: true}/>  
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Texto do Post</Form.Label>                                 
                    <Form.Control
                        placeholder="Texto do Post" 
                        value={this.state.text}
                        onChange={(event) => this.setTextPost(event.target.value)}
                        disabled={edit ? false: true}/>                                    
                </Form.Group>    

                <Form.Row>                
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Categoria</Form.Label>
                            <Form.Control as="select" disabled={edit ? false: true} onChange={event => this.setCategoryPost(event.target.value)} >
                                <option>{this.props.category}</option>
                                {objAllCategories.allCategories.map((cat) =>                                      
                                    cat.name === this.props.category ? 'none' : <option key={cat.name}>{cat.name}</option>
                                )}
                        </Form.Control>
                    </Form.Group>                                
                    <Form.Group controlId="formAuthor">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control 
                            placeholder="Nome do Autor" 
                            value={this.state.author}
                            onChange={(event) => this.setAuthorPost(event.target.value)}
                            disabled={edit ? false: true}/>
                    </Form.Group>                    
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Deletado" defaultValue={this.props.deleted}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.envia} as={Link} to={"/"}>Submit</Button>
                <Button variant="primary" onClick={() => this.changeMode(true)}>Editar</Button>
                <Button variant="danger" onClick={this.deletePost} as={Link} to={"/"}>Deletar</Button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    objAllCategories: state.storeCategories,    
});

const mapDispatchToProps = (dispatch) => ({ 
    //addNewPostAPI: (newPost) => dispatch(addNewPost(newPost)),
    //updatePostAPI: (id, postEdited) => dispatch(updatePost(id, postEdited)),
    //deletePostAPI: (id) => dispatch(removePost(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditPostForm);