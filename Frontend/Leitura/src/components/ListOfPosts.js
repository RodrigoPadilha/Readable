import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadAllPosts, loadPostsByCategory } from '../actions/PostAction'
import { loadAllCategories } from '../actions/CategoryAction';
import sortBy from 'sort-by'
import Post from './Post';
import CategoryCheckbox from './CategoryCheckbox';
import OrderByCombobox from './OrderByCombobox';
import Error404 from './Error404'

class ListOfPosts extends Component{

    componentDidMount() {
        this.props.categoriesFromAPI();
        if(typeof this.props.match.params.category !== 'undefined'){                // Verifica se recebeu algum parametro pela URL
            this.props.postsCategorizedFromAPI(this.props.match.params.category)    // Verifica tbm se o usuário está acessando diretamente colcando o link no navegador
        } else {
            this.props.postReceivedFromAPI()
        }        
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.category !== prevProps.match.params.category){
            if(this.props.match.params.category){
                this.props.postsCategorizedFromAPI(this.props.match.params.category)
            } else {
                this.props.postReceivedFromAPI()
            }
        }
    }

    render(){                  
        const {objAllPosts, objAllCategories, orderby} = this.props      
        objAllPosts.allPosts.sort(sortBy(orderby))
        //console.log("categ", this.props.match.params.category)
        //console.log("CATEG", objAllCategories.allCategories)        
        //console.log("Find", this.props.objAllCategories.allCategories.find(x => x.name === this.props.match.params.category))
        //console.log("Include", this.props.objAllCategories.allCategories.include(x => x.name === this.props.match.params.category))
        //console.log("Filter", this.props.objAllCategories.allCategories.filter(x => x.name === this.props.match.params.category).length > 0)
            
        let passouCategoria = this.props.match.params.category        
        let encontrouCategoria = objAllCategories.allCategories.find(category => category.name === this.props.match.params.category)                
        if(passouCategoria && !encontrouCategoria){        
            return <Error404 />
        }    
        
        return(
            <div>
                <CategoryCheckbox />
                <OrderByCombobox />
                {objAllPosts.allPosts.map((post) =>
                    <Post key={post.id} {...post}/>
                )}                
            </div>
        )
        
    }
}

const mapStateToProps = (state, props) => ({
    objAllPosts: state.storePosts,    
    orderby: state.storePosts.orderby,
    objAllCategories: state.storeCategories,
  });

const mapDispatchToProps = (dispatch) => ({     
    postReceivedFromAPI: () => dispatch(loadAllPosts()),        
    postsCategorizedFromAPI: (category) => dispatch(loadPostsByCategory(category)),
    categoriesFromAPI: () => dispatch(loadAllCategories()), 
})

export default connect(mapStateToProps,mapDispatchToProps)(ListOfPosts);




/**
 * Usar quando precisar filtrar uma lista de exibição. ownProps são as props passadas a este componente por um componente pai
    const mapStateToProps = (state, ownProps) => ({
    photos: state.photos.filter(photo => photo.user === ownProps.user)
    });
*/

/*
import PropTypes from 'prop-types'
static propTypes = { 
    objAllPosts: PropTypes.object,
    //allComents: PropTypes.array
};
*/