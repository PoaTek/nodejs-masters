const mongoose = require('mongoose');

class DbContext {

    connect() {
        await mongoose.connect('mongodb://admin:admin@localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });

      
    }
}