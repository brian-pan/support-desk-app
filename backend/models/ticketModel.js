const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please select a product"],
      enum: ["iPhone", "Macbook", "Macbook Pro", "iPad", "iMac"],
    },
    description: {
      type: String,
      required: [true, "Please select a description of the issue"],
    },
    status: {
      //ticket status
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
