import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {convertTimestampToDateAndHour} from '../DateUtils'
import like from '../img/like.svg'
import unlike from '../img/unlike.svg'
import { changeVote } from '../actions/PostAction'

class Post extends Component{

    updateVotos = (id, vote) => this.props.chageVote(id, vote)
    
    render(){
        const { id, title, body, timestamp, category, author, voteScore, commentCount } = this.props

        return(            
            <Card className="text-center">
                <Card.Header >{category}</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Button 
                        key={category.name}
                        as={Link}                         
                        to={`/${category}/${id}`}>
                        Detalhes
                    </Button>
                </Card.Body>                            
                <Card.Footer className="text-muted blockquote-footer">
                    Autor: {author} em {convertTimestampToDateAndHour(timestamp)} 
                    Votos: {voteScore} 
                    Comentários: {commentCount}                     
                    <img 
                        style={{width:'20px'}} 
                        src={like}
                        onClick={() => this.updateVotos(id,{option:"upVote"})} 
                        alt='Like'/>
                    <img 
                        style={{width:'20px'}} 
                        src={unlike} 
                        onClick={() => this.updateVotos(id,{option:"downVote"})} 
                        alt='Unlike'/>
                </Card.Footer>
            </Card>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({ 
    chageVote: (id, vote) => dispatch(changeVote(id, vote)) 
})
export default connect(null,mapDispatchToProps)(Post);