import * as ServerAPI from '../ServerAPI'

export const LOAD_COMMENTS_FROM_POST = 'LOAD_COMMENTS_FROM_POST';
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const VOTE_COMMENT_CHANGED = 'VOTE_COMMENT_CHANGED';


export const loadAllComents = (idPost) => {
    return (dispatch, getState) => {    
       ServerAPI
        .getCommentsFromPost(idPost)
        .then(coments => {
            dispatch(loadComents(coments));
        });
    }
}

function loadComents(allComments){
    return {
        type: LOAD_COMMENTS_FROM_POST,
        allComments
    }
}


export const updateComment = (commentId ,commentEdited) => {
    return dispatch  => {
        ServerAPI
        .updateComment(
            commentId, 
            commentEdited
        ).then(() => {
            dispatch( updateComments(commentId, commentEdited))
        });
    }
}

function updateComments (commentId, commentEdited){
    return {
        type: EDIT_COMMENT,
        commentId,
        commentEdited,
    }
}


export const addNewComment = (comment) => {
    return dispatch  => {
          ServerAPI
          .addNewComment(comment)
          .then(() => {
                dispatch( addComment(comment))
          });
    }
}

function addComment(comment){
    return {
        type: ADD_COMMENT,
        comment
    }
}


export const deleteComment = (commentId) => {
    return dispatch  => {
          ServerAPI
          .deleteComment(commentId)
          .then(() => {
                dispatch( removeComment(commentId))
          });
    }
}

function removeComment(commentId){
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

export const changeCommentVote = (commentId, vote) => {    
    return dispatch  => {
        ServerAPI
        .updateVoteComment(commentId, vote).then(() => {
            dispatch( updateCommentVote(commentId, vote))
        });
    }
}

function updateCommentVote(commentId, vote){
    return {
        type: VOTE_COMMENT_CHANGED,
        payload: { commentId, vote }
    }
}
