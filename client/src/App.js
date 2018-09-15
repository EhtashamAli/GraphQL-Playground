import React, { Component } from 'react';
import ApoloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './Components/BookList';

const client = new ApoloClient({
  uri : 'http://localhost:3000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        <div className="App">
          <BookList/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
