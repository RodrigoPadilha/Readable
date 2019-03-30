import {
    LOAD_COMMENTS_FROM_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    VOTE_COMMENT_CHANGED,
 } from '../actions/ComentAction'

const initialComentState = {
    allComents:[]
 }
 
 export const comentReducer = (state = initialComentState, action) => {
 
    switch (action.type) {

        case LOAD_COMMENTS_FROM_POST:
            return {
                ...state,
                allComents: action.allComments
            }
 
        case EDIT_COMMENT:            
            return {
                ...state,
                allComents: state.allComents.map(comment => 
                    comment.id === action.commentId ? {   
                        ...comment, 
                        timestamp: action.timestamp, 
                        body: action.commentEdited.body
                    } : comment
                )
            }

        case ADD_COMMENT:            
            return  {                                
                ...state,
                allComents: state.allComents.concat(action.comment)
            }
 
        case REMOVE_COMMENT:            
            return {
                ...state,
                allComents: state.allComents.filter(comment => comment.id !== action.commentId)
            }
 
        case VOTE_COMMENT_CHANGED:                       
            let option = action.payload.vote.option === "upVote" ? 1 : -1 
            return {
                ...state, 
                allComents: state.allComents.map(comment => {
                    if(comment.id === action.payload.commentId)
                        comment.voteScore += option
                    return comment
                })             
            }

        default:
            return state
    }
 
 };