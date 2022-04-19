const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    ticket: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Ticket",
    },

    text: {
      type: String,
      required: [true, "Please add some text"],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
