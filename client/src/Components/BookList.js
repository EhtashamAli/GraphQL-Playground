import React, { Component } from 'react';
import {gql} from'apollo-boost';
import { graphql } from 'react-apollo';

const BookListQuery = gql `
        {
            books {
                name
                id
            }
        }
`;
class bookList extends Component {

    componentDidMount(){
        console.log(this.props);
    }   
    render(){
        return(
            <ul>
                <li>BOOK NAME</li>
            </ul>
        )
    }
}

export default graphql(BookListQuery)(bookList);