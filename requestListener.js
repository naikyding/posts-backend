const headers = require('./config/headers')
const { getPostList } = require('./post/get')
const postItem = require('./post/post')

const requestListener = async (req, res) => {
  const { url, method } = req
  if (url.startsWith('/posts') && method === 'GET') getPostList(req, res)
  else if (url === '/posts' && method === 'POST') postItem(req, res)
  else if (url === '/posts' && method === 'DELETE') {
  } else if (url.startsWith('/posts/') && method === 'DELETE') {
  } else if (url.startsWith('/posts/') && method === 'PATCH') {
  } else if (method === 'OPTIONS') {
    res.writeHead(200, headers)
    res.end()
  } else {
    res.writeHead(404, headers)
    res.end('Not Founded Pages')
  }
}

module.exports = requestListener
