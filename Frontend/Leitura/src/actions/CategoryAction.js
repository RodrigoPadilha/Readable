import * as ServerAPI from '../ServerAPI'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadAllCategories = () => {
    return (dispatch, getState) => {    
       ServerAPI
        .getAllCategories()
        .then(categories => {
            dispatch(loadCategories(categories));
        });
    }
}

function loadCategories(allCategories){
    return {
        type: LOAD_CATEGORIES,
        allCategories
    }
}
