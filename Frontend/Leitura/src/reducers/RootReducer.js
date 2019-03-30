import { combineReducers } from 'redux'
import { postReducer } from './PostReducer'
import { comentReducer } from './ComentReducer'
import { categoryReducer } from './CategoryReducer'

export const rootReducer = combineReducers({
    storePosts: postReducer,
    storeComents: comentReducer,
    storeCategories: categoryReducer,
  });