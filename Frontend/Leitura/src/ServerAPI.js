const api = "http://localhost:3001"
let token = 'whatever-you-want'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
  }


/*****************\ 
  API Categorias
\*****************/

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)


/*****************\ 
  API POSTS
\*****************/

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getPostById = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
  .then(res => res.json())

export const getPostsFromCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
  .then(res => res.json())

export const updatePost = (postId, data) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( data )
  }).then(res => res.json())

export const addNewPost = (data) =>
  fetch(`${api}/posts/`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( data )
  }).then(res => res.json())

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())

export const updateVotePost = (postId,data) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( data )
  }).then(res => res.json())

/*****************\ 
  API Comentarios
\*****************/

export const getCommentsFromPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
  .then(res => res.json())    

export const updateComment = (commentId, comentario) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( comentario )
  }).then(res => res.json())
  
export const addNewComment = (data) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( data )
  }).then(res => res.json())

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())

  export const updateVoteComment = (commentId,data) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( data )
  }).then(res => res.json())