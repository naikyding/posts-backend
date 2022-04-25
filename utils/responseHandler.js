const headers = require('../config/headers')

const successHandler = async ({
  res,
  statusCode = '200',
  message = '操作成功',
  data = [],
}) => {
  res.writeHead(statusCode, headers)
  res.end(
    JSON.stringify({
      status: 'Success',
      message,
      data,
    })
  )
}

const errorsHandler = (errors) =>
  errors.reduce((acc, cur) => {
    return (acc = [...acc, cur.message])
  }, [])

const errorHandler = async ({
  res,
  statusCode = '400',
  message = '操作失敗',
  errors = [],
}) => {
  res.writeHead(statusCode, headers)
  res.end(
    JSON.stringify({
      status: 'Error',
      message,
      errors:
        typeof errors === 'string'
          ? errors
          : errorsHandler([...Object.values(errors)]),
    })
  )
}

module.exports = {
  successHandler,
  errorHandler,
}
