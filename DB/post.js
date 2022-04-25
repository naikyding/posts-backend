const mongoose = require('mongoose')
require('dotenv').config()
const postDBUrl = process.env.POST_DB_URL.replace(
  '<password>',
  process.env.POST_DB_PWD
)

const dbConnect = async () => {
  try {
    await mongoose.connect(postDBUrl)
    console.log('POST 資料庫，連線成功')
  } catch {
    console.log('POST 資料庫，連線失敗')
  }
}

module.exports = dbConnect
