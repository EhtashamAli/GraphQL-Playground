import React , {Component}from 'react';
import {getAuthor} from '../../Queries/Queries';
import {graphql} from 'react-apollo';
import classes from './AddBook.css';


class AddBook extends Component{

    state = {
        name: "",
        genre: "",
        authorID: ""
    }

    getAuthor = () => {
        let data = this.props.data;
        console.log(data) ;
        if (data.loading) {
            return <option disabled>LOADING</option>
        } else {
            return data.authors.map( author => {
                return  <option key={author.id} value={author.id}>{author.name}</option>
            });
        }
    }

    updateName = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    updateGenre = (e) => {
        this.setState({
            genre : e.target.value
        });
    }

    updateAuthorID = (e) => {
        this.setState({
            authorID : e.target.value
        });
    }

    submitForm = (e) => {
        console.log(this.state);
        e.preventDefault();
    }
    
    render() {
        
  

    return (
        <form className = {classes.addbook} onSubmit = {this.submitForm}>
            <div className={classes.field}>
                <label>Book Name:</label>
                <input type="text" onChange = {this.updateName}/>
            </div>

            <div className={classes.field}>
                <label>Genre:</label>
                <input type="text" onChange = {this.updateGenre}/>
            </div>

            <div className={classes.field}>
                <label>Author:</label>
                <select onChange = {this.updateAuthorID}>
                    <option>Select Author</option>
                    {this.getAuthor()}
                </select>
            </div>
            <button></button>

        </form>
    );
}
}
export default (graphql(getAuthor)) (AddBook);