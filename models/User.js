// models/User.js — defines the User schema
const { Schema, model } = require('mongoose'); // import Mongoose

const userSchema = new Schema(
{
username: {
type: String, // username is a string
required: true, // required field
unique: true, // must be unique
trim: true, // removes whitespace
},
email: {
type: String, // email is a string
required: true, // required field
unique: true, // must be unique
match: [/.+@.+..+/, 'Must match a valid email address'], // regex for email format
},
thoughts: [
{
type: Schema.Types.ObjectId, // reference Thought IDs
ref: 'Thought', // linked to Thought model
},
],
friends: [
{
type: Schema.Types.ObjectId, // reference User IDs (self-reference)
ref: 'User', // linked to User model
},
],
},
{
toJSON: {
virtuals: true, // include virtuals in JSON
},
id: false, // disable default _id duplication
}
);

// virtual to get number of friends
userSchema.virtual('friendCount').get(function () {
return this.friends.length; // returns length of friends array
});

const User = model('User', userSchema); // create User model

module.exports = User; // export the model
// end of file