const Post = require('../model/post')
const { successHandler, errorHandler } = require('../utiils/responseHandler')

const getListHandler = async () => {
  try {
    const list = await Post.find()
    return list
  } catch (error) {
    errorHandler({ res, error })
  }
}

const getPostList = async (res) => {
  try {
    const list = await getListHandler()
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
