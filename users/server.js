
// importing compatibility layer between graphql and express
const expressGraphQL = require('express-graphql');

const express = require('express');

// import the schema
 const schema = require('./schema/schema')

// creating a express app
const app = express();

app.use('/api',expressGraphQL({
    schema,
    graphiql:true,

}))


app.listen(4000,()=>{
    console.log('LISTING ON PORT 4000');
    
})