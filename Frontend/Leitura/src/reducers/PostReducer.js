import {
    LOAD_ALL_POSTS,
    ADD_POST,
    REMOVE_POST,
    ORDER_BY,
    LOAD_POST_DETAIL,
    VOTE_CHANGED
 } from '../actions/PostAction'
 
 const initialPostState = {
    allPosts:[],
    orderby: '-voteScore',
    postDetail:{},
 }
 
 export const postReducer = (state = initialPostState, action) => {
 
    switch (action.type) {
        
        case LOAD_ALL_POSTS:
            return {
                ...state, 
                allPosts: action.allPosts
            }
 
        case ADD_POST:
            return  [...state, ...action.novPost]
 
        case REMOVE_POST:
             let newState = state
             newState = newState.filter(p => p.id !== action.postId)
            return newState 

        case ORDER_BY:
            return {
                ...state,
               orderby: action.orderby, // Seta o tipo de ordenação no estado do "Componente"(ligado a store),
            }                           // ao alterar o stado da store, o componenete será rerenderizado 

        case LOAD_POST_DETAIL:           
            return {                
                ...state,
                postDetail: action.post,
            }

        case VOTE_CHANGED:            
            let option = action.payload.vote.option === "upVote" ? 1 : -1 
            return {
                ...state, 
                allPosts: state.allPosts.map(post => {
                    if(post.id === action.payload.id)
                        post.voteScore += option
                    return post
                })             
            }

        default:
            return state
    }
 
 };
