import {gql} from 'apollo-boost';

const BookListQuery = gql `
        {
            books {
                name
                id
            }
        }
`

const getAuthor = gql `
{
    authors {
        name
        id
    }
}
`

export {
    getAuthor,
    BookListQuery
}