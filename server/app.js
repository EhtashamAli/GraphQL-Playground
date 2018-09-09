const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema =  require('./Schema/Schema');
const PORT = 3000 || process.env.PORT;
const app = express();

app.use('/graphql' , graphqlHTTP({
    schema,
    graphiql : true
}));

app.listen(PORT , () => {
    console.log(`Server is up and running on Port : ${PORT}`);
});