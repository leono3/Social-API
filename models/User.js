const { Schema, model } = require("mongoose");

// Creates the blueprint for our collection
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
        default: [],
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
});

userSchema.virtual("friendCount").get(function () {
  return `${this.id}`;
});

module.exports = model("User", userSchema);
