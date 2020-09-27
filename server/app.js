const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require(`cors`)

const app = express();
const PORT = 3005;

app.use(cors())
mongoose.connect(`mongodb+srv://MmIsaev:12345678Q@cluster0.vhs1h.mongodb.net/GraphQLData?retryWrites=true&w=majority`)

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));



const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
