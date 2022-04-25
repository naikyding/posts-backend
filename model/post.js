const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, '請輸入貼文姓名'],
    },
    avatar: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: [true, '請輸入貼文內容'],
    },
    image: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
