import mongoose from "mongoose";

const Books = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    publishYear: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Books", Books);
