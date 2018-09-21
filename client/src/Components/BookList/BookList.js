import React from 'react';
import {BookListQuery} from '../../Queries/Queries';
import { graphql } from 'react-apollo';

const bookList = (props) => {

    // componentDidUpdate(){
    //     const books = this.props.data.books;
    //     this.setState({
    //         Books : books
    //     });
    // }       
        let bookList = null;
        let books = null;
        if(props.data.books){
             bookList = props.data.books;
             books = bookList.map( bk=> <li key={bk.id}>BookName:{bk.name}  |    ID: {bk.id}</li>);
        }
        return(
            <ul>
                {books}
            </ul>
        )
    
}

export default graphql(BookListQuery)(bookList);