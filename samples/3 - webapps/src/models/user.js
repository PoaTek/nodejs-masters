const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    UserId: ObjectId,
    name: String,
    age: Number
  });

  module.exports = UserSchema; 