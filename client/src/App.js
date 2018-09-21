import React, { Component } from 'react';
import ApoloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './Components/BookList/BookList';
import AddBook from './Components/AddBook/AddBook';

const client = new ApoloClient({
  uri : 'http://localhost:3000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        <div className="App">
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
