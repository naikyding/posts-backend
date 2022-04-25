const Post = require('../model/post')
const { errorHandler, successHandler } = require('../utils/responseHandler')
const { getListHandler } = require('./get')

const bufferHandler = async (req) => {
  let buffers = []
  for await (const buffer of req) {
    buffers.push(buffer)
  }
  return JSON.parse(Buffer.concat(buffers).toString())
}

const postItem = async (req, res) => {
  try {
    const { name, avatar, image, content } = await bufferHandler(req)
    await Post.create({ name, avatar, image, content })
    const list = await getListHandler()
    successHandler({ res, data: list, statusCode: 201 })
  } catch ({ errors }) {
    errorHandler({ res, errors: errors || '資料錯誤' })
  }
}

module.exports = postItem
