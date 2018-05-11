exports.handler = function(event, context, callback) {
  const jwt = require('jsonwebtoken');

  const token = jwt.sign({ foo: 'barder is the best oh boy YEEHA' }, 'SECRET');

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        token,
      },
      meta: {
        event,
        context,
      }
    })
  });
}
