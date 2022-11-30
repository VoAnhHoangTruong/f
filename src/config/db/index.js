const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/hell_vaht_dev');
        console.log('Success');
    } catch (error) {
        console.log('Fleas');
    }
}
module.exports = { connect };
