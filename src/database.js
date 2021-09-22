const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-db-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is Connected'))
    .catch(err => console.log(err));