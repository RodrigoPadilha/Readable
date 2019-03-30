import * as ServerAPI from '../ServerAPI'

export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const ORDER_BY = 'ORDER_BY';
export const LOAD_POST_DETAIL = 'LOAD_POST_DETAIL';
export const VOTE_CHANGED = 'VOTE_CHANGED';

export const loadAllPosts = () => {
    return (dispatch, getState) => {
       ServerAPI
        .getAllPosts()
        .then(posts => {
            dispatch(loadPosts(posts));
        });
    }
}

export const loadPostsByCategory = (category) => {
    return (dispatch, getState) => {
       ServerAPI
        .getPostsFromCategory(category)
        .then(posts => {
            dispatch(loadPosts(posts));
        });
    }
}

function loadPosts(allPosts){
    return {
        type: LOAD_ALL_POSTS,
        allPosts
    }
}

export function orderPosts(value){
    return {
        type: ORDER_BY,
        orderby: value
    }
}

export const loadPostDetail = (postId) => {
    return (dispatch, getState) => {
       ServerAPI
        .getPostById(postId)
        .then(post => {
            dispatch(loadPostById(post));
        });
    }
}

function loadPostById(post){
    return {
        type: LOAD_POST_DETAIL,
        post
    }
}

export const changeVote = (id, vote) => {
    return dispatch  => {
        ServerAPI.updateVotePost(id, vote).then(() => {
            dispatch( updateVote(id, vote))
        });
    }
}

function updateVote(id, vote){
    return {
        type: VOTE_CHANGED,
        payload: { id, vote }
    }
}