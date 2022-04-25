const Post = require('../model/post')
const url = require('url')
const { successHandler, errorHandler } = require('../utils/responseHandler')

const getListHandler = async ({ sort, q }) => {
  try {
    const list = sort
      ? await Post.find({
          $or: [{ content: new RegExp(q) }, { name: new RegExp(q) }],
        }).sort({
          createdAt: sort === 'old' ? 1 : -1,
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
