const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  email: { 
    type: String, 
    required: true, 
    unique: true 
  },

  password: { 
    type: String, 
    required: true 
  },
  phone:{
    type: Number,
    required: true,
    unique: true
  },

  gender: { 
    type: String 
  },
  source :{
    type: String
  },
  city:{
    type: String
  },
  state:{
    type: String
  },
});


const User = mongoose.model("User",userSchema);

module.exports = User;