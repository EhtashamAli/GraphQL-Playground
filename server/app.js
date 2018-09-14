const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema =  require('./Schema/Schema');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3000 || process.env.PORT;
const app = express();
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

app.use(cors);
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds151292.mlab.com:51292/gql-database` ,
{useNewUrlParser : true});

mongoose.connection.once('open' , () => {
    console.log('Connected');
}).on('error' , (err) => {
    console.log(err);
})

app.use('/graphql' , graphqlHTTP({
    schema,
    graphiql : true
}));

app.listen(PORT , () => {
    console.log(`Server is up and running on Port : ${PORT}`);
});