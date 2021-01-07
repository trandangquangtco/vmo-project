const success = (method, title, data) => {
  const createSuccess = `${method} ${title} successful`
  return ({
    message: createSuccess,
    messageCode: createSuccess.split(' ').join('_').toUpperCase(),
    data: data,
    status: 200
  })
}

const login = (token, refresh) => {
  return ({
    message: 'login success',
    token: token,
    refreshToken: refresh,
    status: 200
  })
}

// const getSuccess = (title, data) => {
//   const getSuccess = `get ${title} successful`
//   return ({
//     message: getSuccess,
//     messageCode: getSuccess.split(' ').join('_').toUpperCase(),
//     data: data,
//     status: 200
//   })
// }

const fail = (error) => {
  return ({
    message: 'Internal server error',
    messageCode: 'INTERNAL_SERVER_ERROR',
    error: error,
    status: 500
  })
}

export { login, success, fail }
