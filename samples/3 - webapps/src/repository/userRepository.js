const UserSchema = require('../models/user');

class UserRepository {
    createUser(user) {
        const model = mongoose.model('User', UserSchema);

        model.name = user.name;
        model.age = user.age;
        model.email = user.email;

        model.save();
    }
}