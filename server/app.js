const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();
app.use(cors());

//connnect to mlab DB
mongoose.connect('mongodb+srv://shloch:shloch@gql-ninja.ou6a6.mongodb.net/gql-ninja?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))



app.listen(4000, () => {
    console.log("now lisetning for requests on port 4000")
})