const headers = require('./config/headers')

const requestListener = async (req, res) => {
  const { url, method } = req
  if (url === '/posts' && method === 'GET') {
  } else if (url === '/posts' && method === 'POST') {
  } else if (url === '/posts' && method === 'DELETE') {
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
