import {
    LOAD_CATEGORIES,    
 } from '../actions/CategoryAction'

 const initialComentState = {
    allCategories:[]
 }

 export const categoryReducer = (state = initialComentState, action) => {
 
    switch (action.type) {

        case LOAD_CATEGORIES:
            return {
                ...state,
                allCategories: action.allCategories
            }

        default:
            return state
    }
 
 };