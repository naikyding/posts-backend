const { createServer } = require('http')
const dbConnect = require('./DB/post')
dbConnect()
const requestListener = require('./requestListener')
const server = createServer(requestListener)

server.listen(process.env.PORT || 8080)
