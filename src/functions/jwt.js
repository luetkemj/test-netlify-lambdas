exports.handler = function(event, context, callback) {
  const jwt = require('jsonwebtoken');

  const token = jwt.sign({ foo: 'barder is the best oh boy YEEHA' }, 'SECRET');

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      token,
    })
  });
}
