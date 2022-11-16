const mongoose = require('mongoose')

const clientsSchema = mongoose.Schema({
    name: String,
    basket: [{type: mongoose.SchemaTypes.ObjectId , ref: 'Medicine'}],
    wallet: 10000,
    recipe: Boolean
});

const Client = mongoose.model('Client', clientsSchema);

module.exports = Client;
