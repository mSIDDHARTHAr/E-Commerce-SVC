const createResponseModel = (statusCode , message , data = null) => {
  return {
    statusCode ,
    message ,
    data
  }
}

module.exports = createResponseModel;