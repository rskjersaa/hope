const mongoose = require('mongoose')
const dbName = 'hopeDB'

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser:true,
    useUnifiedTopology: true
    })
    .then(()=> console.log("Connected to database"))
    .catch(err => console.log("Failed to connect to Mongodb", err)
    );