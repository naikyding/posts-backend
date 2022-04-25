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
      default: '這是頭像 url',
    },
    content: {
      type: 'String',
      required: [true, '請輸入貼文內容'],
    },
    image: {
      type: String,
      default: '這是圖片 url',
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
