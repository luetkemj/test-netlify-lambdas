exports.handler = function (event, context, callback) {
  if (event.httpMethod === 'GET') {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: 'hello world',
        event: event,
        context: context
      })
    });
  }

  if (event.httpMethod === 'POST') {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: 'POSTing hello world',
      })
    });
  }
};
