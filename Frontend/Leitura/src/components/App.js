import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import TabBar from './TabBar';
import PostDetail from './PostDetail';
import ListOfPosts from './ListOfPosts';
import Error404 from './Error404'

class App extends Component {

  render() {
    return (
      <Container>      
          <TabBar />
          <Switch>
            <Route exact path="/" component={ListOfPosts}/> 
            <Route path="/newPost" component={PostDetail} />
            <Route path="/:category/:postId" component={PostDetail} />   
            <Route exact path="/:category" component={ListOfPosts}/>
            <Route component={Error404}/>
          </Switch>
      </Container>
    );
  }
}

export default App