const Post = require('../model/post')
const { successHandler, errorHandler } = require('../utiils/responseHandler')

const getPostList = async (res) => {
  try {
    const list = await Post.find()
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
}
