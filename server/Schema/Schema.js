const GraphQl = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType , GraphQLString , GraphQLID , GraphQLInt , GraphQLSchema } = GraphQl;

const book = [
    {name : "book1" , genre: "asd" , id : '1' , authorID : '1'},
    {name : "book2" , genre: "asd" , id : '2' , authorID : '2'}
]

const author = [
    {name : "author1" , age : 23 , id : '1' },
    {name : "author2" , age : 18 , id : '2' }
]

const BookType = new GraphQLObjectType({
    name : "Book",
    fields : () => (
        {
            id : {type : GraphQLID},
            name : {type : GraphQLString},
            genre : {type : GraphQLString},
            author : {
                type : AuthorType,
                resolve(parent , args) {
                    return _.find(author , { id : parent.authorID});
                }
            }
        })
});

const AuthorType = new GraphQLObjectType ({
    name : 'Author',
    fields : () => ({
        name : {type: GraphQLString},
        age : {type: GraphQLInt},
        id : {type : GraphQLID}
    })
});

const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields: {
        book : {
            type : BookType,
            args : {id : {type : GraphQLID}},
            resolve(parent , args) {
                return _.find(book , { id : args.id });
            }
        },
        author: {
            type : AuthorType,
            args : { id : {type: GraphQLID}},
            resolve(parent , args){
                return _.find(author , {id : args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query : RootQuery
});