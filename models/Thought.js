const { Schema, model } = require("mongoose");
const moment = require("moment");

const Reaction = require("./Reaction");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) =>
      moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
  },
  reactions: [Reaction],
  id: false,
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("Thought", thoughtSchema);

//Export module
module.exports = Thoughts;
