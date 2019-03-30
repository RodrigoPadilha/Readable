import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import { loadPostDetail } from '../actions/PostAction'
import ListOfComments from './ListOfComments'
import EditPostForm from './EditPostForm'
import Error404 from './Error404'

class PostDetail extends Component {

    componentDidMount(){
        const { match } = this.props        
        this.props.postDetailFromAPI(match.params.postId)           
    }

    render(){        
        const {postDetail} = this.props     
        
        let isPostDeleted = Object.keys(postDetail).length === 0
        if(isPostDeleted)
            return <Error404/>
        
        return(                        
            <Container>   

                <EditPostForm 
                    key={postDetail.id} 
                    id={postDetail.id} 
                    title={postDetail.title} 
                    text={postDetail.body}
                    category={postDetail.category}
                    author={postDetail.author}
                    deleted={postDetail.deleted}/>

                <br/><br/><br/>               

                <ListOfComments postId={this.props.match.params.postId}/>    

            </Container>                                
        );
    }

}

const mapStateToProps = (state, props) => ({
    postDetail: state.storePosts.postDetail,     
});

const mapDispatchToProps = (dispatch) => ({ 
    postDetailFromAPI: (id) => dispatch(loadPostDetail(id)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);