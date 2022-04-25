const Post = require('../model/post')
const url = require('url')
const { successHandler, errorHandler } = require('../utils/responseHandler')

const getListHandler = async ({ sort, q }) => {
  try {
    const list = sort
      ? await Post.find({ content: new RegExp(q) }).sort({
          createdAt: sort === 'new' ? 1 : -1,
        })
      : await Post.find()

    return list
  } catch (error) {
    errorHandler({ res, error })
  }
}

const getPostList = async (req, res) => {
  try {
    const urlParse = url.parse(req.url, true)
    const { sort, q } = urlParse.query
    let list = await getListHandler({ sort, q })
    successHandler({
      res,
      data: list,
    })
  } catch (error) {
    errorHandler({ res, error })
  }
}

module.exports = {
  getPostList,
  getListHandler,
}
